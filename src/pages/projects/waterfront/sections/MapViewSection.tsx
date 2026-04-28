import before from "../../../../assets/thewaterfront/before.png";
import after from "../../../../assets/thewaterfront/after.png";

export function MapViewSection() {
  return (
    <section className="waterfront-animate w-full px-5 pb-[78px] pt-[46px] md:px-10 md:pb-[96px] md:pt-[62px] lg:px-[110px] lg:pb-[105px] lg:pt-[70px]">
      <div className="mx-auto max-w-[1260px]">
        <div className="grid h-[420px] grid-cols-2 overflow-hidden rounded-[8px] sm:h-[520px] md:h-[640px] lg:h-[770px]">
          <div className="relative h-full">
            <img
              src={before}
              alt="Before"
              className="h-full w-full object-cover"
            />

            <span className="absolute left-[18px] top-[14px] text-[24px] font-bold leading-none tracking-[-0.055em] text-white md:left-[32px] md:top-[22px] md:text-[40px]">
              Before
            </span>
          </div>

          <div className="relative h-full border-l-[2px] border-white">
            <img
              src={after}
              alt="After"
              className="h-full w-full object-cover"
            />

            <span className="absolute right-[18px] top-[14px] text-[24px] font-bold leading-none tracking-[-0.055em] text-white md:right-[32px] md:top-[22px] md:text-[40px]">
              After
            </span>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-[42px] w-[42px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-[20px] font-medium text-[#17392f] backdrop-blur-sm md:h-[54px] md:w-[54px] md:text-[28px]">
            ‹›
          </div>
        </div>
      </div>
    </section>
  );
}
