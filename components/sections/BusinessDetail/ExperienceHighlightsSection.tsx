"use client";

import Typography from "@/lib/typography";
import type { ExperienceHighlight } from "@/data/business/types";

export default function ExperienceHighlightsSection({
  highlights,
}: {
  highlights: ExperienceHighlight[];
}) {
  return (
    <section className="w-full bg-[#0d0d0d] py-12 md:py-16 lg:py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Typography
          variant="display-xl"
          className="font-cormorant text-white mb-8 md:mb-12"
        >
          Experience Highlights
        </Typography>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {highlights.map((item, index) => (
            <div key={index} className="space-y-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-[16/10] rounded-lg object-cover shadow-lg"
              />
              <Typography
                variant="h3"
                className="font-cormorant text-white font-medium"
              >
                {item.title}
              </Typography>
              <Typography
                variant="body-lg"
                className="text-white/85 font-light leading-relaxed"
              >
                {item.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
