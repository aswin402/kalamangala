import {
  Lightbulb,
  Leaf,
  BadgeDollarSign,
  Users,
  TrendingUp,
} from "lucide-react";

const differentiators = [
  { text: "Innovative Designs: Modern architecture tailored to your lifestyle.", icon: Lightbulb },
  { text: "Sustainable Construction: Eco-friendly materials and energy-efficient designs.", icon: Leaf },
  { text: "Transparent Pricing: No hidden charges, no surprises.", icon: BadgeDollarSign },
  { text: "Experienced Team: Experts with decades of combined industry knowledge.", icon: Users },
  { text: "High Appreciation Projects: Our locations are chosen for future growth potential.", icon: TrendingUp },
];

export function WhyWeLeadSection() {
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
        Why Kalamangala Leads Among Construction Companies in Erode
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
        Erode is rapidly expanding, and with this growth comes the need for
        reliable builders who understand the city's real estate potential.
        Kalamangala stands out because we're not just contractors—we're partners
        in creating your dream property.
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
        Key Differentiators
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
        {differentiators.map((item) => {
          const Icon = item.icon;
          const [title, desc] = item.text.split(": ");
          return (
            <article
              key={title}
              className="
                km-reveal
                group
                flex
                items-start
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

              <div>
                <p
                  className="
                    font-['Inter',sans-serif]
                    text-[17px]
                    font-bold
                    leading-[1.35]
                    tracking-[-0.015em]
                    text-foreground
                    sm:text-[18px]
                  "
                >
                  {title}
                </p>
                {desc && (
                  <p
                    className="
                      mt-[6px]
                      font-['Inter',sans-serif]
                      text-[15px]
                      font-medium
                      leading-[1.45]
                      text-muted-foreground
                    "
                  >
                    {desc}
                  </p>
                )}
              </div>
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
        This combination positions Kalamangala as the top choice for those
        searching for construction companies in Erode or investing in real
        estate layouts in Erode.
      </p>
    </section>
  );
}
