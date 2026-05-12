import {
  FileCheck,
  School,
  Route,
  Droplets,
  Home,
  TrendingUp,
} from "lucide-react";

const plotFeatures = [
  { text: "Government-approved & RERA-compliant", icon: FileCheck },
  { text: "Located near schools, markets & hospitals", icon: School },
  { text: "Proper road width & street planning", icon: Route },
  { text: "Excellent groundwater & utility readiness", icon: Droplets },
  { text: "Suitable for self-use, rental or resale", icon: Home },
  { text: "High appreciation in developing corridors", icon: TrendingUp },
];

export function PremiumPlotsSection() {
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
        Premium Housing Plots in Tiruppur — Secure Your Future Today
      </h2>

      <h3
        className="
          km-reveal
          mt-[18px]
          font-['Inter',sans-serif]
          text-[22px]
          font-bold
          leading-[1.1]
          tracking-[-0.04em]
          text-muted-foreground
          sm:text-[26px]
          md:text-[30px]
        "
      >
        Smart Land Investments Backed by Market Insight
      </h3>

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
        Premium plotted developments continue to be Tiruppur's most stable,
        flexible, and rewarding real estate investment option. Kalamangala
        offers verified, legally compliant, and strategically located housing
        plots with strong growth potential.
      </p>

      <p
        className="
          km-reveal
          mt-[28px]
          font-['Inter',sans-serif]
          text-[16px]
          font-bold
          uppercase
          tracking-[0.04em]
          text-primary
          md:text-[17px]
        "
      >
        What Makes Our Premium Plots Exceptional?
      </p>

      <div
        className="
          mt-[20px]
          grid
          grid-cols-1
          gap-[16px]
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {plotFeatures.map((item) => {
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
                bg-table-row
                px-[28px]
                py-[28px]
                transition-all
                duration-500
                hover:shadow-[0_6px_24px_rgba(13,43,34,0.10)]
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
                  bg-white
                  text-foreground
                  shadow-[0_10px_20px_rgba(13,43,34,0.18)]
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
                  leading-[1.35]
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
        Whether you're buying to build immediately or holding for appreciation,
        premium housing plots ensure financial peace of mind.
      </p>
    </section>
  );
}
