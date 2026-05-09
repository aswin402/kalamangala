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
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      container.querySelectorAll<HTMLElement>("[data-parallax-img]").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: 8 },
          {
            yPercent: -8,
            ease: "none",
            force3D: true,
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="w-full overflow-x-hidden pb-0 pt-[74px] text-foreground"
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
