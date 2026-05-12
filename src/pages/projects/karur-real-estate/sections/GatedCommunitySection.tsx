import {
  Shield,
  Trees,
  Baby,
  Dumbbell,
  Trash2,
  Volume2,
  Users,
  TrendingUp,
  Globe,
  Building2,
} from "lucide-react";
import img10 from "../../../../assets/construction-company/img10.webp";

const communityBenefits = [
  { text: "24/7 security & controlled entry access", icon: Shield },
  { text: "Landscaped surroundings & walking tracks", icon: Trees },
  { text: "Children's play zones & community parks", icon: Baby },
  { text: "Clubhouse, fitness areas & recreational spaces", icon: Dumbbell },
  { text: "Organized maintenance & waste management", icon: Trash2 },
  { text: "Peaceful, low-traffic environment", icon: Volume2 },
];

const idealFor = [
  { text: "Families seeking safety & convenience", icon: Users },
  { text: "Investors looking for high appreciation", icon: TrendingUp },
  { text: "NRIs wanting secure long-term property management", icon: Globe },
  { text: "Buyers wanting ready-to-build spaces with amenities", icon: Building2 },
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
        Gated Community Real Estate in Karur — Elevate Your Lifestyle
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
        Live Secure, Connected & Amenity-Rich
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
        Modern Karur residents seek more than a house — they seek belonging,
        privacy, safety, and a well-balanced lifestyle. Kalamangala specializes
        in premium{" "}
        <span className="font-bold">
          gated community real estate in Karur
        </span>
        , designed for families, working professionals, NRIs, and investors.
      </p>

      {/* Image + benefits layout */}
      <div
        className="
          mt-[40px]
          grid
          grid-cols-1
          items-start
          gap-[40px]
          md:mt-[52px]
          md:grid-cols-[0.9fr_1fr]
          lg:gap-[58px]
        "
      >
        {/* Left — Image */}
        <div
          className="
            la-card
            h-[320px]
            overflow-hidden
            rounded-[18px]
            sm:h-[400px]
            md:h-[520px]
            lg:h-[580px]
          "
        >
          <img
            src={img10}
            alt="Gated community in Karur"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Right — Benefits + Ideal For */}
        <div>
          <p
            className="
              km-reveal
              font-['Inter',sans-serif]
              text-[16px]
              font-bold
              uppercase
              tracking-[0.04em]
              text-primary
              md:text-[17px]
            "
          >
            Gated Community Benefits
          </p>

          <div className="mt-[20px] space-y-[14px]">
            {communityBenefits.map((item) => {
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
                    py-[22px]
                    md:px-[34px]
                    md:py-[26px]
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/10
                      text-primary
                    "
                  >
                    <Icon size={26} strokeWidth={2} />
                  </div>
                  <p
                    className="
                      font-['Inter',sans-serif]
                      text-[16px]
                      font-semibold
                      leading-[1.35]
                      text-white-text
                      sm:text-[17px]
                    "
                  >
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Ideal For */}
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
            Ideal for:
          </p>

          <div className="mt-[16px] space-y-[12px]">
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
        </div>
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
          leading-[1.55]
          tracking-[-0.025em]
          text-muted-foreground
          md:text-[18px]
        "
      >
        With increasing demand and limited supply, gated communities in Karur
        are becoming one of the most smart and emotionally fulfilling investment
        choices.
      </p>
    </section>
  );
}
