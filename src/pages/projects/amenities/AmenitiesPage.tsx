import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Sections
import { AmenitiesHero } from "./sections/AmenitiesHero";
import { IntroSection } from "./sections/IntroSection";
import { VisionSection } from "./sections/VisionSection";
import { FeatureRows } from "./sections/FeatureRows";
import { StandApartSection } from "./sections/StandApartSection";
import { LifestyleSection } from "./sections/LifestyleSection";
import { FooterSection } from "./sections/FooterSection";

gsap.registerPlugin(ScrollTrigger);

export function AmenitiesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Scroll Revelations
    const sections = containerRef.current?.querySelectorAll(".scroll-reveal");
    sections?.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
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
      <AmenitiesHero />
      <IntroSection />
      <VisionSection />
      <FeatureRows />
      <StandApartSection />
      <LifestyleSection />
      <FooterSection />
    </div>
  );
}
