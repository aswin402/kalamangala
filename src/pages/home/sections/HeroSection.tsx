import { useEffect, useRef } from "react";
import gsap from "gsap";
import herovideo from "@/assets/homepage/herovideo.mp4";

export const HeroSection = () => {
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroTitleRef.current,
        { y: 34, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        heroVideoRef.current,
        { y: 44, opacity: 0, scale: 0.985 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.15,
          delay: 0.18,
          ease: "power3.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* TITLE AREA */}
      <div
        className="
          relative w-full

          h-[340px]
          sm:h-[430px]
          md:h-[560px]
          lg:h-[640px]
          xl:h-[691px]
        "
      >
        <div
          ref={heroTitleRef}
          className="
            absolute max-w-[760px]

            left-[24px] top-[84px]
            sm:left-[46px] sm:top-[115px] mt-12
            md:left-[80px] md:top-[160px]
            lg:left-[120px] lg:top-[188px]
            xl:left-[150px]
          "
        >
          <p
            className="
              font-pathway font-normal leading-[0.9]
              tracking-[-0.055em] text-[#082f2f]

              text-[37px]
              sm:text-[46px]
              md:text-[50px]
              lg:text-[55px]
            "
          >
            Redefining
          </p>

          <h1
            className="
              font-script font-normal leading-[0.72]
              tracking-[-0.045em] text-[#082f2f]

              mt-[18px] text-[63px]
              sm:mt-[24px] sm:text-[84px]
              md:text-[100px]
              lg:mt-[28px] lg:text-[118px]
            "
          >
            Luxury Living
          </h1>
        </div>
      </div>

      {/* VIDEO AREA */}
      <div
        className="
          mx-auto w-full

          px-[12px]
          sm:px-[20px]
          md:px-[28px]
          lg:px-[38px]
        "
      >
        <div
          ref={heroVideoRef}
          className="
            w-full overflow-hidden bg-black

            h-[386px] rounded-[7px]
            sm:h-[440px]
            md:h-[560px]
            lg:h-[720px]
            xl:h-[800px]
          "
        >
          <video
            src={herovideo}
            autoPlay
            loop
            muted
            playsInline
            className="
              h-full w-full object-cover
              object-[center_center]
            "
          />
        </div>
      </div>
    </section>
  );
};