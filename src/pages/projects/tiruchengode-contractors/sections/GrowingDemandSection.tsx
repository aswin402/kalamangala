import {
  MapPin,
  Clock,
  Shield,
  TrendingUp,
  BadgeDollarSign,
} from "lucide-react";

const demandReasons = [
  {
    text: "Daily needs and essential services are easily accessible",
    icon: MapPin,
  },
  {
    text: "Travel time to work, school, hospitals, and markets is shorter",
    icon: Clock,
  },
  {
    text: "Infrastructure and safety standards are stronger",
    icon: Shield,
  },
  {
    text: "Property appreciation remains consistent",
    icon: TrendingUp,
  },
  {
    text: "Higher resale value compared to outskirts",
    icon: BadgeDollarSign,
  },
];

export function GrowingDemandSection() {
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
        The Growing Demand for Tiruchengode Real Estate
      </h2>

      <div
        className="
          km-reveal
          mt-[26px]
          max-w-[1455px]
          font-['Inter',sans-serif]
          text-[17px]
          font-medium
          leading-[1.38]
          tracking-[-0.035em]
          text-foreground
          sm:mt-[30px]
          sm:text-[20px]
          md:text-[22px]
          lg:text-[23px]
        "
      >
        <p>
          Tiruchengode is strategically positioned between some of Tamil Nadu's
          major cities — including Salem, Namakkal, Karur and Erode — making it
          an ideal residential and commercial hub. Improved transport networks,
          highways, educational institutions, and shopping developments have
          increased the desirability of owning land here.
        </p>

        <p className="mt-6 font-bold">
          More homebuyers now prefer plots near town in Tiruchengode because:
        </p>
      </div>

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
        {demandReasons.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.text}
              className="
                km-reveal
                flex
                items-start
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
        The town offers the perfect blend of peaceful living, urban convenience,
        and steady growth — making it one of Tamil Nadu's most promising real
        estate locations.
      </p>
    </section>
  );
}
