import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { AmenitiesHero } from "./sections/AmenitiesHero";
import { IntroSection } from "./sections/IntroSection";
import { VisionSection } from "./sections/VisionSection";
import { FeatureRows } from "./sections/FeatureRows";
import { StandApartSection } from "./sections/StandApartSection";
import { LifestyleSection } from "./sections/LifestyleSection";
gsap.registerPlugin(ScrollTrigger);

const bgPattern =
  "url(\"data:image/svg+xml,%3Csvg width='44' height='32' viewBox='0 0 44 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23d8d4c5' stroke-width='0.7' stroke-opacity='0.55'%3E%3Cpath d='M0 8h10l6 8-6 8H0'/%3E%3Cpath d='M22 8h10l6 8-6 8H22'/%3E%3Cpath d='M11 0h10l6 8-6 8H11'/%3E%3Cpath d='M33 0h10l6 8-6 8H33'/%3E%3Cpath d='M11 16h10l6 8-6 8H11'/%3E%3Cpath d='M33 16h10l6 8-6 8H33'/%3E%3C/g%3E%3C/svg%3E\")";

export function AmenitiesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from(".am-hero", {
        opacity: 0,
        y: 24,
        duration: 1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".am-reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 34,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="w-full overflow-x-hidden bg-[#f4f2e3] text-[#12362d]"
      style={{
        backgroundImage: bgPattern,
        fontFamily: "'News Cycle', 'Inter', sans-serif",
      }}
    >
      <AmenitiesHero />
      <IntroSection />
      <VisionSection />
      <FeatureRows />
      <StandApartSection />
      <LifestyleSection />
    </main>
  );
}
