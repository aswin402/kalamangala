import { AmenitiesHero } from "./sections/AmenitiesHero";
import { IntroSection } from "./sections/IntroSection";
import { VisionSection } from "./sections/VisionSection";
import { FeatureRows } from "./sections/FeatureRows";
import { StandApartSection } from "./sections/StandApartSection";
import { LifestyleSection } from "./sections/LifestyleSection";
import { useSEO } from "@/hooks/useSEO";

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
    </main>
  );
}
