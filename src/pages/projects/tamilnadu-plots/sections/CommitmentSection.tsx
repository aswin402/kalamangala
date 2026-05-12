import {
  FileText,
  MapPinned,
  CheckCircle,
  EyeOff,
  PenLine,
} from "lucide-react";
import img8 from "../../../../assets/construction-company/img8.webp";

const commitments = [
  { text: "Full legal documentation", icon: FileText },
  { text: "On-site property visits", icon: MapPinned },
  { text: "Clear land titles", icon: CheckCircle },
  { text: "No hidden charges", icon: EyeOff },
  { text: "Secure and easy registration process", icon: PenLine },
];

export function CommitmentSection() {
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
        Kalamangala's Commitment to Transparency & Trust
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
        Real estate investment should never be stressful, confusing, or risky. At Kalamangala, we ensure a 100% transparent buying experience:
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
          <div className="space-y-[14px]">
            {commitments.map((item) => {
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
            We believe in guiding our customers step-by-step from choosing the right plot to completing the registration process.
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
            alt="Kalamangala real estate layouts"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
