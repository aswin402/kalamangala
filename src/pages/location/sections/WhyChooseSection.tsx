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
      className="
        mx-auto
        mt-[42px]
        w-full
        max-w-[1540px]
        px-5
        pb-[34px]
        md:mt-[58px]
      "
    >
      <h2
        className="
          km-reveal
          font-['Inter',sans-serif]
          text-[32px]
          font-bold
          leading-[1.05]
          tracking-[-0.045em]
          text-foreground
          sm:text-[38px]
          md:text-[46px]
        "
      >
        Why Choose The Waterfront, Erode
      </h2>

      <div
        className="
          mt-[32px]
          grid
          grid-cols-1
          gap-x-[20px]
          gap-y-[22px]
          md:mt-[44px]
          md:grid-cols-2
        "
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
                md:min-h-[260px]
                md:px-[34px]
                md:pt-[52px]
                md:pb-[38px]
              "
            >
              <div
                className="
                  mb-[20px]
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-lg
                  bg-white
                  text-foreground
                  shadow-[0_10px_20px_rgba(13,43,34,0.18)]
                  md:mb-[22px]
                "
              >
                <Icon size={30} strokeWidth={2} />
              </div>

              <h3
                className="
                  font-['Inter',sans-serif]
                  text-[34px]
                  font-bold
                  leading-[1.05]
                  tracking-[-0.055em]
                  text-foreground
                  sm:text-[40px]
                  md:text-[48px]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-[18px]
                  max-w-[720px]
                  font-['Inter',sans-serif]
                  text-[16px]
                  font-medium
                  leading-[1.45]
                  tracking-[-0.015em]
                  text-muted-foreground
                  sm:text-[18px]
                  md:text-[19px]
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