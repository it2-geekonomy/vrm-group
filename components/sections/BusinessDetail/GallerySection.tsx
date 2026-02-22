"use client";

import Typography from "@/lib/typography";
import type { GallerySectionData } from "@/data/business/types";

export default function GallerySection({ data }: { data: GallerySectionData }) {
  return (
    <section className="w-full bg-[#0d0d0d] py-12 md:py-16 lg:py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Typography
          variant="display-xl"
          className="font-cormorant text-white text-[3rem] md:text-[3.5rem] font-semibold mb-4"
        >
          {data.title}
        </Typography>
        <p
          className="text-white/85 font-cormorant font-light text-[1.6rem] leading-relaxed mb-8 md:mb-10"
          style={{ fontFamily: "Cormorant, serif" }}
        >
          {data.subtitle}
        </p>
        <div className="relative">
          <div className="flex overflow-x-scroll space-x-6 no-scrollbar gallery-scroll">
            {data.images.filter(Boolean).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`${data.title} ${index + 1}`}
                className="w-[600px] h-[400px] flex-shrink-0 object-cover shadow-lg"
              />
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button
              className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
              onClick={() => {
                const container = document.querySelector(".gallery-scroll");
                if (container) {
                  container.scrollBy({ left: -600, behavior: "smooth" });
                }
              }}
            >
              ←
            </button>
            <button
              className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
              onClick={() => {
                const container = document.querySelector(".gallery-scroll");
                if (container) {
                  container.scrollBy({ left: 600, behavior: "smooth" });
                }
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
