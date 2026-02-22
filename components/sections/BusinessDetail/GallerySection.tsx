"use client";

import Typography from "@/lib/typography";
import type { GallerySectionData } from "@/data/business/types";

export default function GallerySection({ data }: { data: GallerySectionData }) {
  return (
    <section className="w-full bg-[#0d0d0d] py-12 md:py-16 lg:py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Typography
          variant="display-xl"
          className="font-cormorant text-white mb-2"
        >
          {data.title}
        </Typography>
        <Typography
          variant="body-lg"
          className="text-white/85 font-light mb-8 md:mb-10"
        >
          {data.subtitle}
        </Typography>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {data.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${data.title} ${index + 1}`}
              className="w-full aspect-[16/10] rounded-lg object-cover shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
