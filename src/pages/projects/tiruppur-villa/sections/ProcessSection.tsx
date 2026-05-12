import {
  ClipboardList,
  ListChecks,
  MapPinned,
  FileCheck,
  BadgeDollarSign,
  BookCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProcessStep {
  step: number;
  title: string;
  desc: string;
  icon: LucideIcon;
}

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Understand your requirements",
    desc: "Budget, location, plot size, lifestyle preferences — we listen first.",
    icon: ClipboardList,
  },
  {
    step: 2,
    title: "Shortlist suitable projects & layouts",
    desc: "We curate the best options matched to your needs.",
    icon: ListChecks,
  },
  {
    step: 3,
    title: "Arrange guided site visits",
    desc: "Explore the locality, amenities, and surroundings in person.",
    icon: MapPinned,
  },
  {
    step: 4,
    title: "Verify legal, technical & compliance documents",
    desc: "Approvals, certifications, and document verification support.",
    icon: FileCheck,
  },
  {
    step: 5,
    title: "Assist with pricing, negotiation & loans",
    desc: "Transparent pricing guidance and bank loan coordination.",
    icon: BadgeDollarSign,
  },
  {
    step: 6,
    title: "Support through registration & after-sales",
    desc: "Hassle-free documentation, registration, and continued support.",
    icon: BookCheck,
  },
];

export function ProcessSection() {
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
        Our Process — Simple, Transparent, Personalized
      </h2>

      <div className="mt-[40px] space-y-[16px] md:mt-[48px]">
        {processSteps.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.step}
              className="
                km-reveal
                group
                grid
                grid-cols-[auto_1fr]
                items-start
                gap-x-[20px]
                rounded-[16px]
                bg-table-row
                px-[22px]
                py-[22px]
                transition-all
                duration-500
                hover:shadow-[0_6px_24px_rgba(13,43,34,0.10)]
                md:grid-cols-[80px_auto_1fr]
                md:items-center
                md:gap-x-[28px]
                md:px-[32px]
                md:py-[28px]
              "
            >
              {/* Step number */}
              <div
                className="
                  flex
                  h-[52px]
                  w-[52px]
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-card-green
                  font-['Inter',sans-serif]
                  text-[20px]
                  font-extrabold
                  text-primary
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  md:h-[60px]
                  md:w-[60px]
                  md:text-[24px]
                "
              >
                {String(item.step).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div
                className="
                  hidden
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-lg
                  bg-white
                  text-foreground
                  shadow-[0_6px_16px_rgba(13,43,34,0.12)]
                  md:flex
                "
              >
                <Icon size={26} strokeWidth={2} />
              </div>

              {/* Content */}
              <div className="mt-1 md:mt-0">
                <h3
                  className="
                    font-['Inter',sans-serif]
                    text-[20px]
                    font-bold
                    leading-[1.15]
                    tracking-[-0.04em]
                    text-foreground
                    sm:text-[22px]
                    md:text-[24px]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-[8px]
                    font-['Inter',sans-serif]
                    text-[14px]
                    font-medium
                    leading-[1.5]
                    tracking-[-0.015em]
                    text-muted-foreground
                    sm:text-[15px]
                    md:text-[16px]
                  "
                >
                  {item.desc}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <p
        className="
          km-reveal
          mt-[28px]
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
        You stay informed, confident, and in control — always.
      </p>
    </section>
  );
}
