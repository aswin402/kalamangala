import { useEffect, useRef } from "react";
import gsap from "gsap";

import { WaterfrontHeader } from "./sections/WaterfrontHeader";
import { WaterfrontHero } from "./sections/WaterfrontHero";
import { DescriptionSection } from "./sections/DescriptionSection";
import { MapViewSection } from "./sections/MapViewSection";
import { QuoteSection } from "./sections/QuoteSection";
import { VideoSection } from "./sections/VideoSection";
import { ShowcaseGrid } from "./sections/ShowcaseGrid";

export function TheWaterfrontPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".waterfront-animate");

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 30, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.35,
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: section,
              start: "top 86%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        );
      });

      // Parallax images — desktop only (scrub is too heavy for mobile)
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const images = containerRef.current?.querySelectorAll("[data-parallax-img]");
        images?.forEach((img) => {
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
                scrub: 0.6,
              },
            }
          );
        });
      });
    }, containerRef);

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
