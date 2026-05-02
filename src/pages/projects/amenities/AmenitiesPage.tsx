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

export function AmenitiesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      className="w-full overflow-x-hidden text-foreground"
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
