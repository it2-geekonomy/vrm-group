"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Typography from "@/components/ui/Typography";
import { galleryItems, galleryTabs, type GalleryCategory } from "@/lib/constants";

const INITIAL_VISIBLE_COUNT = 9;
const LOAD_MORE_COUNT = 3;

export default function GalleryGrid() {
  const [activeTab, setActiveTab] = useState<GalleryCategory>("ALL");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const filteredItems = useMemo(() => {
    if (activeTab === "ALL") {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.category === activeTab);
  }, [activeTab]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleItems.length < filteredItems.length;

  const handleTabChange = (tab: GalleryCategory) => {
    setActiveTab(tab);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  return (
    <section className="bg-[#0a0d12]">
      <div className="flex justify-center px-[clamp(16px,2vw,32px)]">
        <div className="w-full max-w-[1700px] px-[clamp(18px,2.4vw,36px)] py-[clamp(52px,5.6vw,88px)]">
          <div className="max-w-[clamp(620px,52vw,980px)] px-[clamp(24px,2.2vw,42px)]">
            <Typography variant="display-2xl" className="font-cormorant text-white font-medium !text-[clamp(30px,3.1vw,38px)]">
              Our Gallery
            </Typography>
            <Typography variant="body-xl" className="mt-4 text-[#b8bcc4] leading-[1.5] font-cormorant !text-[clamp(18px,2vw,25px)]">
              Visual documentation across hospitality, infrastructure, residential development and industrial capabilities provides a glimpse into the VRM Group ecosystem.
            </Typography>
          </div>

          <div className="mt-[clamp(24px,2.1vw,34px)] border-b border-[#2a2f39] px-[clamp(24px,2.2vw,42px)]">
            <div className="flex w-full gap-[clamp(20px,1.1vw,30px)] overflow-x-auto pb-[clamp(12px,0.95vw,16px)] md:justify-between md:gap-4 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-[#363d49] [&::-webkit-scrollbar-track]:bg-transparent">
              {galleryTabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => handleTabChange(tab)}
                    className={`shrink-0 pb-2 text-[14px] font-medium tracking-[0.12em] uppercase transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-[#7f8794] hover:text-[#c7ccd4]"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-[clamp(26px,2.2vw,38px)] grid grid-cols-1 gap-[clamp(22px,1.15vw,24px)] sm:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item) => (
              <article
                key={item.id}
                className="group relative aspect-square lg:aspect-[4/3] overflow-hidden border border-[#1f2430] bg-[#10141d]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1920px) 33vw, 540px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={item.id <= 3}
                />
              </article>
            ))}
          </div>

          {hasMore && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_COUNT)}
                className="rounded-full border border-white bg-[#ED1C2475] px-[clamp(42px,3.8vw,64px)] py-[clamp(14px,1.2vw,18px)] text-[clamp(13px,0.8vw,15px)] uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-transparent"
              >
                Load More Photos
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
