import { useEffect, useRef } from "react";
import gsap from "gsap";

import img1 from "../../../assets/location-advantage/img1.avif";

export function LocationHero() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const tween = gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 140,
      repeat: -1,
      ease: "none",
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <>
      {/* Big Marquee */}
      <section
        className="
          w-full overflow-hidden
          pt-[115px]
          pb-[12px]
          sm:pt-[120px]
          sm:pb-[14px]
          md:pt-[130px]
          md:pb-[20px]
          lg:pt-[140px]
          lg:pb-[24px]
        "
      >
        <div
          ref={marqueeRef}
          className="flex w-max whitespace-nowrap will-change-transform"
        >
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={`${set}-${i}`}
                  className="
                    block
                    pr-[10px]
                    font-['Inter',sans-serif]
                    text-[55px]
                    font-[650]
                    leading-[1.02]
                    tracking-[-0.075em]
                    text-[#132d25]
                    sm:text-[74px]
                    md:text-[138px]
                    xl:text-[154px]
                  "
                >
                  Location.Advantage.
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Hero Image */}
      <section
        className="
          la-reveal
          mx-auto
          mt-[58px]
          w-full
          max-w-[1500px]
          px-[13px]
          pb-[25px]
          sm:mt-[64px]
          sm:px-4
          md:mt-[78px]
          md:px-8
          lg:mt-[84px]
        "
      >
        <div
          className="
            mx-auto
            h-[395px]
            w-full
            overflow-hidden
            rounded-[8px]
            sm:h-[430px]
            md:h-[455px]
            xl:h-[485px]
          "
        >
          <img
            src={img1}
            alt="The Waterfront"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>
    </>
  );
}