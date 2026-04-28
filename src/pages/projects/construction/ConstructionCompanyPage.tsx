import { useEffect, useRef } from "react";
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
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".km-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 48,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 87%",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".km-service").forEach((el, index) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 55,
            scale: 0.985,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.95,
            delay: index * 0.04,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
            },
          },
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="w-full overflow-x-hidden bg-[#fbfaf1] text-[#0d2b22]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='48' height='42' viewBox='0 0 48 42' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ddd8c6' stroke-width='1' stroke-opacity='.72'%3E%3Cpath d='M12 0 0 10.5 12 21 0 31.5 12 42'/%3E%3Cpath d='M24 0 12 10.5 24 21 12 31.5 24 42'/%3E%3Cpath d='M36 0 24 10.5 36 21 24 31.5 36 42'/%3E%3Cpath d='M48 0 36 10.5 48 21 36 31.5 48 42'/%3E%3C/g%3E%3C/svg%3E\")",
        backgroundSize: "48px 42px",
      }}
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
    </main>
  );
}
