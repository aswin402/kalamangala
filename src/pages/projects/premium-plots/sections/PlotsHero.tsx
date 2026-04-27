import { useEffect, useRef } from "react";
import gsap from "gsap";
import img1 from "../../../../assets/premium-residential-plots-in-coimbatore/img1.jpg";

export function PlotsHero() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: "none",
      });
    }
  }, []);

  return (
    <>
      {/* Marquee Header */}
      <div className="w-full border-b border-foreground/5 py-4 overflow-hidden bg-white/30 backdrop-blur-sm">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap flex gap-8 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-4xl md:text-6xl font-heading font-bold text-foreground/10 uppercase tracking-tighter"
            >
              Premium. Residential. <span className="text-primary italic">Plots.</span>
            </span>
          ))}
        </div>
      </div>

      {/* Hero Image */}
      <section className="max-w-[1400px] mx-auto px-6 py-12 scroll-reveal">
        <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[21/9] border-4 border-white">
          <img
            src={img1}
            alt="Coimbatore Plots Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
