import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TEXT = "Let's Talk. Work with us. Contact. ";

export function ContactPage() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.to(trackRef.current, {
      xPercent: -50,
      ease: 'none',
      duration: 28,
      repeat: -1,
    });
    return () => { tl.kill(); };
  }, []);

  return (
    <section className="pt-24 pb-10 overflow-hidden" id="contact">
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform"
        style={{ width: 'fit-content' }}
      >
        {/* Two identical halves — GSAP moves -50% for seamless infinite loop */}
        {[0, 1].map((half) => (
          <span
            key={half}
            className="font-heading font-bold text-foreground leading-none"
            style={{ fontSize: 'clamp(56px, 8.8vw, 140px)' }}
          >
            {TEXT.repeat(4)}
          </span>
        ))}
      </div>
    </section>
  );
}
