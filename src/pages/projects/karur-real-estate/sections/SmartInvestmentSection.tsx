import {
  Factory,
  Route,
  Building2,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

const investmentDrivers = [
  { text: "Growing textile & industrial economy", icon: Factory },
  { text: "Expanding road & highway infrastructure", icon: Route },
  { text: "Increasing residential & commercial demand", icon: Building2 },
  { text: "Educational & healthcare access", icon: GraduationCap },
  { text: "Rising land value and long-term appreciation", icon: TrendingUp },
];

export function SmartInvestmentSection() {
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
        Why Karur Is a Smart Real Estate Investment Destination
      </h2>

      <p
        className="
          km-reveal
          mt-[22px]
          max-w-[1100px]
          font-['Inter',sans-serif]
          text-[17px]
          font-semibold
          leading-[1.38]
          tracking-[-0.035em]
          text-foreground
          sm:text-[20px]
          md:text-[22px]
        "
      >
        Karur's real estate momentum is driven by:
      </p>

      <div
        className="
          mt-[28px]
          grid
          grid-cols-1
          gap-[16px]
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {investmentDrivers.map((item) => {
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
          mt-[32px]
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
        Whether buying for self-use or capital growth, Karur offers exceptional
        real estate opportunities — and Kalamangala helps you capture them.
      </p>
    </section>
  );
}
