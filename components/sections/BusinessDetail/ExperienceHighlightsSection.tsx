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

  const CARD_WIDTH_PERCENT = 78;

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = (el.clientWidth * CARD_WIDTH_PERCENT) / 100;
    const amount = direction === "left" ? -cardWidth : cardWidth;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="w-full overflow-y-hidden bg-[#0b0b0b] py-12 md:py-16 lg:py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 md:px-8 mb-8 md:mb-12 flex items-center justify-between gap-4">
        <Typography
          variant="display-xl"
          className="font-cormorant text-white text-center md:text-left"
        >
          Experience Highlights
        </Typography>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/10"
            aria-label="Previous"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/10"
            aria-label="Next"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="no-scrollbar overflow-x-auto overflow-y-hidden scroll-smooth border-l-2 border-amber-500/60"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div
          className="flex min-w-0"
          style={{ width: `${highlights.length * CARD_WIDTH_PERCENT}%` }}
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="shrink-0 grow-0 space-y-4 snap-start px-5 md:px-8 flex flex-col"
              style={{
                width: `${100 / highlights.length}%`,
                minWidth: `${100 / highlights.length}%`,
                scrollSnapAlign: "start",
              }}
            >
              <div className="w-full max-w-[720px] lg:max-w-[800px] mx-auto overflow-hidden shrink-0 min-h-[260px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-[400px] max-h-[40vh] md:max-h-[44vh] lg:max-h-[50vh] aspect-[16/10]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="min-h-0 flex flex-col justify-center pr-2">
                <Typography
                  variant="h3"
                  className="font-cormorant text-white font-medium"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body-lg"
                  className="font-poppins text-white/90 font-light leading-relaxed"
                >
                  {item.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
