import { LocationHero } from "./sections/LocationHero";
import { WelcomeSection } from "./sections/WelcomeSection";
import { LandmarksSection } from "./sections/LandmarksSection";
import { ConnectivitySection } from "./sections/ConnectivitySection";
import { GrowthSection } from "./sections/GrowthSection";
import { AdvantageSection } from "./sections/AdvantageSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { CTASection } from "./sections/CTASection";
import { FooterSection } from "./sections/FooterSection";

export function LocationAdvantagePage() {
  return (
    <main>
      <LocationHero />
      <WelcomeSection />
      <LandmarksSection />
      <ConnectivitySection />
      <GrowthSection />
      <AdvantageSection />
      <WhyChooseSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
