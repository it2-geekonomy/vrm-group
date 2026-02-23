import VisionSection from "@/components/sections/VisionSection";
import OurBusinessesSection from "@/components/sections/OurBusinessesSection";
import ConnectSection from "@/components/sections/ConnectSection";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero/>
      <VisionSection />
      <OurBusinessesSection />
      <ConnectSection />
    </>
  );
}
