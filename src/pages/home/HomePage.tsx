import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ReviewsSection } from "./sections/ReviewsSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { FAQSection } from "@/components/FAQSection";

const homeFAQs = [
  {
    question: "Why invest in residential plots in Tamil Nadu?",
    answer:
      "Tamil Nadu offers strong growth, good connectivity, and long-term value appreciation.",
  },
  {
    question: "Why choose Kalamangala residential plots?",
    answer:
      "Kalamangala offers well-planned plots in prime and fast-growing locations.",
  },
  {
    question: "Are the plots legally approved?",
    answer:
      "Yes, the plots come with the required approvals and clear documentation.",
  },
  {
    question: "Do the projects have good road connectivity?",
    answer:
      "Yes, the layouts are located near key roads and essential facilities.",
  },
  {
    question: "Is land a better long-term investment?",
    answer:
      "Land is often considered a stable asset with good appreciation potential.",
  },
];

export function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ReviewsSection />
      <WhyChooseSection />
      <FAQSection items={homeFAQs} className="mb-[72px] md:mb-[96px]" />
    </main>
  );
}