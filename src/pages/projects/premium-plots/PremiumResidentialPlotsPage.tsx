
import { PlotsHero } from "./sections/PlotsHero";
import { IntroSection } from "./sections/IntroSection";
import { PrimeLocationSection } from "./sections/PrimeLocationSection";
import { PremiumAmenitiesSection } from "./sections/PremiumAmenitiesSection";
import { PremiumAmenitiesCardsSection } from "./sections/PremiumAmenitiesCardsSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { NeighbourhoodTable } from "./sections/NeighbourhoodTable";
import { NeighbourhoodGrowthSection } from "./sections/NeighbourhoodGrowthSection";
import { AdvantageSection } from "./sections/AdvantageSection";
import { CTASection } from "../../../components/CTASection";
import { FooterSection } from "./sections/FooterSection";

export const PremiumResidentialPlotsPage = () => {
  return (
    <main className="min-h-screen">
      {/* ScrollHero with marquee + image */}
      <PlotsHero />

      {/* Main centered content */}
      <div className="w-full">
        <IntroSection />
        <PrimeLocationSection />
        <PremiumAmenitiesSection />
        <PremiumAmenitiesCardsSection />
        <WhyChooseSection />
        <NeighbourhoodTable />
        <NeighbourhoodGrowthSection />
        <AdvantageSection />
        <CTASection />
        <FooterSection />
      </div>
    </main>
  );
};

export default PremiumResidentialPlotsPage;