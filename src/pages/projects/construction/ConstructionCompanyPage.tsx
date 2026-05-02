import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";

import { ConstructionHero } from "./sections/ConstructionHero";
import { IntroSection } from "./sections/IntroSection";
import { PhilosophySection } from "./sections/PhilosophySection";
import { ServicesSection } from "./sections/ServicesSection";
import { AdvantageSection } from "./sections/AdvantageSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { CTASection } from "./sections/CTASection";
import { FooterSection } from "./sections/FooterSection";

gsap.registerPlugin(ScrollTrigger);

export function ConstructionCompanyPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  const { fadeInUp, staggerFadeInUp, scaleIn } = useScrollAnimations();

  useEffect(() => {
    const ctx = gsap.context(() => {
      fadeInUp(".km-reveal");
      fadeInUp(".la-reveal");
      scaleIn(".la-card", { scale: 0.985 });
      staggerFadeInUp(".km-service", { y: 60, stagger: 0.1 });
    }, pageRef);

    return () => ctx.revert();
  }, [fadeInUp, staggerFadeInUp, scaleIn]);

  return (
    <main ref={pageRef}>
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
