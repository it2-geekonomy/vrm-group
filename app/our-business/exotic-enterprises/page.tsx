import HeroSection from "@/components/sections/BusinessDetail/HeroSection";
import AboutSection from "@/components/sections/BusinessDetail/AboutSection";
import CapabilitiesSection from "@/components/sections/BusinessDetail/CapabilitiesSection";
import CTASection from "@/components/sections/BusinessDetail/CTASection";
import { exoticEnterprisesData } from "@/data/business/Exotic-Enterprises";

export default function ExoticEnterprisesPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <HeroSection {...exoticEnterprisesData.hero} />
      <AboutSection data={exoticEnterprisesData.about} />
      <CapabilitiesSection highlights={exoticEnterprisesData.experienceHighlights.items} />
      <CTASection data={exoticEnterprisesData.cta} />
    </main>
  );
}
