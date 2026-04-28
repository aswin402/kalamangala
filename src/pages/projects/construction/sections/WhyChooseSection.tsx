import { Navigation, TrendingUp, Leaf, MapPin } from "lucide-react";

const whyChoose = [
  {
    title: "Location Mastery",
    desc: "Close to everything, yet surrounded by peace",
    icon: MapPin,
  },
  {
    title: "Future Appreciation",
    desc: "Rising infrastructure and civic development promise long-term value.",
    icon: TrendingUp,
  },
  {
    title: "Convenient Living",
    desc: "Every major destination within a 15-minute radius",
    icon: Navigation,
  },
  {
    title: "Natural Harmony",
    desc: "River view, green spaces, and pollution-free surroundings.",
    icon: Leaf,
  },
];

export function WhyChooseSection() {
  return (
      <section
        className="mx-auto mt-[42px] w-full max-w-[1455px] px-5 pb-[34px] md:mt-[58px]"
      >
      <h2
        className="km-reveal font-['Inter',sans-serif] text-[32px] font-[900] leading-none tracking-[-0.06em] text-[#0d2b22] md:text-[50px]"
      >
        Why Choose The Waterfront, Erode
      </h2>

        <div
          className="mt-[32px] grid grid-cols-1 gap-x-[20px] gap-y-[22px] md:mt-[44px] md:grid-cols-2"
        >
        {whyChoose.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="
                km-reveal
                min-h-[220px]
                 rounded-[14px]
                 bg-[#f1efdf]
                 px-[24px]
                 pt-[40px]
                 pb-[30px]
                 md:min-h-[260px] md:px-[34px] md:pt-[52px] md:pb-[38px]
              "
            >
              <div
                className="
                  mb-[24px]
                  flex
                  h-[50px]
                  w-[50px]
                  items-center
                  justify-center
                  rounded-[8px]
                  bg-white
                  text-[#53585a]
                  shadow-[0_10px_20px_rgba(13,43,34,0.18)]
                "
              >
                <Icon size={30} strokeWidth={2} />
              </div>

              <h3
                className="
                  font-['Inter',sans-serif]
                  text-[28px]
                  font-[900]
                  leading-[0.95]
                  tracking-[-0.06em]
                  text-[#0d2b22]
                  md:text-[50px]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-[20px]
                  max-w-[650px]
                  font-['Inter',sans-serif]
                  text-[17px]
                  font-[500]
                  leading-[1.35]
                  tracking-[-0.035em]
                  text-[#183f38]
                  md:text-[20px]
                "
              >
                {item.desc}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}