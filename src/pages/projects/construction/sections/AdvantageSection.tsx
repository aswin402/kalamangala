import { CheckCircle2 } from "lucide-react";

import img8 from "../../../../assets/construction-company/img8.webp";

export function AdvantageSection() {
  return (
    <section className="mx-auto mt-[112px] grid max-w-[1000px] grid-cols-1 gap-[34px] px-5 md:grid-cols-2 md:items-start">
      <div className="km-reveal pt-[38px]">
        <h2 className="max-w-[390px] font-['Inter',sans-serif] text-[30px] font-[900] leading-[0.84] tracking-[-0.08em] text-[#0d2b22] md:text-[38px]">
          Experience the Kalamangala Advantage
        </h2>

        <p className="mt-[12px] max-w-[365px] font-['Inter',sans-serif] text-[11px] font-[600] leading-[1.25] tracking-[-0.045em] text-[#0d2b22] md:text-[13px]">
          Choosing Kalamangala means partnering with a builder who understands
          your aspirations. We bring trust, quality, and proven execution to
          every project.
        </p>

        <ul className="mt-[14px] space-y-[5px] font-['Inter',sans-serif] text-[11px] font-[700] leading-[1.18] tracking-[-0.045em] text-[#0d2b22] md:text-[13px]">
          {[
            "Expert engineering and planning",
            "Quality materials and execution",
            "Transparent process from start to finish",
            "On-time project delivery",
          ].map((item) => (
            <li key={item} className="flex items-start gap-[7px]">
              <CheckCircle2 size={12} className="mt-[1px] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="km-reveal overflow-hidden rounded-[8px]">
        <img
          src={img8}
          alt="Kalamangala advantage"
          className="h-[300px] w-full object-cover md:h-[360px]"
        />
      </div>
    </section>
  );
}