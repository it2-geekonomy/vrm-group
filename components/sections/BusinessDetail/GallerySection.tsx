"use client";

import Typography from "@/lib/typography";
import type { GallerySectionData } from "@/data/business/types";
import { useRef, useEffect, useState } from "react";

export default function GallerySection({ data }: { data?: GallerySectionData }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const isDragging = useRef(false);
  const lastX = useRef(0);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -600 : 600,
      behavior: "smooth",
    });

    setTimeout(updateScrollState, 400);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    lastX.current = e.clientX;
    document.body.style.userSelect = "none";
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !scrollRef.current) return;
      const delta = e.clientX - lastX.current;
      scrollRef.current.scrollLeft -= delta;
      lastX.current = e.clientX;
      updateScrollState();
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.body.style.userSelect = "auto";
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", updateScrollState);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    updateScrollState();

    return () => {
      if (el) el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  if (!data || !data.images || data.images.length === 0) return null;

  return (
    <section className="w-full bg-[#0d0d0d] py-20 border-t border-white/10 px-3 sm:px-6">

      {/* TEXT */}
      <div className="mx-auto w-full max-w-[1200px] sm:w-[90%] md:w-[85%] lg:w-[80%]">
        <Typography
          variant="display-xl"
          className="text-white font-semibold text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] mb-4"
        >
          {data.title}
        </Typography>

        <Typography
          variant="body-xl"
          className="font-cormorant text-white/85 font-light text-[1.2rem] md:text-[1.6rem] lg:text-[2rem] leading-relaxed mb-12 max-w-5xl"
        >
          {data.subtitle}
        </Typography>
      </div>

      {/* GALLERY ROW */}
      <div className="mx-auto max-w-[95rem] px-4 md:px-6">
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">

          {/* LEFT ARROW */}
          {canScrollLeft && (
            <div className="flex flex-shrink-0">
              <button
                onClick={() => scroll("left")}
                className="
                  bg-[#090d12] text-white
                  rounded-full
                  w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
                  flex items-center justify-center
                  hover:bg-white hover:text-black
                  transition
                "
              >
                ←
              </button>
            </div>
          )}

          {/* GALLERY */}
          <div className="flex-1 overflow-hidden relative">
            <svg width="0" height="0">
              <defs>
                <clipPath id="galleryCurve" clipPathUnits="objectBoundingBox">
                  <path
                    d="
                      M0,0
                      Q0.5,0.08 1,0
                      L1,1
                      Q0.5,0.92 0,1
                      Z
                    "
                  />
                </clipPath>
              </defs>
            </svg>

            <div
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              className="
                flex gap-4 sm:gap-6 md:gap-8
                overflow-x-scroll no-scrollbar
                bg-[#090d12]
                w-full
                h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px]
              "
              style={{ clipPath: "url(#galleryCurve)" }}
            >
              {data.images.filter(Boolean).map((src, index) => (
                <img
                  key={index}
                  src={src}
                  draggable={false}
                  alt={`${data.title} ${index + 1}`}
                  className="
                    flex-shrink-0
                    w-[250px] sm:w-[400px] md:w-[500px] lg:w-[800px]
                    h-full
                    object-cover
                  "
                />
              ))}
            </div>
          </div>

          {/* RIGHT ARROW */}
          {canScrollRight && (
            <div className="flex flex-shrink-0">
              <button
                onClick={() => scroll("right")}
                className="
                  bg-[#090d12] text-white
                  rounded-full
                  w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
                  flex items-center justify-center
                  hover:bg-white hover:text-black
                  transition
                "
              >
                →
              </button>
            </div>
          )}

        </div>
      </div>

    </section>
  );
}