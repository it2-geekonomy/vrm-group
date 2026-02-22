"use client";

import Typography from "@/lib/typography";
import type { FacilityItem } from "@/data/business/types";

export default function FacilitiesSection({
  facilities,
}: {
  facilities: FacilityItem[];
}) {
  return (
    <section className="w-full bg-[#0d0d0d] py-12 md:py-16 lg:py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Typography
          variant="display-xl"
          className="font-cormorant text-white mb-10 md:mb-14"
        >
          Facilities
        </Typography>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3"
            >
              <img
                src={item.image}
                alt={item.label}
                className="h-12 w-auto object-contain"
              />
              <Typography
                variant="body-lg"
                className="text-white font-light text-center"
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
