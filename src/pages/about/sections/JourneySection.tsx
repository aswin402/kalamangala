import img4 from "../../../assets/aboutpage/img4.avif";
import img5 from "../../../assets/aboutpage/img5.avif";
import img6 from "../../../assets/aboutpage/img6.avif";
import img7 from "../../../assets/aboutpage/img7.avif";

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

export const JourneySection = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 pb-[96px] pt-[72px] md:px-8 md:pb-[125px] md:pt-[96px]">
      {/* HEADER */}
      <div className="mb-[68px] text-center md:mb-[78px]">
        <p className="mb-[7px] text-[11px] font-[800] uppercase leading-none tracking-[-0.045em] text-foreground md:text-[12px]">
          ✺ Our Approach
        </p>

        <h2 className="text-[34px] font-[800] leading-[0.95] tracking-[-0.07em] text-foreground sm:text-[42px] md:text-[54px] lg:text-[58px]">
          This is our journey with you
        </h2>
      </div>

      {/* CARDS WRAPPER */}
      <div className="mx-auto w-full max-w-[1240px]">
        {journey.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isEvenBadge = item.num === "02" || item.num === "04";

          return (
            <div
              key={item.num}
              className={`relative flex w-full ${
                isLeft ? "justify-start" : "justify-end"
              } ${
                index === 0
                  ? ""
                  : "mt-[62px] md:mt-[34px] lg:mt-[38px] xl:mt-[42px]"
              }`}
            >
              <div className="relative w-full max-w-[960px] rounded-[8px] bg-[#f4f1e5] md:h-[392px]">
                {/* NUMBER BADGE */}
                <div
                  className={`absolute left-[20px] z-20 h-[106px] w-[106px] md:left-[42px] md:h-[128px] md:w-[128px] ${
                    isEvenBadge
                      ? "top-[-54px] md:top-[-84px]"
                      : "top-[-40px] md:top-[-60px]"
                  }`}
                >
                  {/* cream shadow */}
                  <div
                    className="absolute left-[10px] top-[10px] h-full w-full bg-[#f4f1e5]"
                    style={{
                      borderRadius: "8px",
                    }}
                  />

                  {/* green shape */}
                  <svg
                    viewBox="0 0 128 128"
                    className="absolute inset-0 h-full w-full overflow-visible"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 0H115C119.5 0 122.5 3.2 122.8 7.7L128 119.5C128.25 124.4 124.5 128 119.7 128H8.7C3.65 128 -0.25 123.65 0.35 118.65L7.25 7.55C7.75 3.1 10.55 0 13 0Z"
                      fill="#17392f"
                    />
                  </svg>

                  <span className="absolute inset-0 flex items-center justify-center text-[34px] font-[800] leading-none tracking-[-0.05em] text-primary md:text-[42px]">
                    {item.num}
                  </span>
                </div>

                <div className="grid h-full grid-cols-1 overflow-hidden rounded-[8px] md:grid-cols-[1fr_455px]">
                  {/* TEXT */}
                  <div className="flex min-h-[260px] flex-col justify-end px-[28px] pb-[34px] pt-[70px] md:min-h-0 md:px-[34px] md:pb-[68px] md:pt-[120px]">
                    <h3 className="max-w-[420px] text-[27px] font-[800] leading-[0.96] tracking-[-0.065em] text-foreground md:text-[31px] lg:text-[32px]">
                      {item.title}
                    </h3>

                    <p className="mt-[12px] max-w-[455px] text-[15px] font-[600] leading-[1.45] tracking-[-0.035em] text-foreground/70 md:mt-[14px] md:text-[17px]">
                      {item.desc}
                    </p>
                  </div>

                  {/* IMAGE */}
                  <div className="h-[260px] overflow-hidden rounded-[8px] md:m-[10px] md:h-[372px]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};