import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TEXT = "Let's Talk. Work with us. Contact. ";

export function ContactPage() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.to(trackRef.current, {
      xPercent: -50,
      ease: 'none',
      duration: 60,
      repeat: -1,
    });
    return () => { tl.kill(); };
  }, []);

  return (
    <section className="pt-24 pb-10 overflow-hidden m-16 " id="contact">
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform"
        style={{ width: 'fit-content' }}
      >
        {/* Two identical halves — GSAP moves -50% for seamless infinite loop */}
        {[0, 1].map((half) => (
          <span
            key={half}
            className="font-normal  text-foreground leading-none tracking-[-0.08em] pr-16"
            style={{
              fontSize: 'clamp(48px, 9vw, 120px)',
            }}
          >
            {TEXT}
          </span>
        ))}
      </div>
    </section>
  );
}
