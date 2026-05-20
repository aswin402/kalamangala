import { ConstructionHero } from "./sections/ConstructionHero";
import { IntroSection } from "./sections/IntroSection";
import { PhilosophySection } from "./sections/PhilosophySection";
import { ServicesSection } from "./sections/ServicesSection";
import { AdvantageSection } from "./sections/AdvantageSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { CTASection } from "../../../components/CTASection";
import { FooterSection } from "./sections/FooterSection";
import { useSEO } from "@/hooks/useSEO";

export function ConstructionCompanyPage() {
  useSEO(
    "Trusted Construction Company in Tamil Nadu | Kalamangala",
    "Looking for the top construction company in Tamil Nadu? We deliver quality, reliability, and on-time project completion for residential and commercial buildings."
  );
  return (
    <main>
      <ConstructionHero />
      <IntroSection />
      <PhilosophySection />
      <ServicesSection />
      <AdvantageSection />
      <WhyChooseSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
