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
      duration: 300,
      repeat: -1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative flex h-[250px] w-full items-center overflow-hidden bg-transparent sm:h-[300px] md:h-[340px] lg:h-[384px] m-4">
      <div
        ref={trackRef}
        className="flex w-fit whitespace-nowrap will-change-transform"
      >
        {[0, 1].map((item) => (
          <h1
            key={item}
            className="shrink-0 pr-[28px] text-[clamp(56px,8.9vw,132px)] font-[500] leading-[0.86] tracking-[-0.095em] text-[#172d24] sm:pr-[34px]"
          >
            {MARQUEE.repeat(5)}
          </h1>
        ))}
      </div>
    </section>
  );
};