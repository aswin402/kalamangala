import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Sections
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const reveals = containerRef.current?.querySelectorAll(".scroll-reveal");
    reveals?.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        },
      );
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#f9f8f3] overflow-x-hidden pt-24 pb-20"
    >
      <ConstructionHero />
      <IntroSection />
      <PhilosophySection />
      <ServicesSection />
      <AdvantageSection />
      <LifestyleBenefitsSection />
      <WhyChooseSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
