import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const introPoints = [
  "DTCP & RERA Approved Plots",
  "High Appreciation Locations",
  "Clear Title & Legal Support",
  "Ready-to-Build Infrastructure",
];

export function IntroSection() {
  return (
    <section className="km-reveal mx-auto max-w-[1500px] px-5 pb-14 pt-6 text-center md:pt-8 3xl:max-w-[1800px]">
      <h1
        className="
          mx-auto
          max-w-[1180px]
          text-center
          font-['Inter',sans-serif]
          text-[42px]
          font-bold
          leading-[0.92]
          tracking-[-0.065em]
          text-foreground
          sm:text-[58px]
          md:text-[78px]
          lg:text-[100px]
        "
      >
        Your Trusted Partner for
        <br />
        Premium Real Estate Layouts in Tamil Nadu
      </h1>

      <p
        className="
          mx-auto
          mt-[42px]
          w-full
          max-w-[1540px]
          text-center
          font-['Inter',sans-serif]
          text-[17px]
          font-semibold
          leading-[1.38]
          tracking-[-0.035em]
          text-foreground
          sm:text-[20px]
          md:text-[23px]
          lg:text-[25px]
        "
      >
        We are a trusted real estate development company specializing in
        DTCP-approved layouts and investment-ready plots across Tamil Nadu. Our
        mission is to create high-value, legally secure, and future-focused
        communities for your dream home or investment.
      </p>

      {/* Intro Points List */}
      <div
        className="
          mt-[38px]
          flex
          flex-wrap
          items-center
          justify-center
          gap-x-[24px]
          gap-y-[14px]
        "
      >
        {introPoints.map((point) => (
          <div
            key={point}
            className="flex items-center gap-[10px] text-foreground"
          >
            <CheckCircle2 size={20} className="text-primary" />
            <span
              className="
                font-['Inter',sans-serif]
                text-[16px]
                font-bold
                tracking-[-0.015em]
                md:text-[18px]
              "
            >
              {point}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-[42px] space-y-[24px]">
        <p
          className="
            mx-auto
            max-w-[1200px]
            font-['Inter',sans-serif]
            text-[16px]
            font-medium
            leading-[1.55]
            tracking-[-0.015em]
            text-muted-foreground
            md:text-[18px]
          "
        >
          If you are searching for real estate layouts in Tamil Nadu that offer
          high appreciation, secure investments, and complete legal clarity, you
          are in the right place. At Kalamangala, we specialize in providing
          DTCP-approved, RERA-registered, and strategically located real estate
          land and plots in Tamil Nadu, designed for both investors and home
          buyers. Our developments combine modern planning, clear documentation,
          and long-term value, ensuring peace of mind and profitable returns.
        </p>
        <p
          className="
            mx-auto
            max-w-[1200px]
            font-['Inter',sans-serif]
            text-[16px]
            font-medium
            leading-[1.55]
            tracking-[-0.015em]
            text-muted-foreground
            md:text-[18px]
          "
        >
          For over a decade, Kalamangala has been known for delivering
          trustworthy, transparent, and customer-focused real estate solutions.
          Our focus is on developing premium real estate plots in Erode,
          Coimbatore, Tirupur, Salem, and across emerging growth corridors of
          Tamil Nadu.
        </p>
      </div>

      <Link
        to="/contact"
        className="
          mt-[42px]
          inline-flex
          h-[44px]
          items-center
          justify-center
          rounded-full
          bg-card-green
          px-8
          font-['Inter',sans-serif]
          text-[15px]
          font-bold
          tracking-[-0.02em]
          text-white-text
          no-underline
          transition-all
          duration-300
          hover:scale-105
          hover:bg-primary
          hover:text-foreground
        "
      >
        Schedule a Site Visit
      </Link>
    </section>
  );
}
