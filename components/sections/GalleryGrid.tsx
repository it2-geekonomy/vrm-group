"use client";

import { useMemo, useState, useRef, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import Typography from "@/components/ui/Typography";
import { galleryItems, galleryTabs, type GalleryCategory } from "@/lib/constants";

// Sticky filter sits below navbar: mobile nav ~68px, desktop ~84px
const NAVBAR_OFFSET_MOBILE = 68;
const NAVBAR_OFFSET_DESKTOP = 84;
// Unstick earlier when scrolling up so title/description return to original position (no overlap)
const UNSTICK_MARGIN = 120;
// Hysteresis: stick only after scrolling past this, unstick only when above the other (avoids mobile shake)
const STICK_SCROLL_TOP = 320;
const UNSTICK_SCROLL_TOP = 240;

const INITIAL_VISIBLE_COUNT = 9;
const LOAD_MORE_COUNT = 9;
const MOBILE_CARD_OPACITY_SIDE = 0.5;

export default function GalleryGrid() {
  const [activeTab, setActiveTab] = useState<GalleryCategory>("ALL");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [focusedCardIndex, setFocusedCardIndex] = useState<number>(1);
  const [tabIndicator, setTabIndicator] = useState({ left: 0, width: 0 });
  const [isFilterSticky, setIsFilterSticky] = useState(false);
  const [filterBarHeight, setFilterBarHeight] = useState(0);
  const initialScrollDone = useRef(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabsRowRef = useRef<HTMLDivElement>(null);
  const tabsScrollRef = useRef<HTMLDivElement>(null);
  const filterBarRef = useRef<HTMLDivElement>(null);
  const loadMoreSentinelRef = useRef<HTMLDivElement>(null);

  const filteredItems = useMemo(() => {
    if (activeTab === "ALL") {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.category === activeTab);
  }, [activeTab]);

  const visibleItems = useMemo(() => filteredItems.slice(0, visibleCount), [filteredItems, visibleCount]);
  const hasMore = visibleItems.length < filteredItems.length;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  useLayoutEffect(() => {
    const row = tabsRowRef.current;
    const activeIndex = galleryTabs.indexOf(activeTab);
    const btn = activeIndex >= 0 ? tabRefs.current[activeIndex] : null;
    if (!row || !btn) return;
    setTabIndicator({ left: btn.offsetLeft, width: btn.offsetWidth });
    btn.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [activeTab]);

  useEffect(() => {
    const row = tabsRowRef.current;
    if (!row) return;
    const ro = new ResizeObserver(() => {
      const activeIndex = galleryTabs.indexOf(activeTab);
      const btn = activeIndex >= 0 ? tabRefs.current[activeIndex] : null;
      if (btn) setTabIndicator({ left: btn.offsetLeft, width: btn.offsetWidth });
    });
    ro.observe(row);
    return () => ro.disconnect();
  }, [activeTab]);

  // Sticky filter: switch to fixed when filter bar would scroll past navbar (desktop only)
  useEffect(() => {
    const bar = filterBarRef.current;
    if (!bar) return;

    const getNavOffset = () => (typeof window !== "undefined" && window.innerWidth >= 768 ? NAVBAR_OFFSET_DESKTOP : NAVBAR_OFFSET_MOBILE);
    const isDesktop = () => typeof window !== "undefined" && window.innerWidth >= 768;

    const updateSticky = () => {
      // Mobile: never sticky, always in normal position
      if (!isDesktop()) {
        setIsFilterSticky(false);
        return;
      }

      // Desktop: sticky behavior
      const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
      // Hysteresis: unstick when above UNSTICK_SCROLL_TOP, stick only when past STICK_SCROLL_TOP
      if (scrollY < UNSTICK_SCROLL_TOP) {
        setIsFilterSticky(false);
        return;
      }
      if (scrollY >= STICK_SCROLL_TOP) {
        const rect = bar.getBoundingClientRect();
        const offset = getNavOffset();
        if (rect.top <= offset) {
          setIsFilterSticky(true);
          setFilterBarHeight(bar.offsetHeight);
        }
        return;
      }
      const rect = bar.getBoundingClientRect();
      const offset = getNavOffset();
      const unstickThreshold = offset + UNSTICK_MARGIN;
      if (rect.top > unstickThreshold) {
        setIsFilterSticky(false);
      }
    };

    updateSticky();
    window.addEventListener("scroll", updateSticky, { passive: true });
    window.addEventListener("resize", updateSticky);
    return () => {
      window.removeEventListener("scroll", updateSticky);
      window.removeEventListener("resize", updateSticky);
    };
  }, []);


  // Load more when user scrolls near the bottom (infinite scroll)
  useEffect(() => {
    const sentinel = loadMoreSentinelRef.current;
    if (!sentinel || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
        }
      },
      { root: null, rootMargin: "200px", threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, visibleCount]);

  useEffect(() => {
    const container = scrollRef.current;
    const secondCard = visibleItems.length >= 2 ? cardRefs.current[1] : null;
    if (!initialScrollDone.current && container && secondCard) {
      initialScrollDone.current = true;
      const scrollLeft =
        secondCard.offsetLeft - container.offsetWidth / 2 + secondCard.offsetWidth / 2;
      requestAnimationFrame(() => {
        if (scrollRef.current) scrollRef.current.scrollLeft = Math.max(0, scrollLeft);
      });
    }
  }, [visibleItems.length, activeTab]);

  useEffect(() => {
    const container = scrollRef.current;
    const cards = cardRefs.current.slice(0, visibleItems.length).filter(Boolean);
    if (!container || cards.length === 0) return;

    let debounceId: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (Number.isInteger(index)) {
            const ratio = entry.intersectionRatio;
            if (ratio >= 0.4) {
              clearTimeout(debounceId);
              debounceId = setTimeout(() => setFocusedCardIndex(index), 120);
            }
          }
        });
      },
      { root: container, threshold: [0.2, 0.4, 0.6, 0.8, 1], rootMargin: "0px" }
    );

    cards.forEach((el) => el && observer.observe(el));
    return () => {
      clearTimeout(debounceId);
      observer.disconnect();
    };
  }, [visibleItems.length]);

  const handleTabChange = (tab: GalleryCategory) => {
    setActiveTab(tab);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
    setDropdownOpen(false);
    setFocusedCardIndex(1);
    initialScrollDone.current = false;
  };

  const filterContent = (
    <>
      {/* Mobile: dropdown (default ALL) */}
      <div className="md:hidden" ref={dropdownRef}>
            <div className="relative w-full">
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-full bg-[#1a2332] px-5 py-3 text-left text-[14px] font-medium uppercase tracking-[0.12em] text-white shadow-sm"
                aria-expanded={dropdownOpen}
                aria-haspopup="listbox"
                aria-label="Select gallery category"
              >
                <span>{activeTab}</span>
                <svg className={`h-4 w-4 shrink-0 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <ul
                  role="listbox"
                  className="absolute left-0 right-0 top-full z-10 mt-1 max-h-[280px] overflow-auto rounded-2xl border border-[#2a2f39] bg-[#1a2332] py-2 shadow-lg"
                >
                  {galleryTabs.map((tab) => {
                    const isSelected = activeTab === tab;
                    return (
                      <li key={tab} role="option" aria-selected={isSelected}>
                        <button
                          type="button"
                          onClick={() => handleTabChange(tab)}
                          className={`w-full cursor-pointer px-5 py-3 text-left text-[13px] font-medium uppercase tracking-[0.1em] transition-colors ${
                            isSelected ? "bg-white/10 text-white" : "text-[#b8bcc4] hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {tab}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>

          {/* Desktop: horizontal tabs — scrollable; sliding underline; active tab scrolls into view when changed */}
          <div className="hidden border-b border-[#2a2f39] md:block">
            <div
              ref={tabsScrollRef}
              className="min-w-0 overflow-x-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div
                ref={tabsRowRef}
                className="relative flex w-max min-w-full flex-nowrap items-center justify-between gap-[clamp(20px,2vw,40px)] pb-[clamp(12px,0.95vw,16px)]"
              >
                {galleryTabs.map((tab, index) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      ref={(el) => { tabRefs.current[index] = el; }}
                      type="button"
                      onClick={() => handleTabChange(tab)}
                      className={`shrink-0 cursor-pointer whitespace-nowrap pb-2 text-[14px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 ease-out ${
                        isActive
                          ? "text-white"
                          : "text-[#7f8794] hover:text-[#c7ccd4]"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-0.5 rounded-full bg-white transition-all duration-300 ease-out"
                  style={{ width: tabIndicator.width, transform: `translateX(${tabIndicator.left}px)` }}
                />
              </div>
            </div>
          </div>
    </>
  );

  return (
    <section className="w-full min-w-0 bg-[#0a0d12]">
      <div className="flex w-full min-w-0 justify-center px-[clamp(16px,2vw,32px)]">
        <div className="w-full min-w-0 max-w-[1700px] pt-[clamp(52px,5.6vw,88px)] pb-14 md:pb-[clamp(52px,5.6vw,88px)]">
          <div className="max-w-[clamp(620px,52vw,980px)]">
            <Typography variant="display-2xl" className="font-cormorant text-white font-medium !text-[clamp(30px,3.1vw,38px)]">
              Our Gallery
            </Typography>
            <Typography variant="body-xl" className="mt-4 text-white leading-[1.5] font-normal font-cormorant !text-[clamp(18px,2vw,25px)]">
              Visual documentation across hospitality, infrastructure, residential development and industrial capabilities provides a glimpse into the VRM Group ecosystem.
            </Typography>
          </div>

          {/* Filter bar: in-flow when not sticky, fixed + spacer when sticky so images scroll behind */}
          {isFilterSticky ? (
            <>
              <div ref={filterBarRef} style={{ height: filterBarHeight }} aria-hidden="true" />
              <div
                className="fixed left-0 right-0 z-10 bg-[#0a0d12] border-b border-[#2a2f39] shadow-[0_4px_12px_rgba(0,0,0,0.4)] top-[68px] md:top-[84px]"
              >
                <div className="flex w-full min-w-0 justify-center px-[clamp(16px,2vw,32px)] pt-3 pb-1 md:pt-4 md:pb-0">
                  <div className="w-full min-w-0 max-w-[1700px] py-[clamp(12px,0.95vw,16px)] md:pb-[clamp(12px,0.95vw,16px)]">
                    {filterContent}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div ref={filterBarRef} className="mt-[clamp(24px,2.1vw,34px)]">
              {filterContent}
            </div>
          )}

          {/* Mobile: center bit big, sides smaller; opacity only (no blur). Debounce avoids shaking. */}
          <div
            ref={scrollRef}
            className="mt-[clamp(26px,2.2vw,38px)] flex gap-3 overflow-x-auto overflow-y-visible snap-x snap-mandatory py-[3vw] pl-[15vw] pr-[15vw] md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [scroll-snap-stop:always]"
            style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
          >
            {visibleItems.map((item, index) => {
              const isActive = focusedCardIndex === index;
              return (
                <div
                  key={item.id}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  data-index={index}
                  className="relative flex h-[55vw] w-[70vw] min-w-[70vw] flex-shrink-0 snap-center items-center justify-center overflow-visible rounded-xl"
                >
                  <div
                    className="relative h-full w-full overflow-hidden rounded-xl border border-[#1f2430] bg-[#10141d] transition-[transform,opacity] duration-300 ease-out"
                    style={{
                      opacity: isActive ? 1 : MOBILE_CARD_OPACITY_SIDE,
                      transform: isActive ? "scale(1.05)" : "scale(0.92)",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="70vw"
                      className="object-cover"
                      priority={index <= 1}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: grid — 3 images per row */}
          <div className="mt-[clamp(26px,2.2vw,38px)] hidden gap-[clamp(16px,1vw,22px)] md:grid md:grid-cols-3">
            {visibleItems.map((item) => (
              <article
                key={item.id}
                className="group relative aspect-[13.5/9] overflow-hidden rounded-xl border border-[#1f2430] bg-[#10141d]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={item.id <= 3}
                />
              </article>
            ))}
          </div>

          {/* Sentinel: when visible, load more photos (infinite scroll) */}
          {hasMore && <div ref={loadMoreSentinelRef} className="h-1 w-full" aria-hidden="true" />}
        </div>
      </div>
    </section>
  );
}