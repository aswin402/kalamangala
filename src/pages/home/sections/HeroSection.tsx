import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import herovideo from "@/assets/homepage/herovideo.mp4";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const videoInnerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {

    const ctx = gsap.context(() => {
      gsap.set(heroTitleRef.current, {
        y: 80,
        opacity: 0,
      });

      gsap.set(videoWrapRef.current, {
        y: 120,
        scale: 0.92,
        borderRadius: 28,
        opacity: 0,
        transformOrigin: "center center",
      });

      gsap.set(videoInnerRef.current, {
        scale: 1.14,
        transformOrigin: "center center",
      });

      const introTl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      introTl
        .to(heroTitleRef.current, {
          y: 0,
          opacity: 1,
          duration: 1.25,
        })
        .to(
          videoWrapRef.current,
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.45,
          },
          "-=0.7"
        )
        .to(
          videoInnerRef.current,
          {
            scale: 1,
            duration: 1.6,
          },
          "-=1.3"
        );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.15,
        },
      });

      scrollTl
        .fromTo(
          heroTitleRef.current,
          { y: 0, opacity: 1 },
          {
            y: -260,
            opacity: 0,
            ease: "none",
          },
          0
        )
        .fromTo(
          videoWrapRef.current,
          { y: 0, scale: 1, borderRadius: 28 },
          {
            y: -90,
            scale: 1.035,
            borderRadius: 18,
            ease: "none",
          },
          0
        )
        .fromTo(
          videoInnerRef.current,
          { scale: 1 },
          {
            scale: 1.09,
            ease: "none",
          },
          0
        );

      ScrollTrigger.create({
        trigger: videoWrapRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
        animation: gsap.fromTo(
          videoInnerRef.current,
          { yPercent: 0 },
          {
            yPercent: -5,
            ease: "none",
          }
        ),
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden bg-background"
    >
      {/* TITLE AREA */}
      <div
        className="
          relative
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
            className="
              font-pathway
              font-normal
              leading-[0.88]
              tracking-[-0.055em]
              text-foreground

              text-[44px]
              sm:text-[52px]
              md:text-[64px]
              lg:text-[74px]
            "
          >
            Redefining
          </p>

          <h1
            className="
              mt-[18px]
              font-script
              font-normal
              leading-[0.72]
              tracking-[-0.055em]
              text-foreground

              text-[64px]
              sm:text-[78px]
              md:text-[96px]
              lg:mt-[26px]
              lg:text-[132px]
              xl:text-[148px]
            "
          >
            Luxury Living
          </h1>
        </div>
      </div>

      {/* VIDEO AREA */}
      <div
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