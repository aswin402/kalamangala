import {
  ShieldCheck,
  Cctv,
  Fence,
  Baby,
  Cable,
  Trees,
  Wrench,
  TrendingUp,
  Volume2,
  UserCheck,
  Users,
  Lock,
} from "lucide-react";

const communityAmenities = [
  { text: "Entrance arch with 24/7 security", icon: ShieldCheck },
  { text: "CCTV surveillance & controlled access", icon: Cctv },
  { text: "Compound walls & internal street lighting", icon: Fence },
  { text: "Children's parks, play areas & jogging tracks", icon: Baby },
  { text: "Underground cabling & stormwater systems", icon: Cable },
  { text: "Community gathering areas & landscaped gardens", icon: Trees },
  { text: "Organized maintenance services", icon: Wrench },
];

const whyChooseGated = [
  { text: "Higher rental & resale value", icon: TrendingUp },
  { text: "Peaceful traffic-free environment", icon: Volume2 },
  { text: "Safe for kids, elders & working individuals", icon: UserCheck },
  { text: "Strong social engagement & neighbour network", icon: Users },
  { text: "Low-risk property management for NRIs", icon: Lock },
];

export function GatedCommunitySection() {
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
        Gated Community Layouts in Tiruppur — Security, Comfort & Belonging
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
        Live Within a Community That Supports Your Lifestyle
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
          Tiruppur residents increasingly prefer gated communities for safety,
          community bonding, shared amenities, and hassle-free maintenance —
          making them one of the fastest-selling residential segments.
        </p>
        <p className="mt-4">
          Kalamangala partners with leading developers to offer premium{" "}
          <span className="font-bold">
            gated community layouts in prime and emerging locations
          </span>{" "}
          across Tiruppur.
        </p>
      </div>

      {/* Community Amenities */}
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
        Community Amenities May Include:
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
        {communityAmenities.map((item) => {
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

      {/* Why Choose Gated Communities */}
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
        Why Choose Gated Communities?
      </p>

      <div
        className="
          mt-[16px]
          grid
          grid-cols-1
          gap-[14px]
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {whyChooseGated.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.text}
              className="
                km-reveal
                group
                flex
                items-center
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
                  leading-[1.35]
                  tracking-[-0.015em]
                  text-foreground
                  sm:text-[18px]
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
        These communities are ideal for anyone who values convenience,
        lifestyle, privacy — and a premium residential identity.
      </p>
    </section>
  );
}
