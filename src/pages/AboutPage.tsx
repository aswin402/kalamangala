import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Play } from "lucide-react";

import img1 from "../assets/aboutpage/img1.avif";
import img2 from "../assets/aboutpage/img2.avif";
import img3 from "../assets/aboutpage/img3.avif";
import img4 from "../assets/aboutpage/img4.avif";
import img5 from "../assets/aboutpage/img5.avif";
import img6 from "../assets/aboutpage/img6.avif";
import img7 from "../assets/aboutpage/img7.avif";

const MARQUEE = "Innovation. Community. Quality. ";

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

export function AboutPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<"mission" | "vision">("mission");

  useEffect(() => {
    const tl = gsap.to(trackRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 95,
      repeat: -1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <main className="about-page min-h-screen overflow-hidden pt-[74px] text-[#172d24]">
      {/* MARQUEE */}
      <section className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-fit whitespace-nowrap will-change-transform"
        >
          {[0, 1].map((item) => (
            <h1
              key={item}
              className="pr-10 text-[clamp(64px,8.25vw,132px)] font-medium leading-none tracking-[-0.075em]"
            >
              {MARQUEE.repeat(4)}
            </h1>
          ))}
        </div>
      </section>

      {/* ABOUT DARK SECTION */}
      <section className="mx-auto mt-[98px] max-w-[1188px] rounded-[12px] bg-[#17392f] px-[76px] pb-[64px] pt-[66px] text-white">
        <div className="mb-[82px] grid grid-cols-[1.42fr_0.9fr] gap-[92px]">
          <div>
            <div className="mb-[18px] flex items-center gap-3">
              <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#f4a77f]">
                ✦ About Us
              </span>
              <div className="h-px flex-1 bg-white/35" />
            </div>

            <h2 className="max-w-[710px] text-[27px] font-medium leading-[1.08] tracking-[-0.045em]">
              Welcome to Kalamangala – Where Quality Meets Legacy.
            </h2>

            <p className="mt-[18px] max-w-[700px] text-[13px] font-medium leading-[1.42] tracking-[-0.035em] text-white">
              With over 33 years of expertise in construction, we craft premium
              living spaces designed to stand the test of time. Our projects
              blend superior infrastructure, modern amenities, and lush green
              landscapes to create thriving communities. At Kalamangala, we
              don&apos;t just build homes—we shape lifestyles, ensuring every
              detail enhances your comfort, convenience, and connection with
              nature.
            </p>
          </div>

          <div className="flex items-end pb-[8px]">
            <p className="max-w-[360px] text-[10px] font-medium leading-[1.35] tracking-[-0.035em] text-white">
              We seamlessly blend nature with modern living, designing
              communities with lush gardens and green spaces for a serene yet
              contemporary lifestyle.
            </p>
          </div>
        </div>

        <div className="grid min-h-[610px] grid-cols-[1.98fr_0.98fr_0.98fr] gap-[6px]">
          {/* LEFT LARGE IMAGE */}
          <div className="relative overflow-hidden rounded-[8px]">
            <img
              src={img1}
              alt="Kalamangala aerial community"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-[24px] pb-[26px] pt-[90px]">
              <p className="max-w-[500px] text-[11px] font-semibold leading-[1.28] tracking-[-0.04em] text-white">
                “With over 33 years in the construction industry, I&apos;ve
                learned that quality is everything — that&apos;s why I&apos;ve
                made it the top priority in every project at Kalamangala”
              </p>

              <div className="mt-[14px] flex items-center gap-[10px]">
                <div className="h-[30px] w-[30px] rounded-full bg-white/20" />
                <div>
                  <p className="text-[11px] font-semibold leading-none">
                    R.Krishnamurthy
                  </p>
                  <p className="mt-[4px] text-[8.5px] font-medium leading-none text-white/65">
                    Founder & Managing Director of Kalamangala
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE STACK */}
          <div className="grid grid-rows-[1fr_190px] gap-[6px]">
            <div className="relative overflow-hidden rounded-[8px]">
              <img
                src={img2}
                alt="Kalamangala green community"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-[18px] pb-[24px] pt-[80px]">
                <p className="text-[11px] font-semibold leading-[1.22] tracking-[-0.045em]">
                  “At Kalamangala, we don&apos;t just build spaces — we create
                  lasting legacies, where quality, innovation and expertise
                  blend together to redefine modern living.”
                </p>

                <div className="mt-[12px] flex items-center gap-[9px]">
                  <div className="h-[28px] w-[28px] rounded-full bg-white/20" />
                  <div>
                    <p className="text-[10px] font-semibold leading-none">
                      Raju S.V.
                    </p>
                    <p className="mt-[4px] text-[8px] font-medium leading-none text-white/65">
                      Managing Director of Kalamangala
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-[8px] bg-[#f4f1e5] text-[#17392f]">
              <h3 className="text-[56px] font-semibold leading-none tracking-[-0.06em]">
                33+
              </h3>
              <p className="mt-[10px] text-[10px] font-medium tracking-[-0.035em]">
                Years of Experience
              </p>
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="relative overflow-hidden rounded-[8px]">
            <img
              src={img3}
              alt="Kalamangala building at night"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <button className="absolute left-1/2 top-1/2 flex h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/55 backdrop-blur-[1px]">
              <span className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-white">
                <Play className="ml-[3px] h-[18px] w-[18px] fill-[#17392f] text-[#17392f]" />
              </span>
            </button>

            <p className="absolute bottom-[198px] left-1/2 w-[94px] -translate-x-1/2 text-center text-[10px] font-semibold leading-[1.15] tracking-[-0.04em] text-white">
              Learn more About Kalamangala
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section className="mx-auto max-w-[850px] px-4 pb-[56px] pt-[62px]">
        <div className="mb-[44px] text-center">
          <p className="mb-[4px] text-[8px] font-bold uppercase tracking-[-0.02em]">
            ✦ Our Approach
          </p>
          <h2 className="text-[30px] font-semibold leading-none tracking-[-0.065em]">
            This is our journey with you
          </h2>
        </div>

        <div className="space-y-[-8px]">
          {journey.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.num}
                className={`relative flex items-center ${
                  isEven ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`relative grid w-[610px] grid-cols-[1fr_280px] items-center gap-[44px] ${
                    !isEven ? "translate-x-[44px]" : "-translate-x-[44px]"
                  }`}
                >
                  <div className="relative h-[225px] bg-[#f2efe1] px-[26px] pb-[34px] pt-[104px]">
                    <div className="absolute left-[28px] top-[-38px] flex h-[70px] w-[70px] items-center justify-center rounded-[5px] bg-[#17392f] shadow-[6px_6px_0_rgba(23,57,47,0.08)]">
                      <span className="text-[24px] font-semibold tracking-[-0.06em] text-[#f4a77f]">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="text-[18px] font-semibold leading-[1.02] tracking-[-0.06em] text-[#17392f]">
                      {item.title}
                    </h3>
                    <p className="mt-[8px] max-w-[255px] text-[9.5px] font-medium leading-[1.35] tracking-[-0.045em] text-[#17392f]/70">
                      {item.desc}
                    </p>
                  </div>

                  <div className="h-[225px] overflow-hidden rounded-[3px]">
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

      {/* MISSION / VISION */}
      <section className="mx-auto max-w-[1142px] px-4 pb-[96px]">
        <div className="rounded-[12px] bg-[#17392f] px-[72px] py-[52px] text-center text-white">
          <div className="mb-[34px] inline-flex rounded-[6px] border border-white/45 p-[2px]">
            {(["mission", "vision"] as const).map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`h-[31px] min-w-[70px] rounded-[5px] px-[16px] text-[10px] font-medium capitalize transition ${
                  tab === item
                    ? "bg-[#f4a77f] text-[#17392f]"
                    : "text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <p className="mx-auto max-w-[960px] text-[14px] font-medium leading-[1.45] tracking-[-0.045em]">
            {tab === "mission"
              ? "At Kalamangala, we build premium, lasting developments with top-tier infrastructure, modern amenities, and eco-friendly designs. Focused on quality, innovation, and customer satisfaction, we create thriving, well-connected communities for a superior lifestyle."
              : "Our vision is to become the most trusted name in premium real estate development across Tamil Nadu — creating landmark communities that inspire generations, harmonise with nature, and set new benchmarks for quality, sustainability, and design excellence."}
          </p>
        </div>
      </section>
    </main>
  );
}