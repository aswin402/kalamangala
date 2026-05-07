import {
  Baby,
  CloudRain,
  Droplets,
  Navigation,
  Shield,
  TreePine,
} from "lucide-react";

const amenityCards = [
  {
    title: "Secured Entrance & 24/7 Surveillance",
    description:
      "Enjoy peace of mind with advanced security systems and trained personnel ensuring complete safety for residents.",
    icon: Shield,
  },
  {
    title: "Wide, Paved Roads & Street Lighting",
    description:
      "Well-planned roads and lighting for smooth navigation and enhanced night-time visibility",
    icon: Navigation,
  },
  {
    title: "Abundant Green Spaces",
    description:
      "Landscaped gardens and parks that create a serene atmosphere and promote a healthy lifestyle.",
    icon: TreePine,
  },
  {
    title: "Water & Drainage Facilities",
    description:
      "Efficiently planned infrastructure ensuring uninterrupted water supply and waste management.",
    icon: Droplets,
  },
  {
    title: "Children's Play Area & Recreational Zones",
    description: "Spaces for leisure, sports, and community bonding.",
    icon: Baby,
  },
  {
    title: "Rainwater Harvesting & Eco-Friendly Initiatives",
    description:
      "Sustainable living practices that care for both you and the environment.",
    icon: CloudRain,
  },
];

export function PremiumAmenitiesCardsSection() {
  return (
    <section className="km-reveal relative w-full overflow-hidden px-5 text-[#0d2b22] sm:px-6">
      <div className="relative mx-auto w-full max-w-[1480px] 3xl:max-w-[1800px] px-5 xl:px-0 pb-[56px] pt-[12px]">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {amenityCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="
                  flex
                  min-h-[260px]
                  flex-col
                  items-start
                  justify-start
                  rounded-[18px]
                  bg-[#efeedc]
                  px-[30px]
                  pb-[30px]
                  pt-[38px]
                  md:min-h-[300px]
                  md:px-[32px]
                  md:pb-[34px]
                  md:pt-[44px]
                  lg:min-h-[320px]
                  lg:px-[34px]
                  lg:pb-[36px]
                  lg:pt-[48px]
                "
              >
                <div
                  className="
                    mb-[22px]
                    flex
                    h-[48px]
                    w-[48px]
                    items-center
                    justify-center
                    rounded-[9px]
                    bg-white/80
                    text-[#243a35]
                    shadow-[0_3px_8px_rgba(0,0,0,0.16)]
                    md:h-[50px]
                    md:w-[50px]
                  "
                >
                  <Icon size={30} strokeWidth={1.75} />
                </div>

                <h3
                  className="
                    max-w-[650px]
                    text-left
                    font-['Inter',sans-serif]
                    text-[32px]
                    font-bold
                    leading-[1.08]
                    tracking-[-0.07em]
                    text-[#0d2b22]
                    sm:text-[38px]
                    md:text-[42px]
                    lg:text-[48px]
                  "
                >
                  {card.title}
                </h3>

                <p
                  className="
                    mt-[18px]
                    max-w-[760px]
                    text-left
                    font-['Inter',sans-serif]
                    text-[18px]
                    font-medium
                    leading-[1.25]
                    tracking-[-0.035em]
                    text-[#2f4842]
                    md:text-[20px]
                  "
                >
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>

        <p
  className="
    mx-auto
    w-full
    max-w-none
    px-[30px]
    text-center
    font-['Inter',sans-serif]
    text-[15px]
    font-[700]
    leading-[1.35]
    tracking-[-0.035em]
    text-[#082a25]
    sm:text-[17px]
    md:text-[19px]
    lg:text-[20px]
    xl:text-[21px]
    2xl:text-[22px]
  "
>
  Every feature at Kalamangala has been thoughtfully integrated to ensure
  residents enjoy both comfort and long-term sustainability.
</p>
      </div>
    </section>
  );
}