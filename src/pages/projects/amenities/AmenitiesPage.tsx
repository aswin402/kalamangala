import { AmenitiesHero } from "./sections/AmenitiesHero";
import { IntroSection } from "./sections/IntroSection";
import { VisionSection } from "./sections/VisionSection";
import { FeatureRows } from "./sections/FeatureRows";
import { StandApartSection } from "./sections/StandApartSection";
import { LifestyleSection } from "./sections/LifestyleSection";
import { FAQSection } from "@/components/FAQSection";
import { useSEO } from "@/hooks/useSEO";

const amenitiesFAQs = [
  {
    question: "What amenities are available at Kalamangala projects?",
    answer: "Kalamangala offers modern amenities designed for comfortable living.",
  },
  {
    question: "Are CCTV surveillance systems available?",
    answer: "Yes, 24/7 CCTV security is provided for enhanced safety.",
  },
  {
    question: "Is a gym available for residents?",
    answer: "Yes, a fully equipped gymnasium is available.",
  },
  {
    question: "Are the play areas safe for children?",
    answer: "Yes, the park is designed with child safety in mind.",
  },
  {
    question: "What facilities are available in the clubhouse?",
    answer:
      "The clubhouse offers spaces for recreation, social gatherings, and community activities.",
  },
];

export function AmenitiesPage() {
  useSEO(
    "Leading Home Developers in Tamil Nadu – The Waterfront by Kalamangala",
    "Explore premium residential plots in Tamil Nadu with Kalamangala, offering secure layouts, prime locations, and high investment potential."
  );
  return (
    <main className="w-full overflow-x-hidden text-foreground">
      <AmenitiesHero />
      <IntroSection />
      <VisionSection />
      <FeatureRows />
      <StandApartSection />
      <LifestyleSection />
      <FAQSection items={amenitiesFAQs} className="mb-[72px] md:mb-[96px]" />
    </main>
  );
}

