import { useEffect, useRef } from "react";
import gsap from "gsap";
import herovideo from "@/assets/homepage/herovideo.mp4";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLParagraphElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const videoAreaRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const videoInnerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heroTitle = heroTitleRef.current;
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const videoWrap = videoWrapRef.current;
    const videoInner = videoInnerRef.current;

    if (!section || !heroTitle || !line1 || !line2 || !videoWrap || !videoInner)
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

      // ── SCROLL ANIMATION: Hero title subtle parallax (no fade) ──
      gsap.to(heroTitle, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "40% top",
          scrub: 1.5, // Slow, buttery scrub
        },
      });

      // ── SCROLL ANIMATION: Video rises up, scales, loses radius ──
      const videoScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.8, // Extra smooth scrub
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
        style={{ perspective: "600px" }}
      >
        {word}
        {i < text.split(" ").length - 1 && "\u00A0"}
      </span>
    ));

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden"
    >
      {/* TITLE AREA */}
      <div
        className="
          relative
          z-10
          w-full
          h-[345px]
          sm:h-[430px]
          md:h-[560px]
          lg:h-[645px]
          xl:h-[690px]
        "
      >
        <div
          ref={heroTitleRef}
          className="
            absolute
            z-10
            max-w-[900px]
            will-change-transform

            left-[24px]
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
            

              text-[40px]
              sm:text-[46px]
              md:text-[54px]
              lg:text-[62px]
            "
            style={{ perspective: "800px" }}
          >
            {renderWords("Redefining")}
          </p>

          <h1
            ref={line2Ref}
            className="
              mt-[40px]
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
            style={{ perspective: "800px" }}
          >
            {renderWords("Luxury Living")}
          </h1>
        </div>
      </div>

      {/* VIDEO AREA */}
      <div
        ref={videoAreaRef}
        className="
          relative
          z-20
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