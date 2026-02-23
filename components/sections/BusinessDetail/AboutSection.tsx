"use client";

import Typography from "@/lib/typography";
import type { AboutSectionData } from "@/data/business/types";

export default function AboutSection({ data }: { data: AboutSectionData }) {
  return (
    <section className="w-full bg-[#0b0b0b] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-14 lg:gap-20 items-center">
          {/* Left: heading + paragraph */}
          <div className="order-2 md:order-1">
            <Typography
              variant="display-xl"
              className="font-cormorant text-[#f5f5f5] mb-5 md:mb-6 text-left"
            >
              {data.title}
            </Typography>
            <Typography
              variant="h2"
              className="font-cormorant font-light text-[#e8e8e8] leading-[1.75] text-left"
            >
              {data.description}
            </Typography>
          </div>
          {/* Right: image with subtle border */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <img
              src={data.image}
              alt={data.title}
              className="w-full max-w-lg border border-white/20 object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

