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
  className="inline-flex items-center justify-center mt-8 px-10 sm:px-14 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold uppercase tracking-wide text-white border-2 border-white shadow-md hover:opacity-95 transition-all duration-300"
  style={{
    fontFamily: "Arial, Helvetica, sans-serif",
    background: "linear-gradient(180deg, #A53A45 0%, #8B2F3D 100%)",
  }}
>
  {buttonText}
</Link>
      </div>
    </section>
  );
}