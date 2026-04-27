import { useEffect, useRef } from "react";
import gsap from "gsap";

export function PlotsMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 36,
        repeat: -1,
        ease: "none",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full overflow-hidden pt-[18px] pb-[18px]">
      <div
        ref={marqueeRef}
        className="flex w-max whitespace-nowrap will-change-transform"
      >
        {[0, 1].map((set) => (
          <div key={set} className="flex items-center">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="pr-2 font-black leading-none tracking-[-0.085em]"
                style={{
                  fontFamily: "Inter, Arial, sans-serif",
                  fontSize: "clamp(48px, 7vw, 118px)",
                }}
              >
                Premium.Residential.Plots
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
