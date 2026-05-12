import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Are your plots legally approved and documented?",
    answer:
      "Yes — we only offer clear-title, DTCP-, RERA-, and document-verified plots for safe buying.",
  },
  {
    question: "Do you provide Custom Home Layouts in Tiruchengode?",
    answer:
      "Yes — we design personalized home layouts based on plot measurements, budget, and lifestyle needs.",
  },
  {
    question: "Are plots near town available for sale?",
    answer:
      "Absolutely — we develop and offer multiple well-connected residential plot options near town in Tiruchengode.",
  },
  {
    question: "Can you help with bank loan or registration support?",
    answer:
      "Yes — we assist with documentation, banking coordination, and end-to-end registration.",
  },
  {
    question: "Do you offer construction services after buying land?",
    answer:
      "Yes — we provide turnkey building solutions, including planning, materials, supervision, and finishing.",
  },
  {
    question: "Can NRIs invest in your Tiruchengode layouts?",
    answer:
      "Yes — we support NRIs through virtual tours, paperwork, and secure purchase guidance.",
  },
  {
    question: "How soon can construction begin after buying a plot?",
    answer:
      "Construction can begin immediately after layout approval, soil evaluation, and planning — and we help with every step.",
  },
];

function FAQAccordionItem({ item, isOpen, onToggle }: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="
        km-reveal
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
        <p
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
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="
        mx-auto
        mt-[72px]
        w-full
        max-w-[1200px]
        px-5
        md:mt-[96px]
        3xl:max-w-[1400px]
      "
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
        Frequently Asked Questions
      </h2>

      <div className="mt-[36px] space-y-[12px] md:mt-[44px]">
        {faqItems.map((item, index) => (
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
