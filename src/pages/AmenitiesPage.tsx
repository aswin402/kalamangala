import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/amenities/img1.avif";
import img2 from "../assets/amenities/img2.avif";
import img3 from "../assets/amenities/img3.webp";
import img4 from "../assets/amenities/img4.webp";
import img5 from "../assets/amenities/img5.avif";
import img6 from "../assets/amenities/img6.webp";
import img7 from "../assets/amenities/img7.webp";
import img8 from "../assets/amenities/img8.avif";
import img9 from "../assets/amenities/img9.webp";
import img10 from "../assets/amenities/img10.webp";
import img11 from "../assets/amenities/img11.webp";
import img12 from "../assets/amenities/img12.webp";
import img13 from "../assets/amenities/img13.webp";

gsap.registerPlugin(ScrollTrigger);

const green = "#12362d";
const peach = "#ffad86";

export function AmenitiesPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          duration: 36,
          ease: "none",
          repeat: -1,
        });
      }

      gsap.from(".am-hero", {
        opacity: 0,
        y: 28,
        duration: 1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".am-reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 38,
          duration: 0.9,
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

  const keyHighlights = [
    {
      title: "Premium Infrastructure",
      image: img13,
      reverse: false,
      points: [
        "Well-planned internal roads",
        "Modern street lighting",
        "Underground power lines",
        "Beautifully planned landscape zones",
      ],
    },
    {
      title: "Smart & Future Ready",
      image: img6,
      reverse: true,
      points: [
        "Smart plotted development layout",
        "Future-ready utility access",
        "Secure community environment",
        "Clean and organized planning",
      ],
    },
    {
      title: "Leisure & Wellness Zones",
      image: img10,
      reverse: false,
      points: [
        "Children’s play area",
        "Open recreation zones",
        "Green walking spaces",
        "Peaceful community lifestyle",
      ],
    },
    {
      title: "Recreation for All Ages",
      image: img8,
      reverse: true,
      points: [
        "Spaces for relaxed evenings",
        "Family-friendly surroundings",
        "Comfort-focused amenities",
        "Active everyday lifestyle",
      ],
    },
    {
      title: "Clubhouse — The Heart of Community",
      image: img2,
      reverse: false,
      points: [
        "A central place to meet",
        "Indoor gathering spaces",
        "Community interaction zones",
        "Lifestyle-focused planning",
      ],
    },
  ];

  const apart = [
    {
      title: "Why The Waterfront Stands Apart",
      image: img2,
      desc: "A calm, nature-rich plotted community with premium lifestyle planning.",
    },
    {
      title: "Eco-Friendly Planning",
      image: img7,
      desc: "Thoughtful landscape, trees and open areas for peaceful living.",
    },
    {
      title: "Low Maintenance Design",
      image: img12,
      desc: "Clean utilities and organized infrastructure for long-term comfort.",
    },
    {
      title: "Prime Location",
      image: img4,
      desc: "Easy access while still offering a private and calm environment.",
    },
    {
      title: "Natural Integration",
      image: img9,
      desc: "A beautiful balance of built spaces, views and greenery.",
    },
  ];

  const darkBlocks = [
    {
      title: "The Kalamangala Promise",
      image: img3,
      reverse: false,
      points: [
        "Thoughtful design with lifestyle comfort",
        "Clear attention to detail across each space",
        "Premium planning for modern families",
        "A refined environment you can trust",
      ],
    },
    {
      title: "Location Advantage",
      image: img5,
      reverse: true,
      points: [
        "Smooth connectivity to key landmarks",
        "Peaceful yet accessible community",
        "Balanced living with modern convenience",
        "Ideal environment for daily living",
      ],
    },
    {
      title: "Lifestyle Beyond Homes",
      image: img10,
      reverse: false,
      points: [
        "Community-first planning",
        "Spaces for children and families",
        "Outdoor areas for recreation",
        "A better way to experience everyday life",
      ],
    },
    {
      title: "Built for Lasting Benefits",
      image: img6,
      reverse: true,
      points: [
        "Future-ready infrastructure",
        "Clean and practical planning",
        "Reliable everyday usability",
        "Premium community value",
      ],
    },
  ];

  return (
    <main
      ref={pageRef}
      className="w-full overflow-hidden pb-20"
      style={{
        color: green,
        fontFamily: "'News Cycle', 'Inter', sans-serif",
      }}
    >
      {/* MARQUEE */}
      <section className="relative w-full overflow-hidden pt-4">
        <div
          ref={marqueeRef}
          className="flex w-fit whitespace-nowrap"
        >
          {[0, 1].map((half) => (
            <div key={half} className="flex">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="mr-2 text-[42px] font-semibold leading-none tracking-[-0.08em] md:text-[58px]"
                  style={{ color: green }}
                >
                  Amenities.
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* HERO */}
      <section className="am-hero mx-auto mt-7 max-w-[680px] px-4 text-center">
        <div className="mx-auto h-[135px] max-w-[680px] overflow-hidden md:h-[165px]">
          <img
            src={img1}
            alt="Amenities"
            className="h-full w-full object-cover"
          />
        </div>

        <h1
          className="mx-auto mt-4 max-w-[360px] text-[45px] font-semibold leading-[0.78] tracking-[-0.08em] md:text-[55px]"
          style={{ color: green }}
        >
          Why choose Kalamangala
        </h1>

        <p className="mx-auto mt-5 max-w-[520px] text-[9px] leading-[1.45] text-[#12362d]/75">
          The Waterfront offers more than just plots. It brings together
          thoughtful amenities, scenic planning, safe surroundings and modern
          infrastructure to create a peaceful community lifestyle.
        </p>

        <button
          className="mt-4 rounded-full px-6 py-[7px] text-[8px] font-semibold text-white"
          style={{ backgroundColor: green }}
        >
          Explore more
        </button>
      </section>

      {/* VISION */}
      <section className="am-reveal mx-auto mt-12 max-w-[620px] px-4 text-center">
        <h2 className="text-[20px] font-semibold leading-none tracking-[-0.02em]">
          Crafted by Visionaries, Built for You
        </h2>

        <p className="mx-auto mt-5 max-w-[570px] text-[10px] leading-[1.55] text-[#12362d]/80">
          Kalamangala believes that a home is not just about walls. It is about
          the comfort of the surroundings, the safety of the community and the
          quality of everyday living. Every detail at The Waterfront is planned
          to give families a better lifestyle.
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="am-reveal mx-auto mt-12 max-w-[620px] px-4">
        <h3 className="text-[17px] font-semibold leading-none tracking-[-0.02em]">
          Key Highlights of The Waterfront
        </h3>

        <p className="mt-4 text-[10px] leading-[1.55] text-[#12362d]/80">
          Each amenity is designed with purpose — from beautiful entry spaces
          and open green areas to smart utilities and recreational zones.
        </p>

        <h4 className="mt-6 text-[15px] font-semibold leading-none tracking-[-0.02em]">
          Expansive Green Spaces & Scenic Canal Views
        </h4>

        <p className="mt-3 text-[10px] leading-[1.55] text-[#12362d]/80">
          A calm residential layout surrounded by greenery, thoughtful
          landscaping and peaceful views that make everyday living more
          refreshing.
        </p>
      </section>

      {/* FEATURE PAIRS */}
      <section className="mx-auto mt-14 max-w-[520px] px-4">
        <div className="flex flex-col gap-10">
          {keyHighlights.map((item, index) => (
            <div
              key={index}
              className={`am-reveal grid grid-cols-2 items-center gap-7 ${
                item.reverse ? "direction-rtl" : ""
              }`}
              style={{ direction: item.reverse ? "rtl" : "ltr" }}
            >
              <div style={{ direction: "ltr" }}>
                <h4 className="text-[13px] font-semibold leading-tight tracking-[-0.02em]">
                  {item.title}
                </h4>

                <ul className="mt-3 list-disc pl-4 text-[9px] leading-[1.55] text-[#12362d]/80">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-[4px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[145px] w-full object-cover transition duration-700 hover:scale-[1.04]"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SAFE SECTION */}
      <section className="am-reveal mx-auto mt-14 max-w-[620px] px-4">
        <h3 className="text-[18px] font-semibold leading-none tracking-[-0.02em]">
          Safe, Secure, and Serene
        </h3>

        <p className="mt-4 text-[10px] leading-[1.55] text-[#12362d]/80">
          Designed for families, The Waterfront brings together privacy,
          greenery and a peaceful atmosphere within a secure community
          environment.
        </p>
      </section>

      {/* STANDS APART */}
      <section className="am-reveal mx-auto mt-12 max-w-[620px] px-4">
        <h2 className="mb-4 text-[25px] font-semibold leading-[0.9] tracking-[-0.05em]">
          Why The Waterfront <br />
          Stands Apart
        </h2>

        <div className="grid grid-cols-3 gap-[7px]">
          {apart.slice(0, 3).map((item) => (
            <ApartCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-[7px] grid grid-cols-2 gap-[7px]">
          {apart.slice(3).map((item) => (
            <ApartCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* DARK BLOCKS */}
      <section className="mx-auto mt-16 max-w-[500px] px-4">
        <div className="flex flex-col gap-4">
          {darkBlocks.map((item) => (
            <div
              key={item.title}
              className={`am-reveal grid overflow-hidden rounded-[5px] bg-[#12362d] md:grid-cols-2 ${
                item.reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="h-[260px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-col justify-center px-8 py-8">
                <h3
                  className="text-[13px] font-semibold leading-tight"
                  style={{ color: peach }}
                >
                  {item.title}
                </h3>

                <ul className="mt-4 list-disc pl-4 text-[9px] leading-[1.7] text-white/78">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function ApartCard({
  item,
}: {
  item: {
    title: string;
    image: string;
    desc: string;
  };
}) {
  return (
    <div className="group relative h-[105px] overflow-hidden rounded-[3px] bg-[#12362d]">
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-[1.05]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#12362d] via-[#12362d]/40 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-3">
        <h4 className="text-[8px] font-semibold leading-tight text-white">
          {item.title}
        </h4>

        <p className="mt-1 text-[7px] leading-[1.25] text-white/75">
          {item.desc}
        </p>
      </div>
    </div>
  );
}