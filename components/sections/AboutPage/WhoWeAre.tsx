"use client";

import Image from "next/image";
import Typography from "@/lib/typography";

export default function WhoWeAreSection() {
  return (
    <section className="w-full bg-black py-6 xl:py-24 border-t border-b border-white/30">
      <div className="w-full max-auto px-6 lg:px-10 xl:px-24 2xl:px-36">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-2 xl:gap-4 items-center">
          
          {/* IMAGE - 40% */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end xl:justify-end order-1 lg:order-2 mb-4 lg:mb-0">
            <div className="relative w-full max-w-[240px] lg:max-w-md aspect-[4/5] lg:aspect-[5/5]">
              <Image
                src="https://pub-8ef2b42cbdf94e97a856dc5176f846d8.r2.dev/website/about/1771822088022-About_image.webp"
                alt="Founder"
                fill
                priority
                className="object-cover shadow-lg"
                style={{ objectPosition: "center" }}
              />
            </div>
          </div>

          {/* CONTENT - 60% */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <Typography
              variant="display-2xl"
              className="text-white mb-4 lg:mb-10 font-cormorant leading-relaxed font-medium text-center lg:text-left"
            >
              Who we are
            </Typography>

            <div className="space-y-3 lg:space-y-8 md:px-12 lg:px-0">
              <Typography
                variant="h1"
                className="text-white font-light font-cormorant"
              >
                VRM Group was founded on the vision of {" "}
                <span className="text-white font-bold">
                   Mr. Venkateshwar Rao Maguluri
                </span>
                , to create initiatives that empower communities and generate
                long-term value.
              </Typography>

              <Typography
                variant="h1"
                className="text-white font-light font-cormorant"
              >
                Over the years, this vision has grown into a diversified
                ecosystem spanning across education, real estate,
                infrastructure, industrial engineering, warehousing,
                hospitality and lifestyle experiences.
              </Typography>

              <Typography
                variant="h1"
                className="text-white font-light font-cormorant"
              >
                Each vertical operates independently while contributing to a
                larger narrative of responsible growth, disciplined execution
                and meaningful impact.
              </Typography>

              <Typography
                variant="h1"
                className="text-white font-light font-cormorant"
              >
                Today, VRM Group continues to evolve as a multi-sector
                organisation rooted in integrity, capability and long-term
                thinking.
              </Typography>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}