import { useEffect, useRef } from "react";
import gsap from "gsap";

export function PlotsMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const halfWidth = el.scrollWidth / 2;

      gsap.fromTo(
        el,
        { x: 0 },
        {
          x: -halfWidth,
          duration: 38,
          repeat: -1,
          ease: "none",
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  const text = "Premium.Residential.Plots";

  return (
    <section className="w-full overflow-hidden py-[30px]">
      <div
        ref={marqueeRef}
        className="flex w-max whitespace-nowrap will-change-transform"
      >
        {[0, 1].map((set) => (
          <div key={set} className="flex items-center">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={`${set}-${i}`}
                className="font-['Inter',sans-serif] font-black leading-none text-foreground"
                style={{
                  fontSize: "clamp(92px, 6.8vw, 126px)",
                  letterSpacing: "-0.09em",
                  marginRight: "0px",
                }}
              >
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}