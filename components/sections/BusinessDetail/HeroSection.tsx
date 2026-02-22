"use client";

import Image from "next/image";
import Link from "next/link";

export type HeroSectionData = {
  backgroundImage: string;
  logo: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

export default function HeroSection({ data }: { data: HeroSectionData }) {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat text-center text-white"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      {data.logo && (
        <div className="absolute right-0 top-0 z-20 bg-white/90 p-6 shadow-lg backdrop-blur-sm">
          <Image
            src={data.logo}
            alt="Logo"
            width={130}
            height={130}
            className="object-contain"
          />
        </div>
      )}

      <div className="relative z-10 max-w-6xl px-6">
        <h1 className="font-serif text-3xl font-normal leading-snug tracking-wide md:text-4xl">
          {data.title}
        </h1>
        <p className="mx-auto mt-8 max-w-5xl font-serif text-xl font-extralight leading-relaxed text-gray-200 md:text-2xl">
          {data.description}
        </p>
        <Link
          href={data.buttonLink}
          className="mt-12 inline-block rounded-full border border-white bg-gradient-to-r from-red-800 to-red-600 px-12 py-4 text-lg font-semibold transition hover:scale-105"
        >
          {data.buttonText}
        </Link>
      </div>
    </section>
  );
}
