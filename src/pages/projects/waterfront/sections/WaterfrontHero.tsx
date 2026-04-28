import waterfrontImg from "../../../../assets/thewaterfront/img1.avif";

export function WaterfrontHero() {
  return (
    <section className="w-full px-5 pb-[84px] pt-[46px] text-[#17392f] md:px-10 md:pb-[110px] md:pt-[62px] lg:px-[110px] lg:pb-[120px] lg:pt-[70px]">
      <div className="mx-auto max-w-[1680px]">
        {/* TOP IMAGE + DETAILS */}
        <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-[1fr_390px] lg:gap-[36px]">
          {/* IMAGE */}
          <div className="h-[260px] overflow-hidden rounded-[8px] sm:h-[320px] md:h-[405px]">
            <img
              src={waterfrontImg}
              alt="The Waterfront by Kalamangala"
              className="h-full w-full object-cover"
            />
          </div>

          {/* DETAILS */}
          <div className="pt-0 lg:pt-[20px]">
            <div className="border-b border-[#17392f]/25 pb-[18px]">
              <h4 className="text-[18px] font-semibold leading-none tracking-[-0.045em]">
                Location
              </h4>
              <p className="mt-[15px] text-[19px] font-medium leading-none tracking-[-0.045em] text-[#17392f]/70">
                Modakurichi, Erode
              </p>
            </div>

            <div className="border-b border-[#17392f]/25 py-[18px]">
              <h4 className="text-[18px] font-semibold leading-none tracking-[-0.045em]">
                Theme
              </h4>
              <p className="mt-[15px] text-[19px] font-medium leading-none tracking-[-0.045em] text-[#17392f]/70">
                Modern Roman Elegance
              </p>
            </div>

            <div className="border-b border-[#17392f]/25 py-[18px]">
              <h4 className="text-[18px] font-semibold leading-none tracking-[-0.045em]">
                Size
              </h4>
              <p className="mt-[15px] text-[19px] font-medium leading-none tracking-[-0.045em] text-[#17392f]/70">
                10 Acres
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="mt-[56px] grid grid-cols-1 gap-[38px] md:mt-[84px] lg:mt-[110px] lg:grid-cols-[1fr_1fr] lg:gap-[120px]">
          {/* LEFT BIG HEADING */}
          <div className="pl-0 lg:pl-[220px]">
            <h2 className="max-w-[560px] text-[30px] font-medium leading-[1.08] tracking-[-0.06em] text-[#17392f] md:text-[40px] lg:text-[44px]">
              Welcome to The Waterfront by Kalamangala – Erode’s first premium
              community living, where nature and modern comforts come together.
              Choose your plot, build your dream home and be part of a secure,
              eco-friendly and like-minded neighborhood.
            </h2>
          </div>

          {/* RIGHT CONTENT */}
          <div className="pt-0 lg:pt-[2px]">
            <h3 className="text-[28px] font-semibold leading-none tracking-[-0.06em] text-[#17392f] md:text-[32px]">
              The Waterfront
            </h3>

            <p className="mt-[24px] max-w-[640px] text-[18px] font-semibold leading-[1.35] tracking-[-0.045em] text-[#17392f]">
              Imagine waking up to the gentle sounds of flowing water, strolling
              along tree-lined, wide streets, and watching your children play in
              the lap of lush greenery.
            </p>

            <p className="mt-[32px] max-w-[660px] text-[18px] font-medium leading-[1.35] tracking-[-0.045em] text-[#17392f]">
              Transform your lifestyle effortlessly. Simply choose your plot
              size and create your perfect home in Erode&apos;s most in-demand
              address. Here, you are not just building a house – you are
              becoming a part of a highly modern, nature-rich and secured
              community designed for the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
