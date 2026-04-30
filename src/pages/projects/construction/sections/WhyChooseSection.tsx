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
        className="km-reveal font-['Inter',sans-serif] text-[20px] font-[900] leading-none tracking-[-0.02em] text-foreground md:text-[25px]"
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
                 bg-table-row
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
                  text-[var(--projects-whychoosesection-text-4)]
                  shadow-[0_10px_20px_rgba(13,43,34,0.18)]
                "
              >
                <Icon size={30} strokeWidth={2} />
              </div>

              <h3
                className="
                  font-['Inter',sans-serif]
                  text-[16px]
                  font-[900]
                  leading-[0.96]
                  tracking-[-0.02em]
                  text-foreground
                  md:text-[25px]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-[20px]
                  max-w-[650px]
                  font-['Inter',sans-serif]
                  text-[10px]
                  font-[500]
                  leading-[1.45]
                  tracking-[-0.035em]
                  text-[var(--projects-whychoosesection-text-3)]
                  md:text-[11px]
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