"use client";

import HeroSection from "@/components/sections/BusinessDetail/HeroSection";
import AboutSection from "@/components/sections/BusinessDetail/AboutSection";
import ExperienceHighlightsSection from "@/components/sections/BusinessDetail/ExperienceHighlightsSection";
import GallerySection from "@/components/sections/BusinessDetail/GallerySection";
import CTASection from "@/components/sections/BusinessDetail/CTASection";
import { exoticHospitalityData } from "@/data/business/exotic-hospitality";

export default function ExoticHospitalityPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <HeroSection {...exoticHospitalityData.hero} />
      <AboutSection data={exoticHospitalityData.about} />
      <ExperienceHighlightsSection highlights={exoticHospitalityData.experienceHighlights} />
      <GallerySection data={exoticHospitalityData.gallery} />
      <CTASection data={exoticHospitalityData.cta} />
    </main>
  );
}
