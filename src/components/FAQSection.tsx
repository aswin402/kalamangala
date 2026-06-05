import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="
        overflow-hidden
        rounded-[14px]
        border
        border-border
        bg-card
        transition-all
        duration-500
      "
      style={{
        boxShadow: isOpen
          ? "0 6px 24px rgba(13,43,34,0.08)"
          : "none",
      }}
    >
      <button
        onClick={onToggle}
        className="
          flex
          w-full
          cursor-pointer
          items-center
          justify-between
          gap-4
          border-none
          bg-transparent
          px-[22px]
          py-[20px]
          text-left
          md:px-[28px]
          md:py-[24px]
        "
        aria-expanded={isOpen}
      >
        <span
          className="
            font-['Inter',sans-serif]
            text-[16px]
            font-bold
            leading-[1.3]
            tracking-[-0.02em]
            text-foreground
            sm:text-[17px]
            md:text-[18px]
          "
        >
          {item.question}
        </span>

        <ChevronDown
          size={22}
          strokeWidth={2.5}
          className="flex-shrink-0 text-muted-foreground transition-transform duration-300"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "300px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          className="
            px-[22px]
            pb-[20px]
            font-['Inter',sans-serif]
            text-[15px]
            font-medium
            leading-[1.55]
            tracking-[-0.015em]
            text-muted-foreground
            md:px-[28px]
            md:pb-[24px]
            md:text-[16px]
          "
        >
          {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
        </div>
      </div>
    </div>
  );
}

export function FAQSection({ items, title = "Frequently Asked Questions", className = "" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className={`
        mx-auto
        mt-[72px]
        w-full
        max-w-[1200px]
        px-5
        md:mt-[96px]
        3xl:max-w-[1400px]
        ${className}
      `}
    >
      <h2
        className="
          km-reveal
          text-center
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
        {title}
      </h2>

      <div className="km-stagger mt-[36px] space-y-[12px] md:mt-[44px]">
        {items.map((item, index) => (
          <FAQAccordionItem
            key={item.question}
            item={item}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </section>
  );
}
