import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MarqueeText } from "../../../global/components/MarqueeText";

gsap.registerPlugin(ScrollTrigger);

const MARQUEE = "Innovation. Community. Quality. ";

export const MarqueeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titlePanelRef = useRef<HTMLDivElement>(null);
  const titleContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const titlePanel = titlePanelRef.current;
    const titleContentEl = titleContentRef.current;

    if (!section || !titlePanel || !titleContentEl) return;

    const ctx = gsap.context(() => {
      // ── Entrance animation ──
      gsap.set(titleContentEl, { opacity: 0, filter: "blur(0px)" });

      gsap.to(titleContentEl, {
        opacity: 1,
        duration: 1.0,
        delay: 0.15,
        ease: "power3.out",
      });

      // ── Scrub the marquee upward toward the navbar ──
      const titleRect = titleContentEl.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const currentOffsetFromSectionTop = titleRect.top - sectionRect.top;
      const targetTop = 80;
      const travelDistance = Math.max(currentOffsetFromSectionTop - targetTop, 60);

      gsap.to(titleContentEl, {
        y: -travelDistance,
        ease: "none",
        force3D: false,
        immediateRender: false,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${travelDistance}`,
          scrub: 0.6,
        },
      });

      // ── Pin the title panel so the next section scrolls over it ──
      ScrollTrigger.create({
        trigger: titlePanel,
        start: "top top",
        end: () => `+=${titlePanel.offsetHeight}`,
        pin: true,
        pinSpacing: false,
      });

      // ── Fade title from bottom-up as the next section overlaps ──
      const fadeGradient =
        "linear-gradient(to bottom, black 0%, black calc(var(--mask-end, 150) * 1%), transparent calc(var(--mask-end, 150) * 1% + 50px))";

      gsap.fromTo(
        titleContentEl,
        { 
          "--mask-end": 150,
          filter: "blur(0px)",
          scale: 1 
        },
        {
          "--mask-end": -30,
          filter: "blur(6px)",
          scale: 0.97,
          ease: "power1.in",
          force3D: false,
          immediateRender: false,
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${titlePanel.offsetHeight}`,
            scrub: 0.6,
            onEnter: () => {
              titleContentEl.style.maskImage = fadeGradient;
              titleContentEl.style.webkitMaskImage = fadeGradient;
            },
            onLeaveBack: () => {
              titleContentEl.style.maskImage = "none";
              titleContentEl.style.webkitMaskImage = "none";
              titleContentEl.style.filter = "blur(0px)";
            },
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div
        ref={titlePanelRef}
        className="
          relative z-[1] w-full overflow-visible
          h-[250px]
          sm:h-[300px]
          md:h-[340px]
          lg:h-[384px]
        "
      >
        <div
          ref={titleContentRef}
        >
          <MarqueeText
            text={MARQUEE}
            duration={60}
            className="
              w-full overflow-hidden
              pt-[115px] pb-[12px]
              sm:pt-[120px] sm:pb-[14px]
              md:pt-[130px] md:pb-[20px]
              lg:pt-[140px] lg:pb-[24px]
            "
            repeatCount={5}
          />
        </div>
      </div>
    </section>
  );
};