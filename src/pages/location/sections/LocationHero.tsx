import { useEffect, useRef } from "react";
import gsap from "gsap";

import img1 from "../../../assets/location-advantage/img1.avif";

export function LocationHero() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tween = gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 55,
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
      <section className="w-full overflow-hidden pt-[28px] md:pt-[40px]">
        <div
          ref={marqueeRef}
          className="flex w-max pt-10 whitespace-nowrap will-change-transform"
        >
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={`${set}-${i}`}
                  className="pr-[6px] font-['Inter'] text-[52px] font-semibold leading-[0.82] tracking-[-0.075em] text-[#132d25] sm:text-[72px] md:text-[138px] xl:text-[154px]"
                >
                  Location.Advantage.
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Hero Image */}
      <section className="la-reveal mx-auto mt-[46px] w-full max-w-[1500px] px-4 md:mt-[78px] md:px-8">
        <div className="mx-auto h-[230px] w-full overflow-hidden rounded-[8px] sm:h-[300px] md:h-[455px] xl:h-[485px]">
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
