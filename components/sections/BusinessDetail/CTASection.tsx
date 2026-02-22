"use client";

import Link from "next/link";
import Typography from "@/lib/typography";
import type { CTASectionData } from "@/data/business/types";

export default function CTASection({ data }: { data: CTASectionData }) {
  return (
    <section className="w-full bg-[#0b0b0b] py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <Typography
          variant="display-xl"
          className="font-cormorant text-white mb-4"
        >
          {data.heading}
        </Typography>
        <Typography
          variant="body-xl"
          className="text-white/90 font-light mb-8"
        >
          {data.subtitle}
        </Typography>
        <Link
          href={data.buttonLink}
          className="inline-flex items-center justify-center rounded-md border border-white bg-[#b22222] px-12 py-4 text-white transition hover:bg-[#c92a2a]"
        >
          <Typography variant="overline" className="text-white normal-case">
            {data.buttonText}
          </Typography>
        </Link>
      </div>
    </section>
  );
}
