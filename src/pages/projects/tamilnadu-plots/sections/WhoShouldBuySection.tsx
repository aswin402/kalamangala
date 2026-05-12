import {
  Home,
  TrendingUp,
  Briefcase,
  Trees,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Audience {
  title: string;
  desc: string;
  icon: LucideIcon;
}

const audiences: Audience[] = [
  {
    title: "Home Buyers",
    desc: "Build a comfortable and peaceful home in a well-planned community with excellent connectivity.",
    icon: Home,
  },
  {
    title: "Investors",
    desc: "Buy at early-stage development and enjoy high appreciation within a short period.",
    icon: TrendingUp,
  },
  {
    title: "Business Owners",
    desc: "Invest in plots suitable for warehouses, small industries, and commercial buildings.",
    icon: Briefcase,
  },
  {
    title: "Nature Lovers",
    desc: "Choose farm plots or green layouts near scenic areas for weekend homes or retirement living.",
    icon: Trees,
  },
];

export function WhoShouldBuySection() {
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
        Who Should Buy Our Plots?
      </h2>

      <p
        className="
          km-reveal
          mt-[22px]
          max-w-[1200px]
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
        Our real estate land and plots in Tamil Nadu are ideal for:
      </p>

      <div
        className="
          mt-[32px]
          grid
          grid-cols-1
          gap-[20px]
          sm:grid-cols-2
          md:mt-[40px]
        "
      >
        {audiences.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="
                km-reveal
                group
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
                  mb-[18px]
                  flex
                  h-14
                  w-14
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

              <h3
                className="
                  font-['Inter',sans-serif]
                  text-[24px]
                  font-bold
                  leading-[1.1]
                  tracking-[-0.04em]
                  text-foreground
                  sm:text-[26px]
                  md:text-[28px]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-[12px]
                  font-['Inter',sans-serif]
                  text-[15px]
                  font-medium
                  leading-[1.55]
                  tracking-[-0.015em]
                  text-muted-foreground
                  sm:text-[16px]
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
