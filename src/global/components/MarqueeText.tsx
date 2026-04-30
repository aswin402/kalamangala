import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface MarqueeTextProps {
  text: string;
  duration?: number;
  className?: string;
  repeatCount?: number;
}

export function MarqueeText({
  text,
  duration = 60,
  className = "pb-10 pt-20 md:pt-24 mt-16 mb-16",
  repeatCount = 10,
}: MarqueeTextProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        marqueeRef.current,
        { xPercent: 0 },
        {
          xPercent: -50,
          duration: duration,
          ease: "none",
          repeat: -1,
        }
      );
    });

    return () => ctx.revert();
  }, [duration]);

  return (
    <section className={`relative w-full overflow-hidden bg-transparent ${className}`}>
      <div
        ref={marqueeRef}
        className="flex w-max whitespace-nowrap will-change-transform"
      >
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0">
            {Array.from({ length: repeatCount }).map((_, index) => (
              <span
                key={index}
                className="pr-10 font-sans text-[clamp(48px,9vw,125px)] font-medium leading-none tracking-[-0.08em] text-foreground md:pr-16"
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
