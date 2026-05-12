import {
  Eye,
  Target,
  CheckCircle2,
} from "lucide-react";

const missionPoints = [
  "Deliver premium quality at affordable prices",
  "Build lasting relationships",
  "Maintain transparency in all services",
  "Enhance customer experience through innovation & integrity",
];

export function VisionMissionSection() {
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
      <div
        className="
          grid
          grid-cols-1
          gap-[20px]
          md:grid-cols-2
          md:gap-[32px]
        "
      >
        {/* Vision Card */}
        <article
          className="
            km-reveal
            rounded-[24px]
            bg-table-row
            px-[32px]
            py-[38px]
            md:px-[42px]
            md:py-[46px]
          "
        >
          <div
            className="
              mb-[20px]
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-white
              text-foreground
              shadow-[0_10px_24px_rgba(13,43,34,0.15)]
            "
          >
            <Eye size={32} strokeWidth={2} />
          </div>

          <h2
            className="
              font-['Inter',sans-serif]
              text-[28px]
              font-bold
              leading-[1.1]
              tracking-[-0.04em]
              text-foreground
              sm:text-[32px]
              md:text-[38px]
            "
          >
            Our Vision
          </h2>

          <p
            className="
              mt-[16px]
              font-['Inter',sans-serif]
              text-[16px]
              font-medium
              leading-[1.55]
              tracking-[-0.015em]
              text-muted-foreground
              sm:text-[17px]
              md:text-[19px]
            "
          >
            To be recognized as the most reliable real estate construction
            company in Erode, delivering sustainable communities and
            customer-driven developments.
          </p>
        </article>

        {/* Mission Card */}
        <article
          className="
            km-reveal
            rounded-[24px]
            bg-card-green
            px-[32px]
            py-[38px]
            md:px-[42px]
            md:py-[46px]
          "
        >
          <div
            className="
              mb-[20px]
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-white/10
              text-primary
            "
          >
            <Target size={32} strokeWidth={2} />
          </div>

          <h2
            className="
              font-['Inter',sans-serif]
              text-[28px]
              font-bold
              leading-[1.1]
              tracking-[-0.04em]
              text-white-text
              sm:text-[32px]
              md:text-[38px]
            "
          >
            Our Mission
          </h2>

          <div className="mt-[20px] space-y-[14px]">
            {missionPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-[14px] text-white-text"
              >
                <CheckCircle2 size={24} className="flex-shrink-0 text-primary" />
                <p
                  className="
                    font-['Inter',sans-serif]
                    text-[16px]
                    font-semibold
                    leading-[1.35]
                    tracking-[-0.015em]
                    sm:text-[17px]
                    md:text-[18px]
                  "
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
