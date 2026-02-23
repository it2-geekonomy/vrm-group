import HeroSection from "@/components/sections/BusinessDetail/HeroSection";
import AboutSection from "@/components/sections/BusinessDetail/AboutSection";
import ExperienceHighlightsSection from "@/components/sections/BusinessDetail/ExperienceHighlightsSection";
import CTASection from "@/components/sections/BusinessDetail/CTASection";

import { exoticBarBistroData } from "@/data/business/exotic-bar-bistro";

export default function Page() {
  const data = exoticBarBistroData;

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <HeroSection {...data.hero} />
      <AboutSection data={data.about} />
      <ExperienceHighlightsSection
        sectionTitle={data.experienceHighlights.sectionTitle}
        highlights={data.experienceHighlights.items}
      />
      <CTASection data={data.cta} />
    </main>
  );
}