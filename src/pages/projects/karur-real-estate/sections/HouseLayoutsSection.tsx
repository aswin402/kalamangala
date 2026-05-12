import {
  LayoutGrid,
  Building2,
  CornerDownRight,
  Compass,
  Store,
  Pencil,
  Maximize2,
  Sun,
  FileCheck,
  ArrowUpRight,
  School,
  Ruler,
} from "lucide-react";
import img8 from "../../../../assets/construction-company/img8.webp";

const layoutTypes = [
  { text: "Compact residential layouts for first-time buyers", icon: LayoutGrid },
  { text: "Premium villa-ready plots", icon: Building2 },
  { text: "Corner plots with extended frontage", icon: CornerDownRight },
  { text: "East, North & South facing Vastu-compliant designs", icon: Compass },
  { text: "Commercial-residential mixed layouts", icon: Store },
  { text: "Customizable house planning based on family size & budget", icon: Pencil },
];

const standOutPoints = [
  { text: "Efficient space utilization", icon: Maximize2 },
  { text: "Modern urban planning standards", icon: Ruler },
  { text: "Optimal ventilation & natural lighting", icon: Sun },
  { text: "Well-defined boundaries & documentation", icon: FileCheck },
  { text: "Future expansion possibilities", icon: ArrowUpRight },
  { text: "Connectivity to schools, hospitals & workplaces", icon: School },
];

export function HouseLayoutsSection() {
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
        Explore Smart, Future-Ready House Layouts in Karur
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
        Designed for Functionality, Lifestyle & Long-Term Value
      </h3>

      <div
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
        <p>
          Finding the perfect plot or house design is more than choosing square
          feet — it's about planning life, convenience, comfort, and appreciation
          potential. Kalamangala offers a wide range of{" "}
          <span className="font-bold">house layouts in Karur</span>, curated
          based on lifestyle needs, Vastu recommendations, infrastructure
          development, and resale value.
        </p>
      </div>

      {/* Available Layout Types */}
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
        Available Layout Types
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
        {layoutTypes.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.text}
              className="
                km-reveal
                group
                flex
                items-start
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
          max-w-[1300px]
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
        Every layout available through Kalamangala is evaluated for
        accessibility, road width, drainage, water source, electricity, and
        surrounding development — ensuring long-term sustainability.
      </p>

      {/* Why Our House Layouts Stand Out — side by side with image */}
      <div
        className="
          mt-[52px]
          grid
          grid-cols-1
          items-center
          gap-[40px]
          md:mt-[68px]
          md:grid-cols-[1fr_0.9fr]
          lg:gap-[58px]
        "
      >
        <div>
          <h3
            className="
              km-reveal
              font-['Inter',sans-serif]
              text-[28px]
              font-bold
              leading-[1.05]
              tracking-[-0.055em]
              text-foreground
              sm:text-[34px]
              md:text-[40px]
            "
          >
            Why Our House Layouts Stand Out
          </h3>

          <div className="mt-[24px] space-y-[14px]">
            {standOutPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className="
                    km-reveal
                    flex
                    items-center
                    gap-[16px]
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
                      bg-table-row
                      text-foreground
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
                      tracking-[-0.015em]
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
              mt-[24px]
              font-['Inter',sans-serif]
              text-[16px]
              font-medium
              italic
              leading-[1.55]
              text-muted-foreground
              md:text-[17px]
            "
          >
            Whether you're planning a compact 2BHK home or a luxurious
            multi-floor residence, Kalamangala ensures you start with the right
            foundation.
          </p>
        </div>

        {/* Image */}
        <div
          className="
            la-card
            h-[320px]
            overflow-hidden
            rounded-[18px]
            sm:h-[400px]
            md:h-[480px]
            lg:h-[520px]
          "
        >
          <img
            src={img8}
            alt="House layouts in Karur"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
