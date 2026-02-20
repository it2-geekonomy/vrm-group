"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Typography from "@/components/ui/Typography";
import { businesses } from "@/lib/constants";

const ANIM_CSS = `
  @keyframes _vrm-wipe-right {
    from { clip-path: inset(0 100% 0 0); }
    to   { clip-path: inset(0 0%   0 0); }
  }
  @keyframes _vrm-wipe-left {
    from { clip-path: inset(0 0 0 100%); }
    to   { clip-path: inset(0 0 0 0%);   }
  }
  @keyframes _vrm-ken-burns {
    from { transform: scale(1.07) translate(0.6%, 0.6%); }
    to   { transform: scale(1)    translate(0, 0); }
  }
  @keyframes _vrm-fade-up {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes _vrm-line-grow {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  @keyframes _vrm-card-in {
    0%   { opacity: 0; transform: translateX(20px) scale(0.97); }
    65%  { opacity: 1; transform: translateX(-3px) scale(1.005); }
    100% { opacity: 1; transform: translateX(0)    scale(1); }
  }
  @keyframes _vrm-shimmer {
    from { transform: translateX(-120%); }
    to   { transform: translateX(350%); }
  }
`;

function useInjectCSS(css: string) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const id = "__vrm_anim__";
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, []);
}

const SPRING = "cubic-bezier(0.22, 1, 0.36, 1)";
const SNAP   = "cubic-bezier(0.34, 1.56, 0.64, 1)";
const DUR    = 620;

export default function OurBusinessesSection() {
  useInjectCSS(ANIM_CSS);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey]         = useState(0);
  const [direction, setDirection]     = useState<"right" | "left">("right");
  const [locked, setLocked]           = useState(false);

  const goTo = useCallback((index: number, dir?: "right" | "left") => {
    if (locked || index === activeIndex) return;
    setLocked(true);
    setDirection(dir ?? (index > activeIndex ? "right" : "left"));
    setActiveIndex(index);
    setAnimKey((k) => k + 1);
    setTimeout(() => setLocked(false), DUR + 80);
  }, [locked, activeIndex]);

  const handlePrev = () => goTo(activeIndex === 0 ? businesses.length - 1 : activeIndex - 1, "left");
  const handleNext = () => goTo(activeIndex === businesses.length - 1 ? 0 : activeIndex + 1, "right");

  const handleCardClick = (index: number, isMobile = false) => {
    if (isMobile) {
      if (index === activeIndex) return;
      setActiveIndex(index);
      return;
    }
    goTo(index);
  };

  const rightSideBusinesses = businesses.filter((_, idx) => idx !== activeIndex);

  return (
    <section className="bg-[#1a1a1a] py-12 md:py-16 lg:py-20">
      <div className="px-4 sm:px-6 lg:px-8">

        {/* Header — unchanged */}
        <div className="mb-8 md:mb-12 lg:pl-[clamp(1rem,4vw+0.5rem,4rem)]">
          <Typography variant="display-2xl" className="font-cormorant font-medium text-white mb-3 md:mb-4">
            Our Businesses
          </Typography>
          <Typography variant="h2" className="font-cormorant font-medium text-white">
            Our connected portfolio serves individuals, communities and enterprises.
          </Typography>
        </div>

        {/* ── Mobile — unchanged markup ────────────────────────────────────── */}
        <div className="lg:hidden space-y-4">
          {businesses.map((business, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={business.id}
                className={`rounded-lg overflow-hidden transition-all duration-300 ${isActive ? "ring-2 ring-white" : ""}`}
              >
                <button
                  onClick={() => handleCardClick(index, true)}
                  className={`relative w-full h-24 rounded-lg overflow-hidden transition-all duration-300 ${isActive ? "hidden" : "block"}`}
                >
                  <Image src="/dummy.jpg" alt={business.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r  from-black/90 to-black/40 hover:from-black/40 hover:to-black/20" />
                  <div className="absolute inset-0 flex items-center px-4">
                    <Typography variant="h3" className="font-cormorant text-white">
                      {business.name}
                    </Typography>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-[300px] block" : "max-h-0 hidden"}`}
                  style={{ transitionTimingFunction: SPRING }}
                >
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image src="/dummy.jpg" alt={business.name} fill className="object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4">
                      <Typography
                        variant="h1"
                        className="font-cormorant text-black mb-2"
                        style={isActive ? { animation: `_vrm-fade-up 360ms 60ms ${SPRING} both` } : undefined}
                      >
                        {business.name}
                      </Typography>
                      <Typography
                        variant="body-lg"
                        className="font-poppins text-black"
                        style={isActive ? { animation: `_vrm-fade-up 360ms 130ms ${SPRING} both` } : undefined}
                      >
                        {business.description}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Desktop ──────────────────────────────────────────────────────── */}
        <div className="hidden lg:grid grid-cols-2 gap-6 md:gap-8 items-stretch">

          {/* Left — image + overlay animate as ONE unit via clip-path wipe */}
          <div className="relative h-[clamp(500px,50vw,750px)] rounded-lg overflow-hidden">

            {/*
              KEY CHANGE: The clip-path wipe wraps BOTH the image AND the overlay box.
              They are revealed together as a single cinematic curtain — no separate entrance.
            */}
            <div
              key={`panel-${animKey}`}
              style={{
                position: "absolute",
                inset: 0,
                animation: `${direction === "right" ? "_vrm-wipe-right" : "_vrm-wipe-left"} ${DUR}ms ${SPRING} both`,
              }}
            >
              {/* Ken Burns lives inside the wipe wrapper, only on the image layer */}
              <div
                key={`kb-${animKey}`}
                style={{
                  position: "absolute",
                  inset: 0,
                  animation: `_vrm-ken-burns 1400ms ${SPRING} both`,
                }}
              >
                <Image
                  src="/dummy.jpg"
                  alt={businesses[activeIndex].name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

          
              <div
                className="absolute bottom-0 left-0 right-0 h-[30%] font-cormorant rounded-t-xl bg-[#D7D7D7] backdrop-blur-sm flex flex-col p-3 lg:p-2.5 xl:p-3 2xl:p-3"
              >
                <Typography
                  variant="display-xl"
                  key={`name-${animKey}`}
                  className="font-cormorant text-black mb-1 lg:mb-1 xl:mb-1.5 2xl:mb-1 font-medium lg:text-[28px] xl:text-[32px] 2xl:text-[36px] leading-tight xl:leading-normal 2xl:leading-normal shrink-0"
                  style={{ animation: `_vrm-fade-up 340ms 420ms ${SPRING} both` }}
                >
                  {businesses[activeIndex].name}
                </Typography>

                <Typography
                  variant="h2"
                  key={`desc-${animKey}`}
                  className="font-cormorant text-black font-medium max-w-2xl lg:text-[18px] xl:text-[20px] 2xl:text-[25px] leading-snug lg:line-clamp-2 xl:line-clamp-3 2xl:line-clamp-none 2xl:leading-normal flex-1 overflow-hidden"
                  style={{ animation: `_vrm-fade-up 340ms 490ms ${SPRING} both` }}
                >
                  {businesses[activeIndex].description}
                </Typography>

                {/* Navigation Arrows */}
                <div
                  key={`arrows-${animKey}`}
                  className="flex justify-end gap-2 mt-1.5 lg:mt-1 xl:mt-2 2xl:mt-2.5 shrink-0"
                  style={{ animation: `_vrm-fade-up 280ms 540ms ${SPRING} both` }}
                >
                  <button
                    onClick={handlePrev}
                    className="w-8 h-8 rounded-full bg-black hover:bg-black/60 flex items-center justify-center transition-colors"
                    aria-label="Previous"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-8 h-8 rounded-full bg-black hover:bg-black/60 flex items-center justify-center transition-colors"
                    aria-label="Next"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right — card stack, same layout */}
          <div className="flex flex-col gap-4 h-[clamp(500px,50vw,750px)]">
            {rightSideBusinesses.map((business, cardIndex) => {
              const originalIndex = businesses.findIndex((b) => b.id === business.id);

              return (
                <button
                  key={`${business.id}-${animKey}`}
                  onClick={() => handleCardClick(originalIndex)}
                  className="relative flex-1 rounded-lg overflow-hidden group text-left"
                  style={{
                    animation: `_vrm-card-in 480ms ${SNAP} ${cardIndex * 48}ms both`,
                    transition: `transform 380ms ${SPRING}, box-shadow 300ms ease`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.02) translateX(-3px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 18px 50px rgba(0,0,0,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  <Image
                    src="/dummy.jpg"
                    alt={business.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/40 hover:from-black/40 hover:to-black/20 transition-all duration-300" />
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#ED1C24] origin-top scale-y-0 group-hover:scale-y-100"
                    style={{ transition: `transform 350ms ${SNAP}` }}
                  />
                  <div className="absolute inset-0 flex items-center px-6">
                    <Typography variant="h2" className="font-cormorant text-white font-medium">
                      {business.name}
                    </Typography>
                  </div>
                  <div
                    className="absolute inset-y-0 w-1/3 pointer-events-none z-10"
                    style={{
                      background: "linear-gradient(105deg, transparent, rgba(255,255,255,0.06), transparent)",
                      animation: `_vrm-shimmer 550ms ${SPRING} ${cardIndex * 48 + 160}ms both`,
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}