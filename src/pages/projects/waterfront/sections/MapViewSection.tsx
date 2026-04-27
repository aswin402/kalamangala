import before from "../../../../assets/thewaterfront/before.png";
import after from "../../../../assets/thewaterfront/after.png";

export function MapViewSection() {
  return (
    <section className="waterfront-animate w-full px-[110px] pb-[105px] pt-[70px]">
      <div className="mx-auto max-w-[1260px]">
        <div className="grid h-[770px] grid-cols-2 overflow-hidden rounded-[8px]">
          <div className="relative h-full">
            <img
              src={before}
              alt="Before"
              className="h-full w-full object-cover"
            />

            <span className="absolute left-[32px] top-[22px] text-[40px] font-bold leading-none tracking-[-0.055em] text-white">
              Before
            </span>
          </div>

          <div className="relative h-full border-l-[2px] border-white">
            <img
              src={after}
              alt="After"
              className="h-full w-full object-cover"
            />

            <span className="absolute right-[32px] top-[22px] text-[40px] font-bold leading-none tracking-[-0.055em] text-white">
              After
            </span>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-[28px] font-medium text-[#17392f] backdrop-blur-sm">
            ‹›
          </div>
        </div>
      </div>
    </section>
  );
}