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
    <section className="mx-auto max-w-[1320px] px-4 pb-[86px] pt-[70px] md:pb-[120px] md:pt-[92px]">
      <div className="mb-[48px] text-center md:mb-[70px]">
        <p className="mb-[6px] text-[13px] font-bold uppercase leading-none tracking-[-0.04em] text-[#17392f]">
          ✺ Our Approach
        </p>

        <h2 className="text-[34px] font-semibold leading-[1] tracking-[-0.06em] text-[#17392f] md:text-[52px]">
          This is our journey with you
        </h2>
      </div>

      <div className="relative">
        {journey.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={item.num}
              className={`relative flex ${isLeft ? "justify-start" : "justify-end"} ${index === 0 ? "" : "md:-mt-[22px]"}`}
            >
              <div
                className={`relative grid h-auto w-full max-w-[1010px] grid-cols-1 items-center rounded-[8px] bg-[#f4f1e5] md:h-[405px] md:grid-cols-[1fr_500px] ${
                  isLeft ? "pl-[36px] pr-[0px]" : "pl-[36px] pr-[0px]"
                }`}
              >
                {/* NUMBER BADGE */}
                <div
                  className={`absolute top-[-36px] z-20 flex h-[78px] w-[78px] items-center justify-center rounded-[7px] bg-[#17392f] shadow-[8px_8px_0_#f4f1e5] md:top-[-58px] md:h-[118px] md:w-[118px] md:shadow-[12px_12px_0_#f4f1e5] ${
                    isLeft ? "left-[16px] md:left-[42px]" : "left-[16px] md:left-[38px]"
                  }`}
                >
                  <span className="text-[28px] font-semibold leading-none tracking-[-0.04em] text-[#f4a77f] md:text-[42px]">
                    {item.num}
                  </span>
                </div>

                {/* TEXT */}
                <div className="flex h-full flex-col justify-end px-4 pb-7 pt-[62px] md:px-0 md:pb-[72px] md:pt-[130px]">
                  <h3 className="max-w-[460px] text-[28px] font-semibold leading-[1] tracking-[-0.06em] text-[#17392f] md:text-[32px]">
                    {item.title}
                  </h3>

                  <p className="mt-[12px] max-w-[470px] text-[16px] font-medium leading-[1.45] tracking-[-0.03em] text-[#17392f]/70 md:mt-[18px] md:text-[18px]">
                    {item.desc}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="h-[260px] overflow-hidden rounded-[8px] md:h-[365px]">
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
    <section className="w-full px-4 pb-[86px] pt-[18px] md:px-[40px] md:pb-[150px] md:pt-[30px]">
      <div className="mx-auto flex min-h-[325px] w-full max-w-[1825px] flex-col items-center justify-center rounded-[18px] bg-[#17392f] px-5 py-10 text-center text-white md:px-[72px] md:py-[64px] lg:px-[110px] lg:py-[78px]">
        {/* TABS */}
        <div className="mb-[30px] inline-flex overflow-hidden rounded-[8px] border border-white/60 bg-transparent p-[1px] md:mb-[46px]">
          {(["mission", "vision"] as const).map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setTab(item)}
               className={`h-[44px] min-w-[94px] rounded-[7px] px-[18px] text-[16px] font-medium capitalize tracking-[-0.025em] transition md:h-[48px] md:min-w-[105px] md:px-[24px] md:text-[19px] ${
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
        <p className="mx-auto max-w-[1580px] text-[17px] font-semibold leading-[1.5] tracking-[-0.02em] text-white/80 md:text-[22px] lg:text-[26px] lg:leading-[1.25] lg:tracking-[-0.055em]">
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
