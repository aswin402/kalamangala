import { ConstructionHero } from "./sections/ConstructionHero";
import { IntroSection } from "./sections/IntroSection";
import { PhilosophySection } from "./sections/PhilosophySection";
import { ServicesSection } from "./sections/ServicesSection";
import { AdvantageSection } from "./sections/AdvantageSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { CTASection } from "./sections/CTASection";
import { FooterSection } from "./sections/FooterSection";

export function ConstructionCompanyPage() {
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
