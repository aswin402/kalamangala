import {
  Cpu,
  Route,
  Users,
  Building2,
  TrendingUp,
  Home,
} from "lucide-react";

const hotspotReasons = [
  { text: "Expanding IT, industrial & business sectors", icon: Cpu },
  { text: "Improved road & transport infrastructure", icon: Route },
  { text: "Increased migration of skilled professionals", icon: Users },
  { text: "Demand for organized residential communities", icon: Building2 },
  { text: "Stable property appreciation rate", icon: TrendingUp },
  { text: "Rising preference for villa lifestyle & plotted development", icon: Home },
];

export function WhyTiruppurSection() {
  return (
    <section
      className="
        mx-auto
        mt-[62px]
        w-full
        max-w-[1500px]
        px-5
        md:mt-[82px]
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
        Why Tiruppur Is the Next Residential Hotspot
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
        A City Growing Beyond Textiles & Manufacturing
      </h3>

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
        Once known primarily as a textile hub, Tiruppur is now evolving into a
        thriving residential ecosystem, driven by:
      </p>

      <div
        className="
          mt-[32px]
          grid
          grid-cols-1
          gap-x-[20px]
          gap-y-[16px]
          sm:grid-cols-2
          md:mt-[38px]
          lg:grid-cols-3
        "
      >
        {hotspotReasons.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.text}
              className="
                km-reveal
                flex
                items-center
                gap-[20px]
                rounded-[18px]
                bg-table-row
                px-[28px]
                py-[28px]
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
          mt-[32px]
          max-w-[1200px]
          font-['Inter',sans-serif]
          text-[16px]
          font-medium
          italic
          leading-[1.5]
          tracking-[-0.025em]
          text-muted-foreground
          md:text-[18px]
        "
      >
        From peaceful outskirts to well-connected central neighbourhoods,
        Tiruppur offers lifestyle-focused living options for every buyer
        category — first-time homeowners, families, NRIs, retirees, and
        investors.
      </p>
    </section>
  );
}
