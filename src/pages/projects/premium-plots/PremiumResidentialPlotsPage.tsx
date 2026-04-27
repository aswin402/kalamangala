import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PlotsHero } from "./sections/PlotsHero";
import { PlotsMarquee } from "./sections/PlotsMarquee";
import { IntroSection } from "./sections/IntroSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { NeighbourhoodTable } from "./sections/NeighbourhoodTable";
import { GrowthGrid } from "./sections/GrowthGrid";
import { AdvantageSection } from "./sections/AdvantageSection";
import { LifestyleSection } from "./sections/LifestyleSection";
import { CTASection } from "./sections/CTASection";
import { ContactSection } from "./sections/ContactSection";

gsap.registerPlugin(ScrollTrigger);

const CREAM = "#f6f3df";
const TEXT = "#101d18";

export const PremiumResidentialPlotsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reveals = document.querySelectorAll(".km-reveal");
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen pt-[120px]"
      style={{
        backgroundColor: CREAM,
        color: TEXT,
        backgroundImage: `radial-gradient(rgba(23, 53, 45, 0.08) 1px, transparent 1px)`,
        backgroundSize: "12px 12px",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
        <PlotsHero />
        <PlotsMarquee />
        <IntroSection />
        <WhyChooseSection />
        <NeighbourhoodTable />
        <GrowthGrid />
        <AdvantageSection />
        <LifestyleSection />
        <CTASection />
        <ContactSection />
      </div>
    </div>
  );
};

export default PremiumResidentialPlotsPage;
