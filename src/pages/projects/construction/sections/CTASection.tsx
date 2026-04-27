import img9 from "../../../../assets/construction-company/img9.webp";

export function CTASection() {
  return (
    <section className="km-reveal mx-auto mt-[36px] max-w-[1000px] px-5 pb-[44px]">
      <div className="grid min-h-[325px] overflow-hidden rounded-[8px] bg-[#14372e] md:grid-cols-[1fr_1fr]">
        <div className="relative min-h-[260px] md:min-h-0">
          <img
            src={img9}
            alt="The Waterfront"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#14372e]/55" />
        </div>

        <div className="flex flex-col justify-center px-[34px] py-[38px] md:px-[48px]">
          <h2 className="font-['Inter',sans-serif] text-[36px] font-[900] leading-[0.82] tracking-[-0.085em] text-[#f4a67e] md:text-[48px]">
            Live Connected.
            <br />
            Live Complete.
            <br />
            Live The Waterfront.
          </h2>

          <p className="mt-[24px] max-w-[395px] font-['Inter',sans-serif] text-[10px] font-[600] leading-[1.4] tracking-[-0.04em] text-[#fbfaf1]/88 md:text-[12px]">
            Whether you’re building your dream home or planning your next
            investment, Kalamangala brings together location, design, trust, and
            quality construction to create spaces that feel complete.
          </p>

          <p className="mt-[12px] max-w-[395px] font-['Inter',sans-serif] text-[10px] font-[600] leading-[1.4] tracking-[-0.04em] text-[#fbfaf1]/88 md:text-[12px]">
            With thoughtful planning and reliable execution, we help you move
            closer to the lifestyle and future you imagine.
          </p>
        </div>
      </div>
    </section>
  );
}