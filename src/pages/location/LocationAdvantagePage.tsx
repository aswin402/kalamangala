import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Sections
import { LocationHero } from "./sections/LocationHero";
import { WelcomeSection } from "./sections/WelcomeSection";
import { LandmarksSection } from "./sections/LandmarksSection";
import { ConnectivitySection } from "./sections/ConnectivitySection";
import { GrowthSection } from "./sections/GrowthSection";
import { AdvantageSection } from "./sections/AdvantageSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { CTASection } from "./sections/CTASection";
import { FooterSection } from "./sections/FooterSection";

gsap.registerPlugin(ScrollTrigger);

export function LocationAdvantagePage() {
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
      <LocationHero />
      <WelcomeSection />
      <LandmarksSection />
      <ConnectivitySection />
      <GrowthSection />
      <AdvantageSection />
      <WhyChooseSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
