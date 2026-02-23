"use client";

import HeroSection from "@/components/sections/BusinessDetail/HeroSection";
import AboutSection from "@/components/sections/BusinessDetail/AboutSection";
import GallerySection from "@/components/sections/BusinessDetail/GallerySection";
import CTASection from "@/components/sections/BusinessDetail/CTASection";
import { SchoolData } from "@/data/business/school";

export default function SchoolPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <HeroSection {...SchoolData.hero} />
      <AboutSection data={SchoolData.about} />
      {SchoolData.gallery && <GallerySection data={SchoolData.gallery} />}
      <CTASection data={SchoolData.cta} />
    </main>
  );
}