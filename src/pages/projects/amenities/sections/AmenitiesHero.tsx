import { useEffect, useRef } from "react";
import gsap from "gsap";

import img1 from "../../../../assets/amenities/img1.avif";

export function AmenitiesHero() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 42,
      ease: "none",
      repeat: -1,
    });

    return () => {
      marquee.kill();
    };
  }, []);

  return (
    <>
      {/* AMENITIES MARQUEE - MOVES LEFT */}
      <section className="relative w-full overflow-hidden pt-[100px]">
        <div
          ref={marqueeRef}
          className="flex w-max whitespace-nowrap will-change-transform"
        >
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0">
              {Array.from({ length: 8 }).map((_, index) => (
                <span
                  key={index}
                  className="mr-[18px] text-[92px] font-semibold leading-[0.82] tracking-[-0.085em] text-[#12362d] sm:text-[112px] md:text-[132px] lg:text-[154px]"
                >
                  Amenities.
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="am-hero mx-auto mt-[156px] w-full max-w-[1800px] px-[160px]">
        <div className="h-[410px] w-full overflow-hidden rounded-[6px]">
          <img
            src={img1}
            alt="Amenities"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
