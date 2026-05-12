import {
  Eye,
  MapPinned,
  UserCog,
  HeartHandshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Differentiator {
  title: string;
  desc: string;
  icon: LucideIcon;
}

const differentiators: Differentiator[] = [
  {
    title: "Transparency First",
    desc: "Clear communication, verified information, honest pricing — always.",
    icon: Eye,
  },
  {
    title: "Local Market Mastery",
    desc: "Deep understanding of Karur's micro-markets, demand cycles, and future development patterns.",
    icon: MapPinned,
  },
  {
    title: "Personalized Guidance",
    desc: "Every buyer receives tailored recommendations — because every requirement is unique.",
    icon: UserCog,
  },
  {
    title: "Long-Term Relationship",
    desc: "We stay connected even after the sale — your trust matters more than transactions.",
    icon: HeartHandshake,
  },
];

export function WhatMakesDifferentSection() {
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
        What Makes Us Different
      </h2>

      <div
        className="
          mt-[32px]
          grid
          grid-cols-1
          gap-[20px]
          md:mt-[44px]
          md:grid-cols-2
        "
      >
        {differentiators.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="
                km-reveal
                min-h-[200px]
                rounded-[18px]
                bg-table-row
                px-[28px]
                pt-[34px]
                pb-[28px]
                md:min-h-[240px]
                md:px-[38px]
                md:pt-[44px]
                md:pb-[34px]
              "
            >
              <div
                className="
                  mb-[20px]
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  bg-white
                  text-foreground
                  shadow-[0_10px_20px_rgba(13,43,34,0.18)]
                  md:mb-[22px]
                "
              >
                <Icon size={30} strokeWidth={2} />
              </div>

              <h3
                className="
                  font-['Inter',sans-serif]
                  text-[28px]
                  font-bold
                  leading-[1.05]
                  tracking-[-0.055em]
                  text-foreground
                  sm:text-[34px]
                  md:text-[40px]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-[14px]
                  max-w-[620px]
                  font-['Inter',sans-serif]
                  text-[16px]
                  font-medium
                  leading-[1.5]
                  tracking-[-0.015em]
                  text-muted-foreground
                  sm:text-[17px]
                  md:text-[18px]
                "
              >
                {item.desc}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
