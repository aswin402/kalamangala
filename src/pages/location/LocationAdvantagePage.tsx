import { LocationHero } from "./sections/LocationHero";
import { WelcomeSection } from "./sections/WelcomeSection";
import { LandmarksSection } from "./sections/LandmarksSection";
import { ConnectivitySection } from "./sections/ConnectivitySection";
import { GrowthSection } from "./sections/GrowthSection";
import { AdvantageSection } from "./sections/AdvantageSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "../../components/CTASection";
import { FooterSection } from "./sections/FooterSection";
import { useSEO } from "@/hooks/useSEO";

const locationFAQs = [
  {
    question: "Why is the project's location considered an advantage?",
    answer: "The project is located in a fast-growing area with excellent future potential.",
  },
  {
    question: "Does the location offer good road connectivity?",
    answer: "Yes, it provides easy access to major roads and highways.",
  },
  {
    question: "Are educational institutions located nearby?",
    answer: "Yes, reputed schools and colleges are easily accessible.",
  },
  {
    question: "Does the location support long-term property appreciation?",
    answer: "Yes, ongoing development in the area supports future value growth.",
  },
  {
    question: "Why should I invest in a plot at this location?",
    answer: "The strategic location enhances both lifestyle benefits and investment potential.",
  },
];

export function LocationAdvantagePage() {
  useSEO(
    "Real Estate Builders In Tamil nadu | Kalamangala",
    "Experience premium residential plotting in Tamil Nadu with Kalamangala—secure, thoughtfully designed, and future-ready locations."
  );
  return (
    <main>
      <LocationHero />
      <WelcomeSection />
      <LandmarksSection />
      <ConnectivitySection />
      <GrowthSection />
      <AdvantageSection />
      <WhyChooseSection />
      <FAQSection items={locationFAQs} className="mb-[72px] md:mb-[96px]" />
      <CTASection />
      <FooterSection />
    </main>
  );
}

