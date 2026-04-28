import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { WaterfrontHeader } from "./sections/WaterfrontHeader";
import { WaterfrontHero } from "./sections/WaterfrontHero";
import { DescriptionSection } from "./sections/DescriptionSection";
import { MapViewSection } from "./sections/MapViewSection";
import { QuoteSection } from "./sections/QuoteSection";
import { VideoSection } from "./sections/VideoSection";
import { ShowcaseGrid } from "./sections/ShowcaseGrid";

gsap.registerPlugin(ScrollTrigger);

export function TheWaterfrontPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".waterfront-animate");

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              once: true,
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
      <main
        ref={containerRef}
        className="w-full overflow-x-hidden bg-background pb-0 pt-[74px] text-foreground"
      >
      <WaterfrontHeader />
      <WaterfrontHero />
      <MapViewSection />
      <QuoteSection />
      <DescriptionSection />
      <VideoSection />
      <ShowcaseGrid />
    </main>
  );
}
