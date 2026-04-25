import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Shield,
  MapPin,
  Clock,
  Droplets,
  TreePine,
  Baby,
  CloudRain,
  Navigation,
  Zap,
  Star,
  Phone,
  Mail,
  MapPinned,
} from "lucide-react";

import img1 from "../assets/premium-residential-plots-in-coimbatore/img1.jpg";
import img2 from "../assets/premium-residential-plots-in-coimbatore/img2.jpg";
import img3 from "../assets/premium-residential-plots-in-coimbatore/img3.jpg";
import img4 from "../assets/premium-residential-plots-in-coimbatore/img4.jpeg";
import img5 from "../assets/premium-residential-plots-in-coimbatore/img5.webp";
import img6 from "../assets/premium-residential-plots-in-coimbatore/img6.jpeg";
import img7 from "../assets/premium-residential-plots-in-coimbatore/img7.jpg";
import img8 from "../assets/premium-residential-plots-in-coimbatore/img8.avif";
import img9 from "../assets/premium-residential-plots-in-coimbatore/img9.webp";
import img10 from "../assets/premium-residential-plots-in-coimbatore/img10.webp";
import img11 from "../assets/premium-residential-plots-in-coimbatore/img11.avif";
import img12 from "../assets/premium-residential-plots-in-coimbatore/img12.avif";
import img13 from "../assets/premium-residential-plots-in-coimbatore/img13.webp";
import img14 from "../assets/premium-residential-plots-in-coimbatore/img14.webp";
import img15 from "../assets/premium-residential-plots-in-coimbatore/img15.webp";

gsap.registerPlugin(ScrollTrigger);

const DARK = "#17352d";
const CREAM = "#f6f3df";
const SOFT = "#ded9ad";
const PEACH = "#efa27e";
const TEXT = "#101d18";

export function PremiumResidentialPlotsPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 36,
        repeat: -1,
        ease: "none",
      });

      gsap.utils.toArray<HTMLElement>(".km-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 34 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const amenities = [
    {
      icon: Shield,
      title: "Gated community",
      text: "Secure entrance with controlled access and peaceful residential planning.",
    },
    {
      icon: Navigation,
      title: "Wide internal roads",
      text: "Clean road layout designed for easy movement and long-term comfort.",
    },
    {
      icon: TreePine,
      title: "Green spaces",
      text: "Open landscaped areas that make everyday living calm and refreshing.",
    },
    {
      icon: Droplets,
      title: "Water facilities",
      text: "Reliable water planning and basic infrastructure for daily convenience.",
    },
    {
      icon: Baby,
      title: "Children’s zone",
      text: "Safe community spaces for families, kids, and relaxed outdoor living.",
    },
    {
      icon: CloudRain,
      title: "Rainwater harvesting",
      text: "Eco-conscious planning that supports sustainable residential living.",
    },
  ];

  const whyCards = [
    {
      image: img2,
      title: "Erode Railway Station",
      time: "Just 15 Minutes Away",
      text: "Stay connected to major towns and cities with easy railway access from the community.",
      dark: true,
    },
    {
      image: img3,
      title: "Thindal Kovil",
      time: "Reachable Within 5 Minutes",
      text: "A peaceful spiritual landmark close to your home, adding cultural value to the neighbourhood.",
      dark: false,
    },
    {
      image: img4,
      title: "Collector Office",
      time: "Only 10 Minutes Away",
      text: "Important civic and administrative facilities are located within a short drive.",
      dark: true,
    },
    {
      image: img5,
      title: "Erode Shopping Centre",
      time: "10 Minutes Away",
      text: "Daily shopping, essentials, restaurants, and city conveniences remain close to your address.",
      dark: false,
    },
    {
      image: img6,
      title: "Erode New Bus Stand",
      time: "Only 20 Minutes Away",
      text: "Easy regional connectivity for work, travel, education, and family movement.",
      dark: true,
    },
    {
      image: img7,
      title: "Cauvery River",
      time: "Just 2 Minutes Away",
      text: "Enjoy the calm natural surroundings and scenic lifestyle advantage near the river.",
      dark: false,
    },
  ];

  const tableRows = [
    ["Government School", "500 m", "2 mins"],
    ["Proposed Park", "1 km", "2 mins"],
    ["Thindal Kovil", "3 km", "5 mins"],
    ["Erode Railway Station", "4 km", "15 mins"],
    ["Collector Office", "5 km", "7 mins"],
    ["Cauvery River", "700 m", "2 mins"],
  ];

  const growthCards = [
    {
      img: img8,
      title: "Emerging connectivity",
      text: "Close to key roads and transport points.",
    },
    {
      img: img9,
      title: "Calm residential life",
      text: "A peaceful plotted community for families.",
    },
    {
      img: img10,
      title: "Ideal for homes",
      text: "A practical location for future living.",
    },
    {
      img: img11,
      title: "Clean environment",
      text: "Open spaces designed for a better lifestyle.",
    },
    {
      img: img12,
      title: "High-growth area",
      text: "Strong location value for long-term investment.",
    },
  ];

  return (
    <main
      ref={pageRef}
      className="w-full overflow-hidden"
      style={{
        color: TEXT,
        backgroundColor: CREAM,
        backgroundImage:
          "radial-gradient(rgba(23,53,45,0.08) 1px, transparent 1px)",
        backgroundSize: "12px 12px",
      }}
    >
      {/* MARQUEE */}
      <section className="w-full overflow-hidden pt-[18px] pb-[18px]">
        <div
          ref={marqueeRef}
          className="flex w-max whitespace-nowrap will-change-transform"
        >
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="pr-2 font-black leading-none tracking-[-0.085em]"
                  style={{
                    fontFamily: "Inter, Arial, sans-serif",
                    fontSize: "clamp(48px, 7vw, 118px)",
                  }}
                >
                  Premium.Residential.Plots
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <div className="mx-auto w-full max-w-[920px] px-4 sm:px-6">
        {/* HERO IMAGE */}
        <section className="km-reveal pt-2">
          <div className="mx-auto h-[150px] w-full max-w-[740px] overflow-hidden rounded-[7px] sm:h-[190px] md:h-[225px]">
            <img
              src={img1}
              alt="Premium residential plots in Coimbatore"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* INTRO */}
        <section className="km-reveal mx-auto mt-5 max-w-[720px] text-center">
          <h1 className="mx-auto max-w-[620px] text-[26px] font-black leading-[0.88] tracking-[-0.075em] sm:text-[34px] md:text-[43px]">
            Discover Premium Residential
            <br />
            Plots in Coimbatore at
            <br />
            Kalamangala
          </h1>

          <p className="mx-auto mt-5 max-w-[690px] text-[10px] font-medium leading-[1.45] tracking-[-0.02em] sm:text-[11px]">
            Whether you are looking to build your dream home, secure a smart
            investment, or own a peaceful residential space, Kalamangala offers
            planned plots in a fast-growing location with comfort, connectivity,
            and long-term value.
          </p>

          <p className="mx-auto mt-4 max-w-[760px] text-[10px] font-medium leading-[1.55] tracking-[-0.02em] sm:text-[11px]">
            Residential plots give you the freedom to design your home your way.
            At Kalamangala, every plot is part of a carefully planned community
            with essential facilities, road access, green surroundings, and a
            neighbourhood made for family living.
          </p>

          <button
            className="mt-5 rounded-full px-5 py-2 text-[9px] font-bold uppercase tracking-[-0.01em] text-white transition hover:scale-105"
            style={{ backgroundColor: DARK }}
          >
            Enquire Now
          </button>
        </section>

        {/* TEXT SECTIONS */}
        <section className="km-reveal mt-12 max-w-[840px]">
          <h2 className="max-w-[520px] text-[18px] font-black leading-[0.95] tracking-[-0.06em] sm:text-[23px]">
            Prime Location – The Heart of
            <br />
            Coimbatore’s Growth Corridor
          </h2>

          <p className="mt-3 max-w-[840px] text-[10px] font-medium leading-[1.5] tracking-[-0.02em] sm:text-[11px]">
            Kalamangala is located in a fast-developing residential belt,
            offering quick access to key roads, schools, offices, transport
            points, and essential services. This makes it ideal for both
            peaceful living and future land appreciation.
          </p>
        </section>

        <section className="km-reveal mt-11 max-w-[780px]">
          <h2 className="text-[18px] font-black leading-[0.95] tracking-[-0.06em] sm:text-[23px]">
            A Premium Gated Community in Tamil Nadu with World-Class
            <br className="hidden sm:block" />
            Amenities
          </h2>

          <p className="mt-3 max-w-[800px] text-[10px] font-medium leading-[1.5] tracking-[-0.02em] sm:text-[11px]">
            Living in a premium gated community means better security, improved
            planning, cleaner surroundings, and a comfortable lifestyle. Every
            element at Kalamangala is planned to support modern residential
            needs.
          </p>
        </section>

        {/* SPACER LIKE SCREENSHOT */}
        <div className="h-[270px] sm:h-[420px] md:h-[520px]" />

        <section className="km-reveal max-w-[900px]">
          <p className="text-[10px] font-medium leading-[1.45] tracking-[-0.02em] sm:text-[11px]">
            Kalamangala brings together location, infrastructure, nature, and
            community comfort, making it a reliable choice for people who want a
            calm home environment with access to everyday convenience.
          </p>
        </section>

        {/* WHY CHOOSE */}
        <section className="mt-12">
          <h2 className="km-reveal text-[20px] font-black tracking-[-0.06em] sm:text-[25px]">
            Why Choose Kalamangala?
          </h2>

          <div className="mt-4 flex flex-col gap-7">
            {whyCards.map((item, index) => (
              <article
                key={item.title}
                className={`km-reveal overflow-hidden rounded-[9px] ${
                  item.dark ? "text-white" : "text-black"
                }`}
                style={{
                  backgroundColor: item.dark ? DARK : SOFT,
                }}
              >
                <div
                  className={`grid min-h-[178px] grid-cols-1 md:grid-cols-2 ${
                    index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="h-[160px] overflow-hidden md:h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center px-7 py-7 md:px-10">
                    <p className="mb-1 text-[8px] font-bold uppercase tracking-[0.08em] opacity-60">
                      Landmark
                    </p>

                    <h3 className="text-[16px] font-black leading-[0.96] tracking-[-0.055em] sm:text-[20px]">
                      {item.title}
                      <br />
                      {item.time}
                    </h3>

                    <p
                      className={`mt-4 max-w-[360px] text-[10px] font-medium leading-[1.45] tracking-[-0.02em] sm:text-[11px] ${
                        item.dark ? "text-white/75" : "text-black/75"
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* TABLE */}
        <section className="km-reveal mx-auto mt-16 max-w-[740px] text-center">
          <h2 className="text-[18px] font-black tracking-[-0.06em] sm:text-[22px]">
            The Neighbourhood Advantage
          </h2>

          <div className="mt-5 overflow-hidden">
            <table className="w-full border-collapse text-[10px] sm:text-[12px]">
              <thead>
                <tr style={{ backgroundColor: DARK, color: "white" }}>
                  <th className="border border-[#f6f3df] px-4 py-3 text-center font-bold">
                    Landmark
                  </th>
                  <th className="border border-[#f6f3df] px-4 py-3 text-center font-bold">
                    Distance
                  </th>
                  <th className="border border-[#f6f3df] px-4 py-3 text-center font-bold">
                    Travel Time
                  </th>
                </tr>
              </thead>

              <tbody>
                {tableRows.map((row) => (
                  <tr key={row[0]} className="bg-[#eee9cf]">
                    {row.map((cell) => (
                      <td
                        key={cell}
                        className="border border-[#f6f3df] px-4 py-3 text-center font-medium"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* GROWTH */}
        <section className="mt-16">
          <div className="km-reveal">
            <h2 className="text-[19px] font-black leading-[1] tracking-[-0.06em] sm:text-[24px]">
              A Neighbourhood Designed for Growth
            </h2>

            <p className="mt-3 max-w-[860px] text-[10px] font-medium leading-[1.5] tracking-[-0.02em] sm:text-[11px]">
              Growth is built around access, planning, and future development.
              Kalamangala offers the kind of location advantage that supports
              both lifestyle and investment value.
            </p>
          </div>

          <div className="km-reveal mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {growthCards.slice(0, 3).map((card) => (
              <div
                key={card.title}
                className="relative h-[135px] overflow-hidden rounded-[8px]"
                style={{ backgroundColor: DARK }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-35"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-[13px] font-black tracking-[-0.04em]">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[9px] leading-[1.3] text-white/75">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="km-reveal mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {growthCards.slice(3).map((card) => (
              <div
                key={card.title}
                className="relative h-[145px] overflow-hidden rounded-[8px]"
                style={{ backgroundColor: DARK }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-35"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-[13px] font-black tracking-[-0.04em]">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[9px] leading-[1.3] text-white/75">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="km-reveal mt-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-[19px] font-black leading-[1] tracking-[-0.06em] sm:text-[24px]">
              Experience the Kalamangala
              <br />
              Advantage
            </h2>

            <p className="mt-4 text-[10px] font-medium leading-[1.5] tracking-[-0.02em] sm:text-[11px]">
              Kalamangala is designed for buyers who value peace, accessibility,
              and long-term growth. The plotted community brings together
              practical infrastructure and a comfortable lifestyle environment.
            </p>

            <div className="mt-4 space-y-2">
              {[
                "Premium residential plotted development",
                "Good location access",
                "Planned infrastructure",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[10px] font-bold"
                >
                  <Star size={12} style={{ color: PEACH }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="h-[210px] overflow-hidden rounded-[8px]">
            <img
              src={img13}
              alt="Kalamangala advantage"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* LIFESTYLE */}
        <section className="km-reveal mt-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="h-[210px] overflow-hidden rounded-[8px] md:order-1">
            <img
              src={img15}
              alt="Lifestyle benefits"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="md:order-2">
            <h2 className="text-[19px] font-black leading-[1] tracking-[-0.06em] sm:text-[24px]">
              Lifestyle Benefits You’ll Love
            </h2>

            <p className="mt-4 text-[10px] font-medium leading-[1.5] tracking-[-0.02em] sm:text-[11px]">
              Enjoy a calm residential environment with open spaces, easy
              movement, essential facilities, and a neighbourhood planned for
              everyday comfort.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {["Safe living", "Green spaces", "Good access", "Family comfort"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.04em]"
                  >
                    <Zap size={12} style={{ color: PEACH }} />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="km-reveal mt-20 overflow-hidden rounded-[9px] px-8 py-11 text-white sm:px-12 md:px-20"
          style={{ backgroundColor: DARK }}
        >
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h2
                className="text-[25px] font-black leading-[0.92] tracking-[-0.07em] sm:text-[34px]"
                style={{ color: PEACH }}
              >
                Live Connected.
                <br />
                Live Complete.
                <br />
                Live The Waterfront.
              </h2>

              <p className="mt-5 max-w-[430px] text-[10px] font-medium leading-[1.5] text-white/75 sm:text-[11px]">
                Secure your plot in a planned residential community designed
                for modern living, daily convenience, and lasting value.
              </p>
            </div>

            <div className="h-[220px] overflow-hidden rounded-[8px]">
              <img
                src={img14}
                alt="Live connected Kalamangala"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* CONTACT STYLE BOTTOM SECTION, NOT FOOTER */}
        {/* WATERFRONT TITLE SECTION */}
        <section className="km-reveal mt-20 mb-10 w-full overflow-hidden py-10 text-center">
          <h2 className="mx-auto max-w-[900px] text-[34px] font-black leading-[0.95] tracking-[-0.075em] sm:text-[48px] md:text-[66px]">
            The Waterfront by Kalamangala
          </h2>
        
          <p className="mx-auto mt-4 max-w-[900px] text-[18px] font-extrabold leading-[1.15] tracking-[-0.055em] sm:text-[25px] md:text-[34px]">
            Where every direction leads to convenience, and every view opens to calm.
          </p>
        </section>
      </div>
    </main>
  );
}