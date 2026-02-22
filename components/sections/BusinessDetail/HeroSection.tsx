"use client";

import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/typography";

interface HeroBannerProps {
  backgroundImage: string;
  logo: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function HeroBanner({
  backgroundImage,
  logo,
  title,
  description,
  buttonText,
  buttonLink,
}: HeroBannerProps) {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Mobile logo – simple top-center (no tall strip so it doesn’t cover content) */}
      {logo ? (
        <div className="absolute top-4 left-1/2 z-20 -translate-x-1/2 sm:hidden">
          <Image
            src={logo}
            alt="Logo"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
      ) : null}

      {/* Desktop / tablet logo strip: bright at top-right, fades to bottom-left */}
      <div
        className="hidden sm:flex absolute top-0 right-0 z-20 h-full w-fit flex-col backdrop-blur-md overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom left, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.25) 35%, rgba(255,255,255,0.06) 60%, transparent 100%)",
        }}
      >
        <div className="p-4 md:p-6">
          {logo ? (
            <Image
              src={logo}
              alt="Logo"
              width={130}
              height={130}
              className="object-contain"
            />
          ) : null}
        </div>
      </div>

      {/* Center content: headline, body, button */}
      <div className="relative z-10 w-full max-w-[88rem] mx-auto text-center px-4 sm:px-6 sm:pr-40 lg:pr-48 xl:pr-44">
      <Typography
  variant="display-2xl"
  className="text-white font-normal text-[1.3rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[1.9rem] leading-tight tracking-normal"
>
  {title}
</Typography>

       <Typography
  variant="body-xl"
  className="font-cormorant text-white mt-6 md:mt-8 text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.5rem] leading-relaxed max-w-4xl mx-auto"
>
  {description}
</Typography>

<Link
  href={buttonLink}
  className="inline-flex items-center justify-center mt-8 md:mt-10 w-full sm:w-auto min-w-[10rem] px-8 md:px-12 py-3.5 md:py-4 rounded-full text-sm sm:text-base font-bold uppercase tracking-wide text-white bg-[#8B2F3D] border-2 border-white min-h-[48px] hover:opacity-95 transition-all duration-300"
  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
>
  {buttonText}
</Link>
      </div>
    </section>
  );
}