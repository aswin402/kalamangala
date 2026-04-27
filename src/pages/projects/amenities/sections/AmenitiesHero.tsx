import { useEffect, useRef } from "react";
import gsap from "gsap";
import img1 from "../../../../assets/amenities/img1.avif";

export function AmenitiesHero() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "none",
      });
    }
  }, []);

  return (
    <>
      {/* Top Marquee */}
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
              Amenities. <span className="text-primary italic">Amenities.</span>
            </span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-6 py-16 scroll-reveal">
        <div className="rounded-4xl overflow-hidden shadow-2xl aspect-21/9 border-4 border-white">
          <img
            src={img1}
            alt="Amenities Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
