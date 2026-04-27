import { useState } from "react";

import img4 from "../../assets/aboutpage/img4.avif";
import img5 from "../../assets/aboutpage/img5.avif";
import img6 from "../../assets/aboutpage/img6.avif";
import img7 from "../../assets/aboutpage/img7.avif";

import { MarqueeSection } from "./sections/MarqueeSection";
import { AboutDarkSection } from "./sections/AboutDarkSection";

const journey = [
  {
    num: "01",
    title: "housing plots in tamil nadu",
    desc: "Discover thoughtfully designed communities with premium infrastructure and modern amenities.",
    img: img4,
  },
  {
    num: "02",
    title: "luxury property developers",
    desc: "Select a space that fits your lifestyle, crafted with quality and innovation.",
    img: img5,
  },
  {
    num: "03",
    title: "Premium property developers",
    desc: "Watch your dream take shape with our expert construction and development.",
    img: img6,
  },
  {
    num: "04",
    title: "Custom home builders Tamil Nadu",
    desc: "Experience an upscale, nature-integrated living environment built to last for generations.",
    img: img7,
  },
];

const JourneySection = () => {
  return (
    <section className="mx-auto max-w-[1320px] px-4 pb-[120px] pt-[92px]">
      <div className="mb-[70px] text-center">
        <p className="mb-[6px] text-[13px] font-bold uppercase leading-none tracking-[-0.04em] text-[#17392f]">
          ✺ Our Approach
        </p>

        <h2 className="text-[52px] font-semibold leading-[0.95] tracking-[-0.075em] text-[#17392f]">
          This is our journey with you
        </h2>
      </div>

      <div className="relative">
        {journey.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={item.num}
              className={`relative flex ${
                isLeft ? "justify-start" : "justify-end"
              } ${index === 0 ? "" : "-mt-[22px]"}`}
            >
              <div
                className={`relative grid h-[405px] w-[1010px] grid-cols-[1fr_500px] items-center rounded-[8px] bg-[#f4f1e5] ${
                  isLeft ? "pl-[36px] pr-[0px]" : "pl-[36px] pr-[0px]"
                }`}
              >
                {/* NUMBER BADGE */}
                <div
                  className={`absolute top-[-58px] z-20 flex h-[118px] w-[118px] items-center justify-center rounded-[7px] bg-[#17392f] shadow-[12px_12px_0_#f4f1e5] ${
                    isLeft ? "left-[42px]" : "left-[38px]"
                  }`}
                >
                  <span className="text-[42px] font-semibold leading-none tracking-[-0.06em] text-[#f4a77f]">
                    {item.num}
                  </span>
                </div>

                {/* TEXT */}
                <div className="flex h-full flex-col justify-end pb-[72px] pt-[130px]">
                  <h3 className="max-w-[460px] text-[32px] font-semibold leading-[0.98] tracking-[-0.075em] text-[#17392f]">
                    {item.title}
                  </h3>

                  <p className="mt-[18px] max-w-[470px] text-[18px] font-medium leading-[1.38] tracking-[-0.045em] text-[#17392f]/70">
                    {item.desc}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="h-[365px] overflow-hidden rounded-[8px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
const MissionVisionSection = () => {
  const [tab, setTab] = useState<"mission" | "vision">("mission");

  return (
    <section className="w-full px-[40px] pb-[150px] pt-[30px]">
      <div className="mx-auto flex min-h-[325px] w-full max-w-[1825px] flex-col items-center justify-center rounded-[18px] bg-[#17392f] px-[110px] py-[78px] text-center text-white">
        {/* TABS */}
        <div className="mb-[46px] inline-flex overflow-hidden rounded-[8px] border border-white/60 bg-transparent p-[1px]">
          {(["mission", "vision"] as const).map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setTab(item)}
              className={`h-[48px] min-w-[105px] rounded-[7px] px-[24px] text-[19px] font-medium capitalize tracking-[-0.035em] transition ${
                tab === item
                  ? "bg-[#f4a77f] text-[#17392f]"
                  : "bg-transparent text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <p className="mx-auto max-w-[1580px] text-[26px] font-semibold leading-[1.25] tracking-[-0.055em] text-white/80">
          {tab === "mission"
            ? "At Kalamangala, we build premium, lasting developments with top-tier infrastructure, modern amenities, and eco-friendly designs. Focused on quality, innovation, and customer satisfaction, we create thriving, well-connected communities for a superior lifestyle."
            : "Our vision is to become the most trusted name in premium real estate development across Tamil Nadu — creating landmark communities that inspire generations, harmonise with nature, and set new benchmarks for quality, sustainability, and design excellence."}
        </p>
      </div>
    </section>
  );
};

export function AboutPage() {
  return (
    <main className="about-page min-h-screen overflow-hidden text-[#172d24]">
      <MarqueeSection />
      <AboutDarkSection />
      <JourneySection />
      <MissionVisionSection />
    </main>
  );
}

export default AboutPage;