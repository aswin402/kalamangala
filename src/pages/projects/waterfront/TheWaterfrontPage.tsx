import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Sections
import { WaterfrontHeader } from "./sections/WaterfrontHeader";
import { WaterfrontHero } from "./sections/WaterfrontHero";
import { DescriptionSection } from "./sections/DescriptionSection";
import { MapViewSection } from "./sections/MapViewSection";
import { QuoteSection } from "./sections/QuoteSection";
import { VideoSection } from "./sections/VideoSection";
import { ShowcaseGrid } from "./sections/ShowcaseGrid";
import { AmenitiesSection } from "./sections/AmenitiesSection";

gsap.registerPlugin(ScrollTrigger);

export function TheWaterfrontPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const sections = containerRef.current?.querySelectorAll("section");
    sections?.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
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
      className="w-full pt-28 pb-20 bg-background overflow-x-hidden"
    >
      <WaterfrontHeader />
      <WaterfrontHero />
      <DescriptionSection />
      <MapViewSection />
      <QuoteSection />
      <VideoSection />
      <ShowcaseGrid />
      <AmenitiesSection />
    </div>
  );
}
