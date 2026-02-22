"use client";

import Link from "next/link";
import type { CTASectionData } from "@/data/business/types";

export default function CTASection({ data }: { data: CTASectionData }) {
  return (
    <section className="w-full bg-[#0b0b0b] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2
          className="font-serif font-light text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] tracking-wide text-white mb-6 sm:mb-8 md:mb-10"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {data.heading}
        </h2>
        <p
          className="font-sans font-light text-[1rem] sm:text-[1.3rem] md:text-[1.25rem] lg:text-[1.375rem] text-white/80 leading-relaxed mb-4 sm:mb-6 md:mb-8"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {data.subtitle}
        </p>
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
