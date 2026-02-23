"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/BusinessDetail/HeroSection";
import AboutSection from "@/components/sections/BusinessDetail/AboutSection";
import ExperienceHighlightsSection from "@/components/sections/BusinessDetail/ExperienceHighlightsSection";
import FacilitiesSection from "@/components/sections/BusinessDetail/FacilitiesSection";
import GallerySection from "@/components/sections/BusinessDetail/GallerySection";
import BusinessEnquiryForm from "@/components/sections/BusinessDetail/BusinessEnquiryForm";
import CTASection from "@/components/sections/BusinessDetail/CTASection";
import { exoticRetreatData } from "@/data/business/exotic-retreat";

export default function ExoticRetreatPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const data = exoticRetreatData;

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <HeroSection {...data.hero} onEnquiryClick={() => setIsFormOpen(true)} />
      <AboutSection data={data.about} />
      <ExperienceHighlightsSection
        sectionTitle={data.experienceHighlights.sectionTitle}
        sectionSubtitle={data.experienceHighlights.sectionSubtitle}
        highlights={data.experienceHighlights.items}
      />
      {data.facilities && <FacilitiesSection facilities={data.facilities} />}
      {data.gallery && <GallerySection data={data.gallery} />}
      <CTASection data={data.cta} onEnquiryClick={() => setIsFormOpen(true)} />
      <BusinessEnquiryForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </main>
  );
}
