import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import img1 from "../../../../assets/construction-company/img1.webp";

export function ConstructionHero() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        marqueeRef.current,
        { xPercent: 0 },
        {
          xPercent: -50,
          duration: 180,
          ease: "none",
          repeat: -1,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* CONSTRUCTION MARQUEE */}
      <section
        className="
          relative w-full overflow-hidden bg-[#fbfcf3]
          h-[205px] pt-[120px]
          sm:h-[235px] sm:pt-[110px]
          md:h-[280px] md:pt-[130px]
          lg:h-[315px] lg:pt-[140px]
          xl:h-[330px] xl:pt-[150px]
          2xl:h-[340px] 2xl:pt-[156px]
        "
      >
        <div
          ref={marqueeRef}
          className="flex w-max whitespace-nowrap will-change-transform"
        >
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0">
              {Array.from({ length: 6 }).map((_, index) => (
                <span
                  key={index}
                  className="
                    mr-[14px]
                    font-['Inter',sans-serif]
                    text-[45px]
                    font-normal
                    leading-[0.82]
                    tracking-[-0.085em]
                    text-[#0d2b22]
                    sm:mr-[16px] sm:text-[78px]
                    md:mr-[18px] md:text-[112px]
                    lg:text-[128px]
                    xl:text-[128px]
                    2xl:text-[128px]
                  "
                >
                  Erode Construction.Company
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* HERO IMAGE */}
      <section
        className="
          km-reveal w-full
          mt-[38px] px-[11px]
          sm:mt-[56px] sm:px-6
          md:mt-[82px] md:px-10
          lg:mt-[118px] lg:px-0
          xl:mt-[138px]
          2xl:mt-[156px]
        "
      >
        <div
          className="
            mx-auto overflow-hidden
            h-[300px] w-full rounded-[6px]
            sm:h-[380px]
            md:h-[452px]
            lg:h-[452px] lg:w-full lg:max-w-[1520px] lg:rounded-[8px]
            xl:h-[452px]
            2xl:h-[452px]
          "
        >
          <img
            src={img1}
            alt="Construction crane"
            className="
              h-full w-full
              object-cover
              object-[center_42%]
            "
          />
        </div>
      </section>
    </>
  );
}