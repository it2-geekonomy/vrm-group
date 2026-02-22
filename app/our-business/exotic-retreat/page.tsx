import HeroBanner from "@/components/HeroBanner";
import { pagesData } from "@/data/pagesData";

export default function LandingPage() {
  return <HeroBanner {...pagesData.landing} />;
}