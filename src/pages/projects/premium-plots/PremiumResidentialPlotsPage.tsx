import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PlotsHero } from "./sections/PlotsHero";
import { IntroSection } from "./sections/IntroSection";
import { PrimeLocationSection } from "./sections/PrimeLocationSection";
import { PremiumAmenitiesSection } from "./sections/PremiumAmenitiesSection";
import { PremiumAmenitiesCardsSection } from "./sections/PremiumAmenitiesCardsSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { NeighbourhoodTable } from "./sections/NeighbourhoodTable";
import { NeighbourhoodGrowthSection } from "./sections/NeighbourhoodGrowthSection";
import { AdvantageSection } from "./sections/AdvantageSection";
import { CTASection } from "./sections/CTASection";
import { FooterSection } from "./sections/FooterSection";
import { MarqueeText } from "../../../global/components/MarqueeText";

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
      className="min-h-screen overflow-x-hidden pt-[82px] md:pt-[92px]"
    >
      {/* Full width marquee */}
      <MarqueeText
        text="Premium Residential Plots. "
        duration={60}
        className="mt-16 mb-16 overflow-hidden pb-10 pt-20 md:pt-24"
        repeatCount={5}
      />

      {/* Main centered content */}
      <div className="mx-auto w-full max-w-[1540px] px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        <PlotsHero />
        <IntroSection />
        <PrimeLocationSection />
        <PremiumAmenitiesSection />
        <PremiumAmenitiesCardsSection />
        <WhyChooseSection />
        <NeighbourhoodTable />
        <NeighbourhoodGrowthSection />
        <AdvantageSection />
        <CTASection />
        <FooterSection />
      </div>
    </main>
  );
};

export default PremiumResidentialPlotsPage;