import {
  MapPin,
  LayoutGrid,
  Building2,
  ArrowLeftRight,
  FileCheck,
  Landmark,
  BarChart3,
} from "lucide-react";

const services = [
  { text: "Residential plot sales", icon: MapPin },
  { text: "House layout planning & assistance", icon: LayoutGrid },
  { text: "Gated community project marketing", icon: Building2 },
  { text: "Property buying & selling support", icon: ArrowLeftRight },
  { text: "Legal & documentation guidance", icon: FileCheck },
  { text: "Home loan coordination", icon: Landmark },
  { text: "Market research & investment consulting", icon: BarChart3 },
];

export function OurServicesSection() {
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
        Our Real Estate Services
      </h2>

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
        {services.map((item) => {
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
        With Kalamangala, you not only find property — you secure clarity,
        convenience, and confidence.
      </p>
    </section>
  );
}
