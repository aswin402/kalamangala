import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import herovideo from "@/assets/homepage/herovideo.mp4";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const titlePanelRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLParagraphElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const videoAreaRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const videoInnerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heroTitle = heroTitleRef.current;
    const titlePanel = titlePanelRef.current;
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const videoArea = videoAreaRef.current;
    const videoWrap = videoWrapRef.current;
    const videoInner = videoInnerRef.current;

    if (
      !section ||
      !heroTitle ||
      !titlePanel ||
      !line1 ||
      !line2 ||
      !videoArea ||
      !videoWrap ||
      !videoInner
    )
      return;

    const ctx = gsap.context(() => {
      // ── Initial states ──
      gsap.set(heroTitle, { y: 60, opacity: 0 });
      gsap.set(videoWrap, {
        y: 160,
        scale: 0.88,
        borderRadius: 32,
        opacity: 0,
        transformOrigin: "center center",
      });
      gsap.set(videoInner, {
        scale: 1.18,
        transformOrigin: "center center",
      });

      // ── INTRO TIMELINE (on-load entrance) ──
      const introTl = gsap.timeline({
        delay: 0.15,
        defaults: { ease: "power4.out" },
      });

      // Word-by-word stagger for "Redefining"
      const words1 = line1.querySelectorAll(".hero-word");
      const words2 = line2.querySelectorAll(".hero-word");

      // Set initial word states
      gsap.set([words1, words2], {
        y: 45,
        opacity: 0,
        rotateX: 40,
      });

      introTl
        // Fade in the title container
        .to(heroTitle, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        })
        // Stagger "Redefining" words
        .to(
          words1,
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.0,
            stagger: 0.08,
            ease: "power4.out",
          },
          "-=0.3"
        )
        // Stagger "Luxury Living" words
        .to(
          words2,
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.7"
        )
        // Video entrance — slow and dramatic
        .to(
          videoWrap,
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.8,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .to(
          videoInner,
          {
            scale: 1,
            duration: 2.2,
            ease: "power3.out",
          },
          "-=1.6"
        );

      // ── PHASE 1: Scrub the title upward toward the navbar ──
      // Calculate how far the title needs to travel upward
      // Use the CSS `top` value directly — getBoundingClientRect includes the GSAP y:60 intro offset
      const titleCssTop = parseFloat(getComputedStyle(heroTitle).top) || 0;
      const targetTop = 100; // where the title should end up (just below navbar)
      const travelDistance = titleCssTop - targetTop;

      gsap.to(heroTitle, {
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

      // ── PHASE 2: Pin the title panel so the video scrolls over it ──
      ScrollTrigger.create({
        trigger: titlePanel,
        start: "top top",
        endTrigger: videoArea,
        end: "top top",
        pin: true,
        pinSpacing: false,
      });

      // ── PHASE 3: Fade hero text from bottom-up as the video overlaps ──
      // Gradient mask: the opaque zone shrinks upward, text disappears from bottom first
      const fadeGradient =
        "linear-gradient(to bottom, black 0%, black calc(var(--mask-end, 150) * 1%), transparent calc(var(--mask-end, 150) * 1% + 50px))";


      const isMobile = window.innerWidth < 768;

      gsap.fromTo(
        heroTitle,
        { "--mask-end": 150 },
        {
          "--mask-end": -30,
          filter: isMobile ? "blur(0px)" : "blur(6px)",
          scale: isMobile ? 1 : 0.97,
          ease: "power1.in",
          force3D: true,
          immediateRender: false,
          scrollTrigger: {
            trigger: videoArea,
            start: "top 55%",
            end: "top 10%",
            scrub: 0.6,
            onEnter: () => {
              heroTitle.style.maskImage = fadeGradient;
              heroTitle.style.webkitMaskImage = fadeGradient;
            },
            onLeaveBack: () => {
              heroTitle.style.maskImage = "none";
              heroTitle.style.webkitMaskImage = "none";
            },
          },
        }
      );

      // ── SCROLL ANIMATION: Video rises up, scales, loses radius ──
      const videoScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      videoScrollTl
        .fromTo(
          videoWrap,
          { y: 0, scale: 1, borderRadius: 28 },
          {
            y: -160,
            scale: 1.04,
            borderRadius: 12,
            ease: "none",
          },
          0
        )
        .fromTo(
          videoInner,
          { scale: 1 },
          {
            scale: 1.1,
            ease: "none",
          },
          0
        );
    }, section);

    return () => ctx.revert();
  }, []);

  // Helper: wrap each word in a span for stagger animation
  const renderWords = (text: string) =>
    text.split(" ").map((word, i) => (
      <span
        key={i}
        className="hero-word inline-block will-change-transform"
        style={{ backfaceVisibility: "hidden" }}
      >
        {word}
        {i < text.split(" ").length - 1 && "\u00A0"}
      </span>
    ));

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative"
    >
      {/* ── TITLE PANEL — gets pinned by ScrollTrigger ── */}
      <div
        ref={titlePanelRef}
        className="
          relative
          z-[1]
          w-full
          overflow-visible
          h-[345px]
          sm:h-[430px]
          md:h-[560px]
          lg:h-[645px]
          xl:h-[690px]
          2xl:h-[720px]
          3xl:h-[760px]
        "
      >
        <div
          ref={heroTitleRef}
          className="
            absolute
            z-10
            max-w-[900px]
            will-change-transform
            pb-10
            px-4
            sm:px-10

            left-[12px]
            top-[92px]

            sm:left-[46px]
            sm:top-[130px]

            md:left-[80px]
            md:top-[170px]

            lg:left-[120px]
            lg:top-[195px]

            xl:left-[150px]
          "
        >
          <p
            ref={line1Ref}
            className="
              font-pathway
              font-normal
              leading-[1]
              tracking-[-0.02em]
              text-foreground
              mt-[20px]
              sm:mt-0

              text-[40px]
              sm:text-[46px]
              md:text-[54px]
              lg:text-[62px]
            "
            style={{ backfaceVisibility: "hidden" }}
          >
            {renderWords("Redefining")}
          </p>

          <h1
            ref={line2Ref}
            className="
              mt-[16px]
              sm:mt-[40px]
              font-script
              font-normal
              leading-[0.85]
              tracking-[-0.02em]
              text-foreground

              text-[52px]
              sm:text-[62px]
              md:text-[78px]
              lg:mt-[40px]
              lg:text-[100px]
              xl:text-[110px]
            "
            style={{ backfaceVisibility: "hidden" }}
          >
            {renderWords("Luxury Living")}
          </h1>
        </div>
      </div>

      {/* ── VIDEO AREA — scrolls over the pinned title ── */}
      <div
        ref={videoAreaRef}
        className="
          relative
          z-[2]
          mx-auto
          w-full

          px-[12px]
          sm:px-[20px]
          md:px-[28px]
          lg:px-[38px]
        "
      >
        <div
          ref={videoWrapRef}
          className="
            w-full
            overflow-hidden
            bg-black
            will-change-transform

            h-[300px]
            rounded-[18px]

            sm:h-[440px]
            sm:rounded-[22px]

            md:h-[560px]
            md:rounded-[26px]

            lg:h-[720px]
            lg:rounded-[30px]

            xl:h-[800px]

            2xl:h-[860px]
            3xl:h-[920px]
          "
        >
          <video
            ref={videoInnerRef}
            src={herovideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="
              h-full
              w-full
              object-cover
              object-center
              will-change-transform
            "
          />
        </div>
      </div>
    </section>
  );
};