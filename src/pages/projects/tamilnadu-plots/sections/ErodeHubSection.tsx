import {
  Factory,
  MapPin,
  GraduationCap,
  Home,
  BadgeIndianRupee,
  TrendingUp,
  Volume2,
  Construction,
} from "lucide-react";

const hotspotReasons = [
  { text: "Robust textile and agricultural industries", icon: Factory },
  { text: "Proximity to Coimbatore and Salem", icon: MapPin },
  { text: "Expanding educational and medical institutions", icon: GraduationCap },
  { text: "Growing demand for residential neighborhoods", icon: Home },
];

const whyChooseErode = [
  { text: "Affordable land rates compared to other major cities", icon: BadgeIndianRupee },
  { text: "Exceptional appreciation in industrial zones", icon: TrendingUp },
  { text: "Peaceful living environment with urban comfort", icon: Volume2 },
  { text: "Upcoming infrastructure projects (bypass roads, commercial centers, etc.)", icon: Construction },
];

export function ErodeHubSection() {
  return (
    <section
      className="
        mx-auto
        mt-[72px]
        w-full
        max-w-[1500px]
        px-5
        md:mt-[96px]
        3xl:max-w-[1800px]
      "
    >
      <h2
        className="
          km-reveal
          font-['Inter',sans-serif]
          text-[34px]
          font-bold
          leading-[0.98]
          tracking-[-0.07em]
          text-foreground
          sm:text-[42px]
          md:text-[50px]
          lg:text-[52px]
        "
      >
        Real Estate Plots in Erode – The Fastest Growing Investment Hub
      </h2>

      <p
        className="
          km-reveal
          mt-[22px]
          max-w-[1300px]
          font-['Inter',sans-serif]
          text-[17px]
          font-medium
          leading-[1.45]
          tracking-[-0.03em]
          text-foreground
          sm:text-[19px]
          md:text-[21px]
        "
      >
        Erode is emerging as a major real estate hotspot due to its:
      </p>

      <div
        className="
          mt-[20px]
          grid
          grid-cols-1
          gap-[14px]
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {hotspotReasons.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.text}
              className="
                km-reveal
                flex
                items-center
                gap-[16px]
                rounded-[14px]
                bg-table-row
                px-[22px]
                py-[18px]
                md:px-[26px]
                md:py-[22px]
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-white
                  text-foreground
                  shadow-[0_6px_16px_rgba(13,43,34,0.12)]
                "
              >
                <Icon size={20} strokeWidth={2} />
              </div>
              <p
                className="
                  font-['Inter',sans-serif]
                  text-[16px]
                  font-semibold
                  leading-[1.35]
                  text-foreground
                  md:text-[17px]
                "
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>

      <p
        className="
          km-reveal
          mt-[28px]
          max-w-[1300px]
          font-['Inter',sans-serif]
          text-[17px]
          font-medium
          leading-[1.45]
          tracking-[-0.03em]
          text-foreground
          sm:text-[19px]
          md:text-[21px]
        "
      >
        Kalamangala offers beautifully planned real estate plots in Erode located near top schools, colleges, highways, and commercial hubs.
      </p>

      {/* Why Choose Erode */}
      <p
        className="
          km-reveal
          mt-[42px]
          font-['Inter',sans-serif]
          text-[16px]
          font-bold
          uppercase
          tracking-[0.04em]
          text-primary
          md:text-[17px]
        "
      >
        Why Choose Erode for Investing?
      </p>

      <div
        className="
          mt-[20px]
          grid
          grid-cols-1
          gap-[16px]
          sm:grid-cols-2
        "
      >
        {whyChooseErode.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.text}
              className="
                km-reveal
                group
                flex
                items-center
                gap-[20px]
                rounded-[18px]
                border
                border-border
                bg-card
                px-[28px]
                py-[28px]
                transition-all
                duration-500
                hover:border-primary/40
                hover:shadow-[0_8px_30px_rgba(243,172,133,0.12)]
                md:px-[34px]
                md:py-[34px]
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-card-green
                  text-primary
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              >
                <Icon size={28} strokeWidth={2} />
              </div>

              <p
                className="
                  font-['Inter',sans-serif]
                  text-[17px]
                  font-semibold
                  leading-[1.4]
                  tracking-[-0.015em]
                  text-foreground
                  sm:text-[18px]
                "
              >
                {item.text}
              </p>
            </article>
          );
        })}
      </div>

      <p
        className="
          km-reveal
          mt-[28px]
          max-w-[1200px]
          font-['Inter',sans-serif]
          text-[16px]
          font-medium
          italic
          leading-[1.55]
          tracking-[-0.025em]
          text-muted-foreground
          md:text-[18px]
        "
      >
        If you want a location that guarantees both lifestyle and value, Erode is one of the best choices.
      </p>
    </section>
  );
}
