import HeroSection from "@/components/sections/BusinessDetail/HeroSection";
import AboutSection from "@/components/sections/BusinessDetail/AboutSection";
import GallerySection from "@/components/sections/BusinessDetail/GallerySection";

import { SchoolData } from "@/data/business/school";

export default function Page() {
  const data = SchoolData;

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <HeroSection {...data.hero} />
      <AboutSection data={data.about} />
      {data.gallery && <GallerySection data={data.gallery} />}
    </main>
  );
}