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
    <section
      className="mx-4 overflow-hidden pb-10 pt-20 md:mx-10 md:pt-24 lg:mx-16"
      id="contact"
    >
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform"
        style={{ width: 'fit-content' }}
      >
        {/* Two identical halves — GSAP moves -50% for seamless infinite loop */}
        {[0, 1].map((half) => (
          <span
            key={half}
            className="pr-10 font-normal leading-none tracking-[-0.08em] text-foreground md:pr-16"
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
