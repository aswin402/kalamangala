import { useEffect, useRef } from "react";
import gsap from "gsap";

import img1 from "../../../../assets/construction-company/img1.webp";

export function ConstructionHero() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 42,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* MARQUEE */}
      <section className="w-full overflow-hidden pt-[36px] pb-[82px]">
        <div
          ref={marqueeRef}
          className="flex w-max whitespace-nowrap will-change-transform"
        >
          {[0, 1].map((group) => (
            <div key={group} className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="pr-[18px] pt-10 pb-5 font-['Inter',sans-serif] text-[clamp(92px,8.8vw,172px)] font-[500] leading-[0.82] tracking-[-0.105em] text-[#0d2b22]"
                >
                  Construction.Company.Erode
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="km-reveal mx-auto w-full max-w-[1520px] px-5">
        <div className="h-[300px] overflow-hidden rounded-[8px] md:h-[452px]">
          <img
            src={img1}
            alt="Construction crane"
            className="h-full w-full object-cover object-[center_42%]"
          />
        </div>
      </section>
    </>
  );
}