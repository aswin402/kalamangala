import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import img1 from "../../../../assets/amenities/img1.avif";

export function AmenitiesHero() {
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
      {/* AMENITIES MARQUEE */}
      <section
        className="
          relative w-full overflow-hidden
          h-[205px] pt-[102px]
          sm:h-[235px] sm:pt-[92px]
          md:h-[280px] md:pt-[110px]
          lg:h-[315px] lg:pt-[116px]
          xl:h-[330px] xl:pt-[122px]
          2xl:h-[340px] 2xl:pt-[124px]
        "
      >
        <div
          ref={marqueeRef}
          className="flex w-max whitespace-nowrap will-change-transform"
        >
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0">
              {Array.from({ length: 10 }).map((_, index) => (
                <span
                  key={index}
                  className="
                    mr-[14px]
                    text-[45px]
                    font-medium
                    leading-[0.82]
                    tracking-[-0.085em]
                    text-[#12362d]
                    sm:mr-[16px] sm:text-[78px]
                    md:mr-[18px] md:text-[112px]
                    lg:text-[140px]
                    xl:text-[140px]
                    2xl:text-[140px]
                  "
                >
                  Amenities.
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* HERO IMAGE */}
      <section
        className="
          am-hero w-full
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
            h-[426px] w-full rounded-[6px]
            sm:h-[520px]
            md:h-[560px]
            lg:h-[620px] lg:w-full lg:rounded-none
            xl:h-[620px]
            2xl:h-[620px]
          "
        >
          <img
            src={img1}
            alt="Amenities"
            className="
              h-full w-full
              object-cover
              object-center
              lg:object-cover
            "
          />
        </div>
      </section>
    </>
  );
}