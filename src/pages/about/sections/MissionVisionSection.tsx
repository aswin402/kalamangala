import { useState } from "react";

export const MissionVisionSection = () => {
  const [tab, setTab] = useState<"mission" | "vision">("vision");

  const isMission = tab === "mission";

  return (
    <section className="w-full px-[34px] pb-[51px] pt-[31px]">
      <div className="mx-auto flex min-h-[400px] w-full max-w-[1360px] flex-col items-center rounded-[18px] bg-[#183b31] px-[46px] pt-[80px] text-center">
        {/* Tabs */}
        <div className="mb-[44px] inline-flex h-[51px] rounded-[9px] border border-white/50 bg-transparent p-[1px]">
          {(["mission", "vision"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={`h-[47px] min-w-[99px] rounded-[8px] px-[20px] text-[18px] font-medium capitalize tracking-[-0.025em] transition-all duration-300 ${
                tab === item
                  ? "bg-[#f5a77f] text-[#102d25]"
                  : "bg-transparent text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Content */}
        <p
          className={`mx-auto font-medium text-[#fbf8ec] tracking-[-0.045em] ${
            isMission
              ? "max-w-[1190px] text-[25px] leading-[1.28]"
              : "max-w-[1210px] text-[38px] leading-[1.2]"
          }`}
        >
          {isMission
            ? "At Kalamangala, we build premium, lasting developments with top-tier infrastructure, modern amenities, and eco-friendly designs. Focused on quality, innovation, and customer satisfaction, we create thriving, well-connected communities for a superior lifestyle."
            : "To create exceptional living spaces that blend quality, innovation and sustainability, shaping communities that stand the test of time and enhance the way people live."}
        </p>
      </div>
    </section>
  );
};