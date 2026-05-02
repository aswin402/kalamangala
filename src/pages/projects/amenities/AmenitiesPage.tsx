import { AmenitiesHero } from "./sections/AmenitiesHero";
import { IntroSection } from "./sections/IntroSection";
import { VisionSection } from "./sections/VisionSection";
import { FeatureRows } from "./sections/FeatureRows";
import { StandApartSection } from "./sections/StandApartSection";
import { LifestyleSection } from "./sections/LifestyleSection";

export function AmenitiesPage() {
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
