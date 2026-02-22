"use client";

import Typography from "@/lib/typography";
import type { FacilityItem } from "@/data/business/types";

type FacilitiesSectionProps = {
  facilities: FacilityItem[];
  title?: string;
};

export default function FacilitiesSection({
  facilities,
  title = "Facilities",
}: FacilitiesSectionProps) {
  return (
    <section className="w-full bg-[#0d0d0d] py-10 sm:py-12 md:py-16 lg:py-20 border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10">
        <Typography
          variant="display-xl"
          className="font-cormorant text-white mb-8 sm:mb-10 md:mb-14 text-center sm:text-left"
        >
          {title}
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-y-10 md:gap-y-12 gap-x-6 md:gap-x-10">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center sm:items-start gap-3 sm:gap-4"
            >
              <img
                src={item.image}
                alt={item.label}
                className="h-10 sm:h-11 md:h-12 lg:h-14 xl:h-16 w-auto object-contain"
              />
              <Typography
                variant="body-lg"
                className="text-white font-light text-center sm:text-left font-cormorant leading-snug"
              >
                {item.label}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
