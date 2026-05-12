import {
  ShieldCheck,
  BadgeDollarSign,
  UserCheck,
  Search,
  FileCheck,
  HeartHandshake,
} from "lucide-react";
import img8 from "../../../../assets/construction-company/img8.webp";

const setUsApart = [
  { text: "Verified, handpicked properties — no misleading claims", icon: ShieldCheck },
  { text: "Transparent pricing & clear communication", icon: BadgeDollarSign },
  { text: "End-to-end buyer support — from site visits to registration", icon: UserCheck },
  { text: "In-depth location & market research", icon: Search },
  { text: "Legal documentation and loan assistance", icon: FileCheck },
  { text: "Customer-first service approach", icon: HeartHandshake },
];

export function WhyChooseKalamangalaSection() {
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
        Why Choose Kalamangala for Real Estate in Tiruppur
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
        Your Trustworthy Property Partner
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
        Kalamangala isn't just a listing platform — we are a guided real estate
        journey built on integrity, expertise, and personalization.
      </p>

      {/* Side by side: list + image */}
      <div
        className="
          mt-[40px]
          grid
          grid-cols-1
          items-center
          gap-[40px]
          md:mt-[52px]
          md:grid-cols-[1fr_0.9fr]
          lg:gap-[58px]
        "
      >
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
            What Sets Us Apart:
          </p>

          <div className="mt-[20px] space-y-[14px]">
            {setUsApart.map((item) => {
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

          <p
            className="
              km-reveal
              mt-[24px]
              font-['Inter',sans-serif]
              text-[17px]
              font-semibold
              italic
              leading-[1.5]
              text-muted-foreground
              md:text-[19px]
            "
          >
            Our goal isn't just to sell property — it's to help you choose
            confidently.
          </p>
        </div>

        {/* Image */}
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
            src={img8}
            alt="Kalamangala real estate in Tiruppur"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
