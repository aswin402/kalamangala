import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { LocationHero } from "./sections/LocationHero";
import { WelcomeSection } from "./sections/WelcomeSection";
import { LandmarksSection } from "./sections/LandmarksSection";
import { ConnectivitySection } from "./sections/ConnectivitySection";
import { GrowthSection } from "./sections/GrowthSection";
import { AdvantageSection } from "./sections/AdvantageSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { CTASection } from "./sections/CTASection";
import { FooterSection } from "./sections/FooterSection";

gsap.registerPlugin(ScrollTrigger);

const bgPattern =
  "url(\"data:image/svg+xml,%3Csvg width='42' height='36' viewBox='0 0 42 36' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23dcd8c4' stroke-width='.8' stroke-opacity='.55'%3E%3Cpath d='M0 9h10.5L21 0l10.5 9H42'/%3E%3Cpath d='M0 27h10.5L21 36l10.5-9H42'/%3E%3Cpath d='M21 0v36'/%3E%3Cpath d='M10.5 9L21 18 31.5 9'/%3E%3Cpath d='M10.5 27L21 18 31.5 27'/%3E%3C/g%3E%3C/svg%3E\")";

export function LocationAdvantagePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".la-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 42, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".la-card").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 45, opacity: 0, scale: 0.985 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#f6f4e7] text-[#132d25]"
      style={{
        backgroundImage: bgPattern,
        backgroundSize: "42px 36px",
      }}
    >
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