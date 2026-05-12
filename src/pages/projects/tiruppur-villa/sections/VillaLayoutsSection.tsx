import {
  Maximize2,
  Compass,
  Wind,
  Trees,
  Droplets,
  FileCheck,
  Users,
  Globe,
  TrendingUp,
  Home,
} from "lucide-react";

const villaFeatures = [
  { text: "Spacious road-facing plot dimensions", icon: Maximize2 },
  { text: "Vastu-considered orientations & structural possibilities", icon: Compass },
  { text: "Ample side setbacks for ventilation", icon: Wind },
  { text: "Green surroundings & privacy advantage", icon: Trees },
  { text: "Reliable water, drainage & electrical access", icon: Droplets },
  { text: "Clear boundaries & approved documentation", icon: FileCheck },
];

const idealFor = [
  { text: "Families upgrading from apartments", icon: Users },
  { text: "NRIs planning retirement or rental villas", icon: Globe },
  { text: "Investors targeting high-end residential demand", icon: TrendingUp },
  { text: "Buyers seeking long-term appreciation", icon: Home },
];

export function VillaLayoutsSection() {
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
        Explore Villa Layouts in Tiruppur — Designed for Lifestyle & Elegance
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
        Build a Home That Reflects You
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
        Villa buyers today expect more than just land — they want flexibility,
        privacy, design freedom, and a premium neighbourhood. Kalamangala offers
        curated{" "}
        <span className="font-bold">villa layouts in Tiruppur</span> that
        balance architectural aesthetics, usability, and long-term space
        planning.
      </p>

      {/* Villa Layout Features */}
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
        Villa Layout Features
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
        {villaFeatures.map((item) => {
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
        Whether you envision a duplex, contemporary single-floor villa,
        courtyard home, or multi-generational residence, these layouts empower
        you to create a personalized living experience.
      </p>

      {/* Ideal For */}
      <p
        className="
          km-reveal
          mt-[36px]
          font-['Inter',sans-serif]
          text-[16px]
          font-bold
          uppercase
          tracking-[0.04em]
          text-primary
          md:text-[17px]
        "
      >
        Ideal for:
      </p>

      <div
        className="
          mt-[16px]
          grid
          grid-cols-1
          gap-[14px]
          sm:grid-cols-2
        "
      >
        {idealFor.map((item) => {
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
          mt-[24px]
          font-['Inter',sans-serif]
          text-[17px]
          font-semibold
          italic
          leading-[1.5]
          tracking-[-0.025em]
          text-muted-foreground
          md:text-[19px]
        "
      >
        With Kalamangala, your villa journey begins on the right blueprint.
      </p>
    </section>
  );
}
