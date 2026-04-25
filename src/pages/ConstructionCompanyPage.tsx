import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Building2,
  HardHat,
  Layers,
  PenTool,
  Hammer,
  Navigation,
  TrendingUp,
  Heart,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

import img1 from '../assets/construction-company/img1.webp';
import img2 from '../assets/construction-company/img2.webp';
import img3 from '../assets/construction-company/img3.webp';
import img4 from '../assets/construction-company/img4.webp';
import img6 from '../assets/construction-company/img6.webp';
import img7 from '../assets/construction-company/img7.webp';
import img8 from '../assets/construction-company/img8.webp';
import img9 from '../assets/construction-company/img9.webp';
import img10 from '../assets/construction-company/img10.webp';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Residential Construction',
    desc: 'Build your dream home with our expert residential construction services, designed for comfort, functionality, and long-lasting quality.',
    img: img2,
    icon: Building2,
  },
  {
    title: 'Commercial Projects',
    desc: 'We create efficient commercial spaces that support business growth, strong layouts, and reliable structural performance.',
    img: img3,
    icon: HardHat,
  },
  {
    title: 'Industrial Construction',
    desc: 'Reliable industrial construction for factories, warehouses, and large-scale facilities with practical planning and durable execution.',
    img: img4,
    icon: Layers,
  },
  {
    title: 'Architectural Design & Planning',
    desc: 'From initial concept to detailed planning, we shape functional, aesthetic, and future-ready architectural solutions.',
    img: img6,
    icon: PenTool,
  },
  {
    title: 'Renovation & Remodeling',
    desc: 'Transform your existing space with smart renovation and remodeling services focused on comfort, beauty, and usability.',
    img: img7,
    icon: Hammer,
  },
];

const whyChoose = [
  {
    title: 'Location Mastery',
    desc: 'Located exactly where comfort and connectivity meet.',
    icon: MapPin,
  },
  {
    title: 'Future Appreciation',
    desc: 'A smart investment location with strong future value.',
    icon: TrendingUp,
  },
  {
    title: 'Convenient Living',
    desc: 'Everything essential within a few minutes reach.',
    icon: Navigation,
  },
  {
    title: 'Natural Harmony',
    desc: 'Planned with green spaces, calm, and pollution-free surroundings.',
    icon: Heart,
  },
];

export function ConstructionCompanyPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 42,
        ease: 'none',
      });

      gsap.utils.toArray<HTMLElement>('.km-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 48,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 87%',
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.km-service').forEach((el, index) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 55,
            scale: 0.985,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.95,
            delay: index * 0.04,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="w-full overflow-hidden bg-[#fbfaf1] text-[#0d2b22]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='48' height='42' viewBox='0 0 48 42' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ddd8c6' stroke-width='1' stroke-opacity='.72'%3E%3Cpath d='M12 0 0 10.5 12 21 0 31.5 12 42'/%3E%3Cpath d='M24 0 12 10.5 24 21 12 31.5 24 42'/%3E%3Cpath d='M36 0 24 10.5 36 21 24 31.5 36 42'/%3E%3Cpath d='M48 0 36 10.5 48 21 36 31.5 48 42'/%3E%3C/g%3E%3C/svg%3E\")",
        backgroundSize: '48px 42px',
      }}
    >
      {/* MARQUEE */}
      <section className="w-full overflow-hidden pt-[38px] pb-[26px]">
        <div
          ref={marqueeRef}
          className="flex w-max whitespace-nowrap will-change-transform"
        >
          {[0, 1].map((group) => (
            <div key={group} className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="pr-4 font-['Inter',sans-serif] text-[clamp(44px,6.7vw,92px)] font-[500] leading-[0.82] tracking-[-0.095em] text-[#0d2b22]"
                >
                  Construction.Company.Erode
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="km-reveal mx-auto w-full max-w-[1120px] px-5">
        <div className="h-[220px] overflow-hidden rounded-[5px] md:h-[305px]">
          <img
            src={img1}
            alt="Construction crane"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>

      {/* HERO CONTENT */}
      <section className="km-reveal mx-auto max-w-[980px] px-5 pt-[18px] text-center">
        <h1 className="mx-auto max-w-[760px] font-['Inter',sans-serif] text-[48px] font-[900] leading-[0.78] tracking-[-0.085em] text-[#0d2b22] md:text-[76px]">
          Top Construction Companies in Erode
        </h1>

        <h2 className="mt-[8px] font-['Inter',sans-serif] text-[19px] font-[900] leading-none tracking-[-0.055em] text-[#0d2b22] md:text-[30px]">
          Leading Construction Company in Tamil Nadu
        </h2>

        <p className="mx-auto mt-[28px] max-w-[910px] font-['Inter',sans-serif] text-[12px] font-[600] leading-[1.28] tracking-[-0.045em] text-[#0d2b22] md:text-[14px]">
          Welcome to Kalamangala, one of the{' '}
          <span className="font-[900] text-[#006ee6] underline">
            top construction companies in Erode
          </span>{' '}
          known for delivering excellence in every structure we create. We
          specialize in transforming spaces into landmarks that inspire modern
          living and relationship growth. With a reputation built on trust,
          quality, and innovation, Kalamangala stands as a name synonymous with
          integrity and craftsmanship in the construction industry of Tamil Nadu.
        </p>

        <button className="mt-[22px] rounded-full bg-[#0d2b22] px-[28px] py-[8px] font-['Inter',sans-serif] text-[10px] font-[800] tracking-[-0.025em] text-[#fbfaf1] transition-all duration-300 hover:scale-105 hover:bg-[#f4aa82] hover:text-[#0d2b22]">
          Contact us
        </button>
      </section>

      {/* BUILDING FUTURE */}
      <section className="km-reveal mx-auto mt-[76px] max-w-[980px] px-5">
        <h2 className="font-['Inter',sans-serif] text-[29px] font-[900] leading-[0.95] tracking-[-0.075em] text-[#0d2b22] md:text-[38px]">
          Building the Future with Precision and Passion
        </h2>

        <div className="mt-[20px] space-y-[15px] font-['Inter',sans-serif] text-[12px] font-[600] leading-[1.35] tracking-[-0.045em] text-[#0d2b22] md:text-[14px]">
          <p>
            At Kalamangala, we believe that every project is more than just
            bricks and mortar; it is a vision realized through expertise and
            attention to detail. As one of the top construction firms in Tamil
            Nadu, we are dedicated to creating residential, commercial, and
            industrial projects that blend aesthetic design with functional
            excellence.
          </p>

          <p>
            Our approach focuses on delivering structures that reflect strength,
            sustainability, and timeless beauty.
          </p>

          <p>
            We have earned the trust of clients across Erode and Tamil Nadu by
            consistently meeting deadlines, ensuring transparent processes, and
            maintaining superior construction quality. From concept to
            completion, Kalamangala handles every phase of construction with
            precision, adhering to industry best practices and modern techniques.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto mt-[64px] max-w-[1000px] px-5">
        <h2 className="km-reveal mb-[18px] font-['Inter',sans-serif] text-[30px] font-[900] leading-none tracking-[-0.075em] text-[#0d2b22] md:text-[38px]">
          Our Core Construction Services
        </h2>

        <div className="space-y-[12px]">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="km-service group relative h-[285px] overflow-hidden rounded-[8px] bg-[#14372e]"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute left-[12px] right-[12px] top-[12px] h-[165px] w-[calc(100%-24px)] rounded-[3px] object-cover transition-all duration-700 group-hover:scale-[1.015]"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-[#14372e]/10 via-[#14372e]/35 to-[#14372e] transition duration-700 group-hover:from-[#14372e]/0" />

                <div className="relative z-10 flex h-full flex-col justify-between px-[20px] py-[18px]">
                  <div className="flex items-center gap-[6px] text-white/45">
                    <Icon size={12} strokeWidth={2.4} />
                    <span className="font-['Inter',sans-serif] text-[8px] font-[600] leading-none tracking-[-0.045em]">
                      {service.title}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-['Inter',sans-serif] text-[13px] font-[900] leading-none tracking-[-0.055em] text-white md:text-[15px]">
                      {service.title}
                    </h3>

                    <p className="mt-[6px] max-w-[890px] font-['Inter',sans-serif] text-[9px] font-[500] leading-[1.25] tracking-[-0.04em] text-white/85 md:text-[11px]">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ADVANTAGE + BENEFITS */}
      <section className="mx-auto mt-[112px] grid max-w-[1000px] grid-cols-1 gap-[34px] px-5 md:grid-cols-2 md:items-start">
        <div className="km-reveal pt-[38px]">
          <h2 className="max-w-[390px] font-['Inter',sans-serif] text-[30px] font-[900] leading-[0.84] tracking-[-0.08em] text-[#0d2b22] md:text-[38px]">
            Experience the Kalamangala Advantage
          </h2>

          <p className="mt-[12px] max-w-[365px] font-['Inter',sans-serif] text-[11px] font-[600] leading-[1.25] tracking-[-0.045em] text-[#0d2b22] md:text-[13px]">
            Choosing Kalamangala means partnering with a builder who understands
            your aspirations. We bring trust, quality, and proven execution to
            every project.
          </p>

          <ul className="mt-[14px] space-y-[5px] font-['Inter',sans-serif] text-[11px] font-[700] leading-[1.18] tracking-[-0.045em] text-[#0d2b22] md:text-[13px]">
            {[
              'Expert engineering and planning',
              'Quality materials and execution',
              'Transparent process from start to finish',
              'On-time project delivery',
            ].map((item) => (
              <li key={item} className="flex items-start gap-[7px]">
                <CheckCircle2 size={12} className="mt-[1px] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="km-reveal overflow-hidden rounded-[8px]">
          <img
            src={img8}
            alt="Kalamangala advantage"
            className="h-[300px] w-full object-cover md:h-[360px]"
          />
        </div>

        <div className="km-reveal overflow-hidden rounded-[8px] md:mt-[0px]">
          <img
            src={img10}
            alt="Lifestyle benefits"
            className="h-[300px] w-full object-cover md:h-[360px]"
          />
        </div>

        <div className="km-reveal pt-[42px] md:pt-[75px]">
          <h2 className="max-w-[390px] font-['Inter',sans-serif] text-[30px] font-[900] leading-[0.84] tracking-[-0.08em] text-[#0d2b22] md:text-[38px]">
            Lifestyle Benefits You’ll Love
          </h2>

          <ul className="mt-[15px] space-y-[5px] font-['Inter',sans-serif] text-[11px] font-[700] leading-[1.18] tracking-[-0.045em] text-[#0d2b22] md:text-[13px]">
            {[
              'Modern spaces with practical layouts',
              'Better comfort and long-term usability',
              'Sustainable construction approach',
              'Reliable value for future growth',
            ].map((item) => (
              <li key={item} className="flex items-start gap-[7px]">
                <CheckCircle2 size={12} className="mt-[1px] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-[16px] max-w-[365px] font-['Inter',sans-serif] text-[11px] font-[600] leading-[1.25] tracking-[-0.045em] text-[#0d2b22] md:text-[13px]">
            Every Kalamangala project is created to support better living,
            stronger communities, and a future-ready lifestyle.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto mt-[70px] max-w-[1000px] px-5">
        <h2 className="km-reveal font-['Inter',sans-serif] text-[28px] font-[900] leading-none tracking-[-0.075em] text-[#0d2b22] md:text-[36px]">
          Why Choose The Waterfront, Erode
        </h2>

        <div className="mt-[26px] grid grid-cols-1 gap-[12px] md:grid-cols-2">
          {whyChoose.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="km-reveal rounded-[6px] bg-[#f4f0df] px-[22px] py-[24px]"
              >
                <div className="mb-[24px] flex h-[22px] w-[22px] items-center justify-center rounded-[4px] bg-white text-[#0d2b22]">
                  <Icon size={12} strokeWidth={2.2} />
                </div>

                <h3 className="font-['Inter',sans-serif] text-[22px] font-[900] leading-none tracking-[-0.07em] text-[#0d2b22] md:text-[27px]">
                  {item.title}
                </h3>

                <p className="mt-[10px] max-w-[360px] font-['Inter',sans-serif] text-[10px] font-[600] leading-[1.25] tracking-[-0.045em] text-[#0d2b22] md:text-[12px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="km-reveal mx-auto mt-[36px] max-w-[1000px] px-5 pb-[44px]">
        <div className="grid min-h-[325px] overflow-hidden rounded-[8px] bg-[#14372e] md:grid-cols-[1fr_1fr]">
          <div className="relative min-h-[260px] md:min-h-0">
            <img
              src={img9}
              alt="The Waterfront"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#14372e]/55" />
          </div>

          <div className="flex flex-col justify-center px-[34px] py-[38px] md:px-[48px]">
            <h2 className="font-['Inter',sans-serif] text-[36px] font-[900] leading-[0.82] tracking-[-0.085em] text-[#f4a67e] md:text-[48px]">
              Live Connected.
              <br />
              Live Complete.
              <br />
              Live The Waterfront.
            </h2>

            <p className="mt-[24px] max-w-[395px] font-['Inter',sans-serif] text-[10px] font-[600] leading-[1.4] tracking-[-0.04em] text-[#fbfaf1]/88 md:text-[12px]">
              Whether you’re building your dream home or planning your next
              investment, Kalamangala brings together location, design, trust,
              and quality construction to create spaces that feel complete.
            </p>

            <p className="mt-[12px] max-w-[395px] font-['Inter',sans-serif] text-[10px] font-[600] leading-[1.4] tracking-[-0.04em] text-[#fbfaf1]/88 md:text-[12px]">
              With thoughtful planning and reliable execution, we help you move
              closer to the lifestyle and future you imagine.
            </p>
          </div>
        </div>

        <div className="mt-[28px] text-center">
          <h3 className="font-['Inter',sans-serif] text-[25px] font-[900] leading-none tracking-[-0.075em] text-[#0d2b22] md:text-[34px]">
            The Waterfront by Kalamangala
          </h3>

          <p className="mt-[8px] font-['Inter',sans-serif] text-[10px] font-[700] leading-none tracking-[-0.045em] text-[#0d2b22] md:text-[13px]">
            Where every direction leads to convenience, and every view opens to
            calm.
          </p>
        </div>
      </section>
    </main>
  );
}