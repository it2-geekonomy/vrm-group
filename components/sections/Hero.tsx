"use client";

import Link from "next/link";
import Typography from "@/lib/typography";

export default function AboutPage() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/homepage/1771743800305-IMG_2789.MP4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-2 sm:px-2 md:px-6 lg:px-10 xl:px-24">

        <div className="max-w-5xl">

          <Typography
            variant="display-2xl"
            className="text-white font-cormorant leading-relaxed font-medium"
          >
            Building Spaces, Experiences & Infrastructure for Tomorrow
          </Typography>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/our-business"
              className="inline-flex items-center justify-center rounded-2xl border border-white px-8 py-3 md:px-10 md:py-3.5 text-white transition bg-[#ED1C2475] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
            >
              <Typography variant="h4" className="font-cormorant text-white">
                Explore Our Businesses
              </Typography>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white px-8 py-3 md:px-10 md:py-3.5 text-white transition bg-[#ED1C2475] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
            >
              <Typography variant="h4" className="font-cormorant text-white">
                Make an Enquiry
              </Typography>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}