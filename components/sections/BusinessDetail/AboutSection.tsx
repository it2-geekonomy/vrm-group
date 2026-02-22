"use client";

import Typography from "@/lib/typography";
import type { AboutSectionData } from "@/data/business/types";

export default function AboutSection({ data }: { data: AboutSectionData }) {
  return (
    <section className="w-full bg-[#0d0d0d] py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <Typography
              variant="display-xl"
              className="font-cormorant text-white mb-4 md:mb-6"
            >
              {data.title}
            </Typography>
            <Typography
              variant="body-xl"
              className="text-white/90 font-light font-cormorant leading-relaxed"
            >
              {data.description}
            </Typography>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <img
              src={data.image}
              alt={data.title}
              className="w-full max-w-md rounded-lg object-cover shadow-xl aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
