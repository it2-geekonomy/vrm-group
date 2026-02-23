"use client";

import { useRef, useState, useEffect } from "react";
import Typography from "@/lib/typography";
import type { ExperienceHighlight } from "@/data/business/types";

export default function CapabilitiesSection({
  highlights,
}: {
  highlights: ExperienceHighlight[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    // Use a small buffer (10px) to handle sub-pixel precision and scroll boundaries
    const isAtStart = el.scrollLeft <= 5;
    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10;

    setCanScrollLeft(!isAtStart);
    setCanScrollRight(!isAtEnd);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();

    // Listen to scroll events
    el.addEventListener("scroll", checkScroll);
    // Listen to resize events as they can change scrollWidth/clientWidth
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [highlights]); // Re-run if highlights change

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const slideWidth = el.clientWidth;

    el.scrollBy({
      left: direction === "left" ? -slideWidth : slideWidth,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const diff = e.clientX - startX.current;
    const threshold = 80;

    if (diff > threshold) scroll("left");
    else if (diff < -threshold) scroll("right");
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  return (
    <section className="w-full overflow-y-hidden bg-[#0b0b0b] py-8 sm:py-12 md:py-16 lg:py-20 border-t border-white/10 px-3 sm:px-6">
      <div className="mx-auto w-full max-w-[1200px] sm:w-[90%] md:w-[85%] lg:w-[80%]">

        {/* Header */}
        <div className="mb-6 sm:mb-8 md:mb-12 pl-3 sm:pl-16">
          <Typography
            variant="display-xl"
            className="font-cormorant text-white text-center sm:text-left"
          >
            Capabilities
          </Typography>
        </div>

        {/* Slider + Arrows Row */}
        <div className="flex items-center gap-4">

          {/* LEFT ARROW (Outside Image) */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className={`bg-black text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black border border-white/20 active:scale-95 ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
          >
            ←
          </button>

          {/* Slider */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="flex-1 no-scrollbar overflow-x-auto overflow-y-hidden scroll-smooth touch-pan-x cursor-grab active:cursor-grabbing"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="flex min-w-0">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="shrink-0 grow-0 w-full space-y-3 sm:space-y-4 snap-start flex flex-col"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="w-full overflow-hidden shrink-0 min-h-[200px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px] aspect-[16/10] max-h-[35vh] sm:max-h-[40vh] md:max-h-[45vh] lg:max-h-[50vh]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                      draggable={false}
                    />
                  </div>

                  <div className="flex flex-col justify-center py-1">
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

          {/* RIGHT ARROW (Outside Image) */}
          <button
            type="button"
            onClick={() => scroll("right")}
            className={`bg-black text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black border border-white/20 active:scale-95 ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
          >
            →
          </button>

        </div>
      </div>
    </section>
  );
}
