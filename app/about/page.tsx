"use client";
import Hero from "@/components/sections/AboutPage/Hero";
import WhoWeAre from "@/components/sections/AboutPage/WhoWeAre";
import OurJourney from "@/components/sections/AboutPage/OurJourney";
import Futureinmotion from "@/components/sections/AboutPage/FutureinMotion";
import LastSection from "@/components/sections/AboutPage/LastSection";

export default function AboutSection() {
  return (
    <>
      <Hero/>
      <WhoWeAre />
      <OurJourney/>
      <Futureinmotion/>
      <LastSection/>
    </>
  );
}