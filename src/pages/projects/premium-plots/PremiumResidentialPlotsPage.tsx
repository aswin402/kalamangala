import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Sections
import { PlotsHero } from "./sections/PlotsHero";
import { IntroSection } from "./sections/IntroSection";
import { AmenitiesGrid } from "./sections/AmenitiesGrid";
import { LandmarksSection } from "./sections/LandmarksSection";
import { ConnectivityTable } from "./sections/ConnectivityTable";
import { GrowthGrid } from "./sections/GrowthGrid";
import { AdvantageSection } from "./sections/AdvantageSection";
import { LifestyleBenefits } from "./sections/LifestyleBenefits";
import { CTASection } from "./sections/CTASection";
import { FooterSection } from "./sections/FooterSection";

gsap.registerPlugin(ScrollTrigger);

export function PremiumResidentialPlotsPage() {
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
      <PlotsHero />
      <IntroSection />
      <AmenitiesGrid />
      <LandmarksSection />
      <ConnectivityTable />
      <GrowthGrid />
      <AdvantageSection />
      <LifestyleBenefits />
      <CTASection />
      <FooterSection />
    </div>
  );
}
