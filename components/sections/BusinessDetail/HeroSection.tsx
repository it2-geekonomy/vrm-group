"use client";

import Image from "next/image";
import Link from "next/link";

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
            height={16}
            className="object-contain"
          />
        </div>
      ) : null}

      {/* Desktop/tablet dynamic logo with gradient corner background */}
      {logo ? (
        <div
          className="hidden sm:flex absolute top-0 right-0 z-20 h-[220px] w-[150px] md:h-[250px] md:w-[170px] items-start justify-center p-3 md:p-4 backdrop-blur-[1px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.82) 28%, rgba(255,255,255,0.45) 55%, rgba(255,255,255,0.12) 70%, rgba(255,255,255,0) 80%)",
          }}
        >
          <Image
            src={logo}
            alt="Logo"
            width={118}
            height={118}
            className="object-contain"
          />
        </div>
      ) : null}

      {/* Center content: headline, body, button */}
      <div className="relative z-10 w-full max-w-[88rem] mx-auto text-center px-4 sm:px-6 sm:pr-40 lg:pr-48 xl:pr-44">
        <h1
          className="font-serif font-normal text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2rem] leading-snug tracking-wide text-white 2xl:whitespace-nowrap"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {title}
        </h1>

        <p
          className="mt-6 md:mt-8 font-serif font-normal text-[0.9375rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] text-white leading-relaxed max-w-3xl mx-auto"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {description}
        </p>

        {buttonLink ? (
          <Link href={buttonLink} className="inline-block mt-8 md:mt-10">
            <button
              className="w-full sm:w-auto min-w-[10rem] px-8 md:px-12 py-3.5 md:py-4 rounded-full text-sm sm:text-base font-bold uppercase tracking-wide text-white border-0 min-h-[48px] hover:opacity-95 transition-opacity"
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                backgroundColor: "#8B2F3D",
              }}
            >
              {buttonText}
            </button>
          </Link>
        ) : (
          <button
            className="mt-8 md:mt-10 w-full sm:w-auto min-w-[10rem] px-8 md:px-12 py-3.5 md:py-4 rounded-full text-sm sm:text-base font-bold uppercase tracking-wide text-white border-0 cursor-default min-h-[48px]"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              backgroundColor: "#8B2F3D",
            }}
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
}