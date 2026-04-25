import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../../assets/homepage/img1.webp';

gsap.registerPlugin(ScrollTrigger);

const ArrowIcon = ({ dark = true }: { dark?: boolean }) => (
  <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
    <path
      d="M2 11L11 2M11 2H4.5M11 2V8.5"
      stroke={dark ? '#14352d' : '#f4f2e3'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AboutSection = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { x: -28, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: imgRef.current, start: 'top 80%' },
      }
    );

    gsap.fromTo(
      textRef.current,
      { y: 22, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: textRef.current, start: 'top 80%' },
      }
    );
  }, []);

  return (
    <section id="about" className="site-shell site-px pt-[86px] pb-[98px]">
      <div className="mx-auto grid max-w-[1218px] grid-cols-[650px_1fr] items-center gap-[35px]">
        <div ref={imgRef} className="relative">
          <span className="tiny-label absolute -top-[25px] left-0">
            ● About Us
          </span>

          <div className="h-[420px] overflow-hidden rounded-[7px]">
            <img
              src={img1}
              alt="Kalamangala entrance"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div ref={textRef} className="pt-[8px]">
          <p className="max-w-[640px] text-[12.6px] font-semibold leading-[1.5] tracking-[-0.03em] text-foreground">
            At <strong className="font-black">Kalamangala</strong>, quality
            isn't just a standard—it's a{' '}
            <strong className="font-black">PROMISE</strong>. With 33+ years of
            expertise, we create lasting communities built on quality,
            innovation, and sustainability. Every project is designed with
            premium materials, advanced infrastructure, and thoughtful amenities
            to ensure durability and comfort. We blend nature with modern
            living, integrating green spaces into urban landscapes. At
            Kalamangala, we don't just build homes—we shape lifestyles for
            generations.
          </p>

          <Link
            to="/about"
            className="mt-[21px] inline-flex items-center gap-[8px] text-[8px] font-black uppercase tracking-[0.18em] text-foreground"
          >
            Know More
            <span className="grid h-[16px] w-[16px] place-items-center rounded-full border border-foreground/45">
              <ArrowIcon dark />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};