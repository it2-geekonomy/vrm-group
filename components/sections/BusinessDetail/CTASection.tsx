"use client";

import Link from "next/link";
import type { CTASectionData } from "@/data/business/types";
import Typography from "@/lib/typography";

export default function CTASection({ data }: { data: CTASectionData }) {
  return (
    <section className="w-full bg-[#0b0b0b] py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <Typography
  variant="h2"
  className="text-white font-cormorant font-light text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] tracking-wide mb-6 sm:mb-8 md:mb-10"
>
  {data.heading}
</Typography>
        <Typography
  variant="body-xl"
  className="font-cormorant text-white/80 font-light text-[1rem] sm:text-[1.3rem] md:text-[1.6rem] lg:text-[1.8rem] leading-relaxed mb-4 sm:mb-6 md:mb-8"
>
  {data.subtitle}
</Typography>
        <Link
          href={data.buttonLink}
          className="inline-flex items-center justify-center rounded-full px-10 sm:px-12 md:px-16 py-2 md:py-3 text-white font-bold uppercase tracking-wider text-lg bg-[#8B0000] hover:bg-[#A52A2A] border-2 border-white transition-all duration-300"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          {data.buttonText}
        </Link>
      </div>
    </section>
  );
}
