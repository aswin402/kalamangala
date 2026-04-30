import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ConstructionHero } from "./sections/ConstructionHero";
import { IntroSection } from "./sections/IntroSection";
import { PhilosophySection } from "./sections/PhilosophySection";
import { ServicesSection } from "./sections/ServicesSection";
import { AdvantageSection } from "./sections/AdvantageSection";
import { LifestyleBenefitsSection } from "./sections/LifestyleBenefitsSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { CTASection } from "./sections/CTASection";
import { FooterSection } from "./sections/FooterSection";

gsap.registerPlugin(ScrollTrigger);

export function ConstructionCompanyPage() {
  return (
    <main >
      <ConstructionHero />
      <IntroSection />
      <PhilosophySection />
      <ServicesSection />
      <AdvantageSection />
      <LifestyleBenefitsSection />
      <WhyChooseSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
