"use client";

import Image from "next/image";
import Link from "next/link";
import Typography from "@/lib/typography";

interface HeroBannerProps {
  videoSrc: string;
  logo: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function HeroBanner({
  videoSrc,
  logo,
  title,
  description,
  buttonText,
  buttonLink,
}: HeroBannerProps) {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 text-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Mobile logo – simple top-center (no tall strip so it doesn’t cover content) */}
      {logo ? (
        <div className="absolute top-4 left-1/2 z-20 -translate-x-1/2 sm:hidden">
          <Image
            src={logo}
            alt="Logo"
            width={96}
            height={16}
            className="object-contain"
          />
        </div>
      ) : null}

      {/* Desktop/laptop dynamic logo with gradient corner background */}
      {logo ? (
        <div
          className="hidden sm:flex absolute top-0 right-0 z-20 h-[200px] w-[130px] sm:h-[220px] sm:w-[150px] md:h-[250px] md:w-[170px] lg:h-[280px] lg:w-[190px] xl:h-[320px] xl:w-[220px] items-start justify-center p-3 md:p-4 lg:p-6 backdrop-blur-[1px] transition-all duration-300"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.82) 28%, rgba(255,255,255,0.45) 55%, rgba(255,255,255,0.12) 70%, rgba(255,255,255,0) 80%)",
          }}
        >
          <div className="relative w-full aspect-square max-w-[80%] sm:max-w-[85%] md:max-w-[90%] lg:max-w-full">
            <Image
              src={logo}
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}

      {/* Center content: headline, body, button */}
      <div className="relative z-10 w-full max-w-[88rem] mx-auto text-center px-4 sm:px-6">
        <Typography
          variant="display-2xl"
          className="text-white font-cormorant font-normal text-[2rem] sm:text-[2.2rem] md:text-[2.3rem] lg:text-[2.5rem] leading-tight tracking-normal"
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
          className="inline-flex items-center justify-center mt-8 px-10 sm:px-14 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold uppercase tracking-wide text-white border border-white shadow-md transition-all duration-300"
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            background: "#ED1C2475",
          }}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}