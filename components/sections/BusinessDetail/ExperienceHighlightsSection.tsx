"use client";

import { useRef } from "react";
import Typography from "@/lib/typography";
import type { ExperienceHighlight } from "@/data/business/types";

export default function ExperienceHighlightsSection({
  highlights,
}: {
  highlights: ExperienceHighlight[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const isDown = useRef(false);
const startX = useRef(0);
const scrollLeft = useRef(0);

const handleMouseDown = (e: React.MouseEvent) => {
  const el = scrollRef.current;
  if (!el) return;

  isDown.current = true;
  startX.current = e.pageX - el.offsetLeft;
  scrollLeft.current = el.scrollLeft;
};

const handleMouseLeave = () => {
  isDown.current = false;
};

const handleMouseUp = () => {
  isDown.current = false;
};

const handleMouseMove = (e: React.MouseEvent) => {
  const el = scrollRef.current;
  if (!el || !isDown.current) return;

  e.preventDefault();
  const x = e.pageX - el.offsetLeft;
  const walk = (x - startX.current) * 1.2; // drag speed
  el.scrollLeft = scrollLeft.current - walk;
};

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth;
    const amount = direction === "left" ? -cardWidth : cardWidth;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="w-full overflow-y-hidden bg-[#0b0b0b] py-8 sm:py-12 md:py-16 lg:py-20 border-t border-white/10 px-3 sm:px-6">
      <div className="mx-auto w-full max-w-[1200px] sm:w-[90%] md:w-[85%] lg:w-[80%]">
        <div className="mb-6 sm:mb-8 md:mb-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          <Typography
            variant="display-xl"
            className="font-cormorant text-white text-center sm:text-left order-2 sm:order-1"
          >
            Experience Highlights
          </Typography>
          <div className="flex items-center justify-center gap-2 shrink-0 order-1 sm:order-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/10 active:scale-95 touch-manipulation"
              aria-label="Previous"
            >
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/10 active:scale-95 touch-manipulation"
              aria-label="Next"
            >
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div
           ref={scrollRef}
           onMouseDown={handleMouseDown}
           onMouseLeave={handleMouseLeave}
           onMouseUp={handleMouseUp}
           onMouseMove={handleMouseMove}
           className="no-scrollbar overflow-x-auto overflow-y-hidden scroll-smooth touch-pan-x cursor-grab active:cursor-grabbing"
           style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          <div
            className="flex min-w-0"
            style={{ width: `${highlights.length * 100}%` }}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="shrink-0 grow-0 w-full space-y-3 sm:space-y-4 snap-start flex flex-col px-1 sm:px-0"
                style={{
                  width: `${100 / highlights.length}%`,
                  minWidth: `${100 / highlights.length}%`,
                  scrollSnapAlign: "start",
                }}
              >
                <div className="w-full overflow-hidden shrink-0 min-h-[200px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px] aspect-[16/10] max-h-[35vh] sm:max-h-[40vh] md:max-h-[45vh] lg:max-h-[50vh]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="min-h-0 flex flex-col justify-center py-1">
                  <Typography
                    variant="display-2xl"
                    className="font-cormorant text-white font-medium text-base sm:text-lg md:text-xl"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h2"
                    className="font-cormorant text-white/90 font-light leading-relaxed text-sm sm:text-base"
                  >
                    {item.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
