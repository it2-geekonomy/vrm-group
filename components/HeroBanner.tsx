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
      className="relative h-screen w-full flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Logo Top Right with White Background */}
      <div className="absolute top-0 right-0 z-20 bg-white/90 backdrop-blur-sm p-6 shadow-lg">
        <Image
          src={logo}
          alt="Logo"
          width={130}
          height={130}
          className="object-contain"
        />
      </div>

      {/* Center Content */}
      <div className="relative z-10 max-w-6xl px-6">
        {/* Heading */}
        <h1 className="text-[2.5rem] md:text-[2.5rem] font-serif font-normal leading-snug tracking-wide">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-8 text-[2rem] md:text-[2rem] font-serif font-extralight text-gray-200 leading-relaxed max-w-5xl mx-auto">
  {description}
</p>

        {/* Button */}
        <Link href={buttonLink}>
          <button
            className="mt-12 px-12 py-4 rounded-full text-lg font-semibold
            bg-gradient-to-r from-red-800 to-red-600
            border border-white
            hover:scale-105 transition-all duration-300"
          >
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
}