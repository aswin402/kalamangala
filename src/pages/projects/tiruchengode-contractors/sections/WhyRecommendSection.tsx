import {
  Smile,
  Brain,
  FileText,
  Scale,
  HeartHandshake,
  MessageCircle,
} from "lucide-react";

const recommendReasons = [
  { text: "Friendly and approachable service", icon: Smile },
  { text: "Knowledge of local land value and development trends", icon: Brain },
  { text: "Detailed property explanations before purchase", icon: FileText },
  { text: "Ethical and customer-first process", icon: Scale },
  { text: "Strong after-sales assistance", icon: HeartHandshake },
  { text: "Transparent communication throughout", icon: MessageCircle },
];

export function WhyRecommendSection() {
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
        Why Customers Recommend Us
      </h2>

      <div
        className="
          mt-[32px]
          grid
          grid-cols-1
          gap-x-[20px]
          gap-y-[16px]
          sm:grid-cols-2
          md:mt-[40px]
          lg:grid-cols-3
        "
      >
        {recommendReasons.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.text}
              className="
                km-reveal
                group
                flex
                items-center
                gap-[20px]
                rounded-[18px]
                bg-table-row
                px-[28px]
                py-[28px]
                transition-all
                duration-500
                hover:shadow-[0_6px_24px_rgba(13,43,34,0.10)]
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
                  bg-white
                  text-foreground
                  shadow-[0_10px_20px_rgba(13,43,34,0.18)]
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
        Your satisfaction is our long-term reputation.
      </p>
    </section>
  );
}
