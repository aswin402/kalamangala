import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PlotsHero } from "./sections/PlotsHero";
import { PlotsMarquee } from "./sections/PlotsMarquee";
import { IntroSection } from "./sections/IntroSection";
import { PrimeLocationSection } from "./sections/PrimeLocationSection";
import { PremiumAmenitiesSection } from "./sections/PremiumAmenitiesSection";
import { PremiumAmenitiesCardsSection } from "./sections/PremiumAmenitiesCardsSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { NeighbourhoodTable } from "./sections/NeighbourhoodTable";
import { NeighbourhoodGrowthSection } from "./sections/NeighbourhoodGrowthSection";
import { AdvantageSection } from "./sections/AdvantageSection";
import { LifestyleSection } from "./sections/LifestyleSection";
import { CTASection } from "./sections/CTASection";
import { FooterSection } from "./sections/FooterSection";

gsap.registerPlugin(ScrollTrigger);

export const PremiumResidentialPlotsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reveals = gsap.utils.toArray<HTMLElement>(".km-reveal");

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
    <main
      ref={containerRef}
      className="min-h-screen overflow-hidden pt-[92px]"
    >
      {/* Full width marquee */}
      <PlotsMarquee />

      {/* Main centered content */}
      <div className="mx-auto w-full max-w-[1540px] px-[42px]">
        <PlotsHero />
        <IntroSection />
        <PrimeLocationSection />
        <PremiumAmenitiesSection />
        <PremiumAmenitiesCardsSection />
        <WhyChooseSection />
        <NeighbourhoodTable />
        <NeighbourhoodGrowthSection />
        <AdvantageSection />
        <LifestyleSection />
        <CTASection />
        <FooterSection />
      </div>
    </main>
  );
};

export default PremiumResidentialPlotsPage;
