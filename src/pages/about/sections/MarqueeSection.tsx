import { useEffect, useRef } from "react";
import gsap from "gsap";

const MARQUEE = "Innovation. Community. Quality. ";

export const MarqueeSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const tl = gsap.to(trackRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 95,
      repeat: -1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-[180px] pb-[130px]">
      <div
        ref={trackRef}
        className="flex w-fit whitespace-nowrap will-change-transform"
      >
        {[0, 1].map((item) => (
          <h1
            key={item}
            className="pr-[34px] text-[clamp(110px,9.4vw,185px)] font-medium leading-[0.86] tracking-[-0.095em] text-[#172d24]"
          >
            {MARQUEE.repeat(4)}
          </h1>
        ))}
      </div>
    </section>
  );
};