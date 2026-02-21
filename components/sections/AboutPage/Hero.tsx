"use client";

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
        <source src="/Diverse Sectors.mp4" type="video/mp4" />
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
            Driven by Vision. Built Through Progress.
          </Typography>

          <Typography
            variant="h1"
            className="text-white font-cormorant mt-6 font-light"
          >
            From education to engineering, hospitality to infrastructure.
            VRM Group’s journey reflects steady expansion guided by purpose,
            leadership and execution.
          </Typography>

        </div>
      </div>

    </section>
  );
}