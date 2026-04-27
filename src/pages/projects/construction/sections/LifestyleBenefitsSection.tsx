import { CheckCircle2 } from "lucide-react";

import img10 from "../../../../assets/construction-company/img10.webp";

export function LifestyleBenefitsSection() {
  return (
    <section className="mx-auto mt-[34px] grid max-w-[1000px] grid-cols-1 gap-[34px] px-5 md:grid-cols-2 md:items-start">
      <div className="km-reveal overflow-hidden rounded-[8px] md:mt-[0px]">
        <img
          src={img10}
          alt="Lifestyle benefits"
          className="h-[300px] w-full object-cover md:h-[360px]"
        />
      </div>

      <div className="km-reveal pt-[42px] md:pt-[75px]">
        <h2 className="max-w-[390px] font-['Inter',sans-serif] text-[30px] font-[900] leading-[0.84] tracking-[-0.08em] text-[#0d2b22] md:text-[38px]">
          Lifestyle Benefits You’ll Love
        </h2>

        <ul className="mt-[15px] space-y-[5px] font-['Inter',sans-serif] text-[11px] font-[700] leading-[1.18] tracking-[-0.045em] text-[#0d2b22] md:text-[13px]">
          {[
            "Modern spaces with practical layouts",
            "Better comfort and long-term usability",
            "Sustainable construction approach",
            "Reliable value for future growth",
          ].map((item) => (
            <li key={item} className="flex items-start gap-[7px]">
              <CheckCircle2 size={12} className="mt-[1px] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-[16px] max-w-[365px] font-['Inter',sans-serif] text-[11px] font-[600] leading-[1.25] tracking-[-0.045em] text-[#0d2b22] md:text-[13px]">
          Every Kalamangala project is created to support better living,
          stronger communities, and a future-ready lifestyle.
        </p>
      </div>
    </section>
  );
}