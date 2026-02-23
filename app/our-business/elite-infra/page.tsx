import HeroSection from "@/components/sections/BusinessDetail/HeroSection";
import AboutSection from "@/components/sections/BusinessDetail/AboutSection";
import ExperienceHighlightsSection from "@/components/sections/BusinessDetail/ExperienceHighlightsSection";
import GallerySection from "@/components/sections/BusinessDetail/GallerySection";
import CTASection from "@/components/sections/BusinessDetail/CTASection";
import { eliteInfraData } from "@/data/business/elite-infra";

export default function EliteInfraPage() {
  const data = eliteInfraData;
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <HeroSection {...data.hero} />
      <AboutSection data={data.about} />
      <ExperienceHighlightsSection
        sectionTitle={data.experienceHighlights.sectionTitle}
        sectionSubtitle={data.experienceHighlights.sectionSubtitle}
        highlights={data.experienceHighlights.items}
      />
      {data.experienceHighlights2 && (
        <ExperienceHighlightsSection
          sectionTitle={data.experienceHighlights2.sectionTitle}
          sectionSubtitle={data.experienceHighlights2.sectionSubtitle}
          highlights={data.experienceHighlights2.items}
        />
      )}
      <GallerySection data={data.gallery} />
      <CTASection data={data.cta} />
    </main>
  );
}
