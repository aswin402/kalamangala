import { LocationHero } from "./sections/LocationHero";
import { WelcomeSection } from "./sections/WelcomeSection";
import { LandmarksSection } from "./sections/LandmarksSection";
import { ConnectivitySection } from "./sections/ConnectivitySection";
import { GrowthSection } from "./sections/GrowthSection";
import { AdvantageSection } from "./sections/AdvantageSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { CTASection } from "../../components/CTASection";
import { FooterSection } from "./sections/FooterSection";
import { useSEO } from "@/hooks/useSEO";

export function LocationAdvantagePage() {
  useSEO(
    "Real Estate Builders In Tamil nadu | Kalamangala",
    "Experience premium residential plotting in Tamil Nadu with Kalamangala—secure, thoughtfully designed, and future-ready locations."
  );
  return (
    <main>
      <LocationHero />
      <WelcomeSection />
      <LandmarksSection />
      <ConnectivitySection />
      <GrowthSection />
      <AdvantageSection />
      <WhyChooseSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
