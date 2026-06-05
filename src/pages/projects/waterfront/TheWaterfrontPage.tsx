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
import { FAQSection } from "@/components/FAQSection";
import { useSEO } from "@/hooks/useSEO";

gsap.registerPlugin(ScrollTrigger);

const waterfrontFAQs = [
  {
    question: "Can I build a house on the plot immediately?",
    answer: "Yes, you can start construction based on applicable regulations.",
  },
  {
    question: "What makes The Waterfront different from other plotted developments?",
    answer:
      "Its planned layout, premium location, and future growth potential make it a preferred choice.",
  },
  {
    question: "Can NRIs invest in The Waterfront?",
    answer: "Yes, NRIs can invest subject to applicable regulations.",
  },
  {
    question: "Does the project offer a peaceful living environment?",
    answer: "Yes, it is designed to provide a serene and comfortable lifestyle.",
  },
  {
    question: "How can I get more information about plot availability and pricing?",
    answer: (
      <span>
        You can contact the Kalamangala sales team for the latest details. Call Us{" "}
        <a
          href="tel:+919489780258"
          className="font-bold text-foreground underline transition-colors hover:text-primary"
        >
          +91 94897 80258
        </a>
      </span>
    ),
  },
];

export function TheWaterfrontPage() {
  useSEO(
    "The Waterfront Premium Plots in Erode | Kalamangala Living",
    "Live amidst nature at The Waterfront by Kalamangala, Erode. Premium plots, modern comforts, wide roads, and a secure, green community."
  );
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
      <FAQSection items={waterfrontFAQs} className="mb-[72px] md:mb-[96px]" />
    </main>
  );
}

