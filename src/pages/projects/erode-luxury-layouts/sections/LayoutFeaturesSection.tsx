import {
  MapPin,
  Scale,
  Cable,
  Trees,
  ShieldCheck,
  Hammer,
  Droplets,
} from "lucide-react";

const layoutFeatures = [
  { text: "Prime location within Erode district", icon: MapPin },
  { text: "Assured legal compliance", icon: Scale },
  { text: "Underground infrastructure", icon: Cable },
  { text: "Lush landscaping", icon: Trees },
  { text: "Security-enhanced layout", icon: ShieldCheck },
  { text: "Ready-to-build plots", icon: Hammer },
  { text: "Excellent water and utility provision", icon: Droplets },
];

export function LayoutFeaturesSection() {
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
        Luxury Residential Layouts in Erode – Designed for You
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
        Erode's real estate market is no longer just about owning a piece of land—it's about owning a lifestyle. Kalamangala's luxury residential layouts in Erode are created for those who desire more than a home. Our developments reflect a refined lifestyle, spacious living, and an environment enriched with natural beauty and future-forward design.
      </p>

      <p
        className="
          km-reveal
          mt-[32px]
          font-['Inter',sans-serif]
          text-[16px]
          font-bold
          uppercase
          tracking-[0.04em]
          text-primary
          md:text-[17px]
        "
      >
        Key Features of Our Luxury Layouts
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
        {layoutFeatures.map((item) => {
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
                bg-card-green
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
                  bg-white/10
                  text-primary
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
                  text-white-text
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
        These features make Kalamangala layouts ideal for both end-use and investment.
      </p>
    </section>
  );
}
