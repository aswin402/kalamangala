import { Baby, CloudRain, Droplets, Navigation, Shield, TreePine } from "lucide-react";

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
    <section className="km-reveal relative w-full overflow-hidden bg-[#fbfbef] font-['Inter',sans-serif] text-[#0d2b22]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.42]"
        style={{
          backgroundImage: `
            linear-gradient(30deg, transparent 24%, rgba(13,43,34,0.105) 25%, rgba(13,43,34,0.105) 26%, transparent 27%, transparent 74%, rgba(13,43,34,0.105) 75%, rgba(13,43,34,0.105) 76%, transparent 77%),
            linear-gradient(150deg, transparent 24%, rgba(13,43,34,0.105) 25%, rgba(13,43,34,0.105) 26%, transparent 27%, transparent 74%, rgba(13,43,34,0.105) 75%, rgba(13,43,34,0.105) 76%, transparent 77%)
          `,
          backgroundSize: "42px 72px",
          backgroundPosition: "0 0",
        }}
      />

      <div className="relative mx-auto max-w-[1680px] px-[24px] pb-[56px] pt-[12px] md:px-[120px]">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {amenityCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="min-h-[320px] rounded-[18px] bg-[#dedbca] px-[30px] pb-[36px] pt-[44px] md:min-h-[400px] md:px-[34px] md:pb-[44px] md:pt-[54px]"
              >
                <div className="mb-[24px] flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-[#e8ebed] text-[#5c5f65] shadow-[0_3px_8px_rgba(0,0,0,0.16)]">
                  <Icon size={30} strokeWidth={1.75} />
                </div>

                <h3 className="max-w-[650px] text-[34px] font-[900] leading-[1.1] tracking-[-0.06em] md:text-[62px]">
                  {card.title}
                </h3>

                <p className="mt-[16px] max-w-[760px] text-[16px] font-[500] leading-[1.33] tracking-[-0.03em] text-[#2a4a42] md:text-[24px]">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-[32px] max-w-[1640px] text-center text-[24px] font-[900] leading-[1.15] tracking-[-0.06em] md:text-[51px]">
          Every feature at Kalamangala has been thoughtfully integrated to ensure
          residents enjoy both comfort and long-term sustainability.
        </p>
      </div>
    </section>
  );
}
