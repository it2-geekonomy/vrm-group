"use client";

import Typography from "@/lib/typography";
import type { GallerySectionData } from "@/data/business/types";
import { useRef } from "react";

export default function GallerySection({ data }: { data: GallerySectionData }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -600 : 600,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[#0d0d0d] py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        <Typography
          variant="display-xl"
          className="font-cormorant text-white text-[3rem] md:text-[3.5rem] font-semibold mb-4"
        >
          {data.title}
        </Typography>

        <p className="text-white/85 font-cormorant font-light text-[1.6rem] leading-relaxed mb-12">
          {data.subtitle}
        </p>
{/* Curved Scroll Container */}
<div className="relative mt-10 w-full overflow-hidden">

  {/* Responsive SVG ClipPath */}
  <svg width="0" height="0">
    <defs>
      <clipPath id="galleryCurve" clipPathUnits="objectBoundingBox">
        <path d="
          M0,0
          Q0.5,0.08 1,0
          L1,1
          Q0.5,0.92 0,1
          Z
        " />
      </clipPath>
    </defs>
  </svg>

  <div
    ref={scrollRef}
    className="
      flex gap-6 md:gap-8
      overflow-x-scroll no-scrollbar
      bg-black
      w-full
      h-[220px] sm:h-[280px] md:h-[350px] lg:h-[400px]
    "
    style={{
      clipPath: "url(#galleryCurve)",
    }}
  >
    {data.images.filter(Boolean).map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`${data.title} ${index + 1}`}
        className="
          flex-shrink-0
          w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]
          h-full
          object-cover
        "
      />
    ))}
  </div>

  {/* Navigation Buttons */}
  <div className="flex justify-between mt-6 md:mt-8">
    <button
      onClick={() => scroll("left")}
      className="bg-black text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
    >
      ←
    </button>

    <button
      onClick={() => scroll("right")}
      className="bg-black text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
    >
      →
    </button>
          </div>

        </div>
      </div>
    </section>
  );
}