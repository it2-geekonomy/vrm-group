import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExperienceHighlightsSection from "./ExperienceHighlightsSection";
import GallerySection from "./GallerySection";
import CTASection from "./CTASection";
import type { BusinessDetailData } from "@/data/business/types";

export default function BusinessDetailContent({ data }: { data: BusinessDetailData }) {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <HeroSection {...data.hero} />
      <AboutSection data={data.about} />
      <ExperienceHighlightsSection
        sectionTitle={data.experienceHighlights.sectionTitle}
        highlights={data.experienceHighlights.items}
      />
      <GallerySection data={data.gallery} />
      <CTASection data={data.cta} />
    </main>
  );
}
