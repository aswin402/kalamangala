import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactSection } from "./sections/ContactSection";
import { useSEO } from "@/hooks/useSEO";

gsap.registerPlugin(ScrollTrigger);

export function ContactPage() {
  useSEO(
    "Contact Kalamangala | Book Premium Plots in Tamil Nadu",
    "Connect with Kalamangala for premium plots, luxury homes, and construction services in Tamil Nadu. Reach our team for project details and site visits."
  );
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const heading = headingRef.current;
    const subtitle = subtitleRef.current;

    if (!hero || !heading || !subtitle) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(heading, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0 });
      tl.fromTo(subtitle, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4");

      ScrollTrigger.create({
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          heading.style.opacity = String(1 - progress);
          subtitle.style.opacity = String(1 - progress);
          heading.style.transform = `translateY(${progress * 40}px)`;
          subtitle.style.transform = `translateY(${progress * 20}px)`;
        },
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative z-[1] flex min-h-[360px] items-center justify-center overflow-hidden bg-background sm:min-h-[420px] md:min-h-[480px] lg:min-h-[540px]"
      >
        <div className="absolute inset-0 bg-[url('https://framerusercontent.com/images/vaS0nXWH3vvzP1FenR3MFCToc.png?width=1065&height=795')] bg-repeat bg-[length:426px_auto] opacity-[0.15]" />

        <div className="relative z-[2] px-[30px] text-center">
          {/* Eyebrow label */}
          <div className="mb-[12px] flex items-center justify-center gap-[7px]">
            <span className="flex h-[11px] w-[11px] items-center justify-center rounded-full border border-primary">
              <span className="h-[6px] w-[6px] rounded-full bg-primary" />
            </span>
            <span className="whitespace-nowrap text-[12px] font-bold uppercase leading-none tracking-[-0.03em] text-primary">
              Get in Touch
            </span>
          </div>

          {/* Main heading */}
          <h1
            ref={headingRef}
            className="font-pathway text-[clamp(48px,12vw,140px)] font-bold leading-[0.88] tracking-[-0.04em] text-foreground"
          >
            Contact Us
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="mx-auto mt-[12px] max-w-[500px] text-[15px] font-medium leading-[1.4] tracking-[-0.01em] text-foreground/70 md:text-[17px]"
          >
            We'd love to hear from you. Let's start a conversation about your dream property.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
