import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollHeroProps {
  /** Content for the title panel (typically MarqueeText) */
  titleContent: ReactNode;
  /** Content for the media panel (typically an image or video) */
  mediaContent: ReactNode;
  /** Tailwind classes controlling the title panel height at each breakpoint */
  titlePanelClassName?: string;
  /** Tailwind classes for the media wrapper (padding, max-width, etc.) */
  mediaWrapperClassName?: string;
  /** Tailwind classes for the inner media container (height, border-radius) */
  mediaInnerClassName?: string;
}

/**
 * Reusable scroll-driven hero section that replicates the homepage pattern:
 * 1. Title content scrubs upward on scroll toward the navbar
 * 2. Title panel pins in place once it reaches the top of the viewport
 * 3. Media panel scrolls over the pinned title with parallax scale + border-radius animation
 */
export function ScrollHero({
  titleContent,
  mediaContent,
  titlePanelClassName = "h-[260px] sm:h-[300px] md:h-[360px] lg:h-[400px] xl:h-[420px]",
  mediaWrapperClassName = "px-[12px] sm:px-[20px] md:px-[28px] lg:px-[38px]",
  mediaInnerClassName = "h-[300px] sm:h-[440px] md:h-[500px] lg:h-[520px] xl:h-[540px] rounded-[18px] sm:rounded-[22px] md:rounded-[26px] lg:rounded-[30px]",
}: ScrollHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titlePanelRef = useRef<HTMLDivElement>(null);
  const titleContentRef = useRef<HTMLDivElement>(null);
  const mediaAreaRef = useRef<HTMLDivElement>(null);
  const mediaWrapRef = useRef<HTMLDivElement>(null);
  const mediaInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const titlePanel = titlePanelRef.current;
    const titleContentEl = titleContentRef.current;
    const mediaArea = mediaAreaRef.current;
    const mediaWrap = mediaWrapRef.current;
    const mediaInner = mediaInnerRef.current;

    if (
      !section ||
      !titlePanel ||
      !titleContentEl ||
      !mediaArea ||
      !mediaWrap ||
      !mediaInner
    )
      return;

    const ctx = gsap.context(() => {
      // ── Initial states ──
      gsap.set(titleContentEl, { y: 50, opacity: 0 });
      gsap.set(mediaWrap, {
        y: 160,
        scale: 0.88,
        borderRadius: 32,
        opacity: 0,
        transformOrigin: "center center",
      });
      gsap.set(mediaInner, {
        scale: 1.18,
        transformOrigin: "center center",
      });

      // ── INTRO TIMELINE (on-load entrance) ──
      const introTl = gsap.timeline({
        delay: 0.15,
        defaults: { ease: "power4.out" },
      });

      introTl
        // Fade in the title content
        .to(titleContentEl, {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          force3D: true,
        })
        // Media entrance — slow and dramatic
        .to(
          mediaWrap,
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.8,
            ease: "power3.out",
            force3D: true,
          },
          "-=0.5"
        )
        .to(
          mediaInner,
          {
            scale: 1,
            duration: 2.2,
            ease: "power3.out",
            force3D: true,
          },
          "-=1.6"
        );

      // ── PHASE 1: Scrub the title upward toward the navbar ──
      // For absolutely-positioned content, use CSS `top`.
      // For flow-positioned content, use offsetTop relative to the title panel.
      const titleRect = titleContentEl.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const currentOffsetFromSectionTop = titleRect.top - sectionRect.top;
      const targetTop = 80; // where the title should end up (just below navbar)
      const travelDistance = Math.max(currentOffsetFromSectionTop - targetTop, 60);

      gsap.to(titleContentEl, {
        y: -travelDistance,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${travelDistance}`,
          scrub: 0.6,
        },
      });

      // ── PHASE 2: Pin the title panel so the media scrolls over it ──
      ScrollTrigger.create({
        trigger: titlePanel,
        start: "top top",
        endTrigger: mediaArea,
        end: "top top",
        pin: true,
        pinSpacing: false,
      });

      // ── PHASE 3: Fade title from bottom-up as media overlaps ──
      const fadeGradient =
        "linear-gradient(to bottom, black 0%, black calc(var(--mask-end, 150) * 1%), transparent calc(var(--mask-end, 150) * 1% + 50px))";

      gsap.fromTo(
        titleContentEl,
        { "--mask-end": 150 },
        {
          "--mask-end": -30,
          filter: "blur(6px)",
          scale: 0.97,
          ease: "power1.in",
          force3D: true,
          immediateRender: false,
          scrollTrigger: {
            trigger: mediaArea,
            start: "top 55%",
            end: "top 10%",
            scrub: 0.6,
            onEnter: () => {
              titleContentEl.style.maskImage = fadeGradient;
              titleContentEl.style.webkitMaskImage = fadeGradient;
            },
            onLeaveBack: () => {
              titleContentEl.style.maskImage = "none";
              titleContentEl.style.webkitMaskImage = "none";
            },
          },
        }
      );

      // ── PHASE 4: Media rises up with parallax, scales, loses radius ──
      const mediaScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      mediaScrollTl
        .fromTo(
          mediaWrap,
          { y: 0, scale: 1, borderRadius: 28 },
          {
            y: -160,
            scale: 1.04,
            borderRadius: 12,
            ease: "none",
            force3D: true,
          },
          0
        )
        .fromTo(
          mediaInner,
          { scale: 1 },
          {
            scale: 1.1,
            ease: "none",
            force3D: true,
          },
          0
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      {/* ── TITLE PANEL — gets pinned by ScrollTrigger ── */}
      <div
        ref={titlePanelRef}
        className={`relative z-[1] w-full overflow-visible ${titlePanelClassName}`}
      >
        <div
          ref={titleContentRef}
          className="will-change-transform"
          style={{ backfaceVisibility: "hidden" }}
        >
          {titleContent}
        </div>
      </div>

      {/* ── MEDIA AREA — scrolls over the pinned title ── */}
      <div
        ref={mediaAreaRef}
        className={`relative z-[2] mx-auto w-full ${mediaWrapperClassName}`}
      >
        <div
          ref={mediaWrapRef}
          className={`w-full overflow-hidden bg-black will-change-transform ${mediaInnerClassName}`}
        >
          <div
            ref={mediaInnerRef}
            className="h-full w-full will-change-transform"
            style={{ backfaceVisibility: "hidden" }}
          >
            {mediaContent}
          </div>
        </div>
      </div>
    </section>
  );
}
