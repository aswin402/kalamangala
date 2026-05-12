import {
  ShieldCheck,
  FileCheck,
  Scale,
  BadgeDollarSign,
  UserCheck,
  Handshake,
  MessageCircle,
} from "lucide-react";

const strengths = [
  { text: "100% verified property listings", icon: ShieldCheck },
  { text: "Government-approved layouts", icon: FileCheck },
  { text: "Clear documentation & legal assistance", icon: Scale },
  { text: "Ethical pricing — no hidden costs", icon: BadgeDollarSign },
  { text: "Personalized property consultation", icon: UserCheck },
  { text: "Strong relationships with buyers, builders & developers", icon: Handshake },
  { text: "Transparent communication at every stage", icon: MessageCircle },
];

export function WhyKalamangalaSection() {
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
        Why Kalamangala Is the Top Property & Real Estate Firm in Karur
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
        Built on Trust, Local Expertise & Professional Excellence
      </h3>

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
        For years, Kalamangala has been recognized as a reliable and
        performance-driven real estate partner across Karur and surrounding
        regions. Our strengths include:
      </p>

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
        {strengths.map((item) => {
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
          mt-[32px]
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
        We don't just help clients find property — we help them make the right
        real estate decisions.
      </p>
    </section>
  );
}
