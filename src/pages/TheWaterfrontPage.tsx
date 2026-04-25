import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Calendar, Home, MapPin } from "lucide-react";

import logo from "../assets/thewaterfront/logo.avif";
import img1 from "../assets/thewaterfront/img1.avif";
import img2 from "../assets/thewaterfront/img2.png";
import img3 from "../assets/thewaterfront/img3.png";
import img4 from "../assets/thewaterfront/img4.png";
import img5 from "../assets/thewaterfront/img5.png";
import img6 from "../assets/thewaterfront/img6.png";
import img7 from "../assets/thewaterfront/img7.png";
import img8 from "../assets/thewaterfront/img8.png";
import img9 from "../assets/thewaterfront/img9.png";
import img10 from "../assets/thewaterfront/img10.png";
import after from "../assets/thewaterfront/after.png";

gsap.registerPlugin(ScrollTrigger);

const gold = "#caa33a";
const green = "#132d25";

export function TheWaterfrontPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from(".wf-logo", {
        opacity: 0,
        y: 35,
        scale: 0.96,
        duration: 1.1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".wf-reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 42,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 86%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".wf-img").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          scale: 0.96,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const showcase = [img3, img4, img5, img6, img7, img8, img9, img10, img1, after];

  return (
    <main
      ref={pageRef}
      className="w-full overflow-hidden px-5 pb-20"
      style={{
        color: green,
        fontFamily: "'News Cycle', 'Inter', sans-serif",
      }}
    >
      {/* LOGO / TITLE SECTION */}
      <section className="wf-logo mx-auto flex min-h-[560px] max-w-[980px] items-center justify-center pt-12">
        <img
          src={logo}
          alt="The Waterfront"
          className="w-full max-w-[760px] object-contain"
        />
      </section>

      {/* HERO IMAGE + INFO */}
      <section className="wf-reveal mx-auto grid max-w-[900px] grid-cols-1 items-start gap-6 md:grid-cols-[2.2fr_0.8fr]">
        <div className="wf-img h-[175px] overflow-hidden rounded-[3px] md:h-[190px]">
          <img
            src={img1}
            alt="The Waterfront aerial view"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="pt-1 text-[13px] leading-[1.25]">
          <p className="mb-3 font-semibold uppercase tracking-[0.12em]">
            The Waterfront
          </p>

          <InfoItem icon={<Calendar size={13} />} label="Status" value="On Going" />
          <InfoItem icon={<Home size={13} />} label="Type" value="Residential Community" />
          <InfoItem icon={<MapPin size={13} />} label="Location" value="Perundurai, Erode" />

          <button
            className="mt-5 w-full rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:scale-[1.02]"
            style={{ backgroundColor: green }}
          >
            Enquire Now
          </button>
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="wf-reveal mx-auto mt-12 grid max-w-[680px] grid-cols-1 gap-12 md:grid-cols-2">
        <h2
          className="text-[22px] leading-[1.04] tracking-[-0.035em] md:text-[26px]"
          style={{ fontFamily: "'Pathway Gothic One', 'News Cycle', sans-serif" }}
        >
          Welcome to The Waterfront by Kalamangala — Erode's first premium
          community living, where nature and modern comforts come together.
          Choose your plot, build your dream home and be part of a secure,
          eco-friendly and like-minded neighborhood.
        </h2>

        <div>
          <p className="mb-3 text-[13px] font-semibold leading-none">
            The Waterfront
          </p>
          <p className="text-[12px] leading-[1.42] text-[#1f332d]/80">
            A thoughtfully planned residential community designed around green
            spaces, water views, clean roads, peaceful surroundings and everyday
            comfort. It brings premium plotted living together with the calmness
            of nature.
          </p>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="wf-reveal mx-auto mt-12 max-w-[680px]">
        <div className="grid overflow-hidden rounded-[3px] md:grid-cols-2">
          <div className="relative h-[360px] md:h-[380px]">
            <img
              src={img2}
              alt="Before"
              className="h-full w-full object-cover"
            />
            <span className="absolute left-4 top-3 text-[13px] font-bold text-white">
              Before
            </span>
          </div>

          <div className="relative h-[360px] md:h-[380px]">
            <img
              src={after}
              alt="After"
              className="h-full w-full object-cover"
            />
            <span className="absolute right-4 top-3 text-[13px] font-bold text-white">
              After
            </span>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="wf-reveal mx-auto mt-14 max-w-[680px]">
        <div className="relative bg-[#fbfaf0] px-9 py-12 text-center">
          <span className="absolute left-1/2 top-1 -translate-x-1/2 text-[72px] leading-none text-[#e7e1cb]">
            “
          </span>

          <p className="relative mx-auto max-w-[560px] pt-8 text-[16px] leading-[1.26] tracking-[-0.02em]">
            Kalamangala has exceeded our expectations in every way. The quality
            of construction, attention to detail, and thoughtful amenities make
            it a truly exceptional place to live. We couldn't be happier with
            our investment!
          </p>

          <p className="mt-4 text-[9px] uppercase tracking-[0.22em] text-[#8d8060]">
            — Happy Customer
          </p>
        </div>
      </section>

      {/* SMALL DESCRIPTION BLOCK */}
      <section className="wf-reveal mx-auto mt-14 max-w-[470px] text-center">
        <p
          className="mb-4 text-[12px] font-bold uppercase tracking-[0.08em]"
          style={{ color: green }}
        >
          The Waterfront - Premium Living Experience
        </p>

        <p className="text-[10px] leading-[1.6] text-[#1f332d]/85">
          The Waterfront is designed for those who want a peaceful and premium
          lifestyle close to nature. With wide roads, green planning, modern
          amenities and a secure neighborhood, it offers the perfect foundation
          for your dream home.
        </p>
      </section>

      {/* VIDEO */}
      <section className="wf-reveal mx-auto mt-16 max-w-[680px]">
        <div className="group relative aspect-video overflow-hidden rounded-[4px]">
          <img
            src="https://i.ytimg.com/vi_webp/MzczJI7bn34/sddefault.webp"
            alt="The Waterfront video"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute inset-0 flex items-center justify-center">
            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-black/80 transition duration-300 group-hover:scale-110">
              <Play size={15} className="ml-0.5 fill-white text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="wf-reveal mx-auto mt-20 max-w-[940px]">
        <div className="mb-8 text-center">
          <p className="mb-[-9px] text-[9px] uppercase tracking-[0.28em] text-[#1f332d]/70">
            Project Gallery
          </p>

          <h2
            className="text-[72px] leading-none tracking-[-0.085em] md:text-[96px]"
            style={{
              color: green,
              fontFamily: "'BDO Grotesk Medium', 'Inter Display', sans-serif",
              fontWeight: 500,
            }}
          >
            Showcase
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-[8px]">
          {showcase.map((image, index) => (
            <div
              key={index}
              className={`wf-img group overflow-hidden rounded-[4px] ${
                index === 2 || index === 5 ? "row-span-2" : ""
              }`}
            >
              <img
                src={image}
                alt={`Showcase ${index + 1}`}
                className={`w-full object-cover transition duration-700 group-hover:scale-[1.04] ${
                  index === 2 || index === 5
                    ? "h-[430px] md:h-[500px]"
                    : "h-[245px] md:h-[310px]"
                }`}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="mb-3 flex items-start gap-2">
      <span
        className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: "rgba(202,163,58,0.16)", color: gold }}
      >
        {icon}
      </span>

      <div>
        <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#1f332d]/45">
          {label}
        </p>
        <p className="text-[11px] font-semibold leading-tight text-[#132d25]">
          {value}
        </p>
      </div>
    </div>
  );
}