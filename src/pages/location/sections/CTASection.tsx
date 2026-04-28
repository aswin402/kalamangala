import img1 from "../../../assets/location-advantage/img1.avif";

export function CTASection() {
  return (
    <section className="mx-auto mt-[88px] w-full max-w-[1470px] px-5 md:mt-[118px]">
      <article className="la-card grid min-h-[490px] overflow-hidden rounded-[24px] bg-[#173a31] text-[#f7f3df] md:grid-cols-[0.98fr_1.02fr]">
        <div className="h-[380px] overflow-hidden rounded-[24px] md:h-[490px]">
          <img
            src={img1}
            alt="Live Connected"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-center px-[36px] py-[44px] md:px-[58px]">
          <h2 className="font-['Inter'] text-[42px] font-black leading-[1.02] tracking-[-0.07em] text-[#f5a37d] md:text-[54px]">
            Live Connected.
            <br />
            Live Complete.
            <br />
            Live The Waterfront.
          </h2>

          <div className="mt-[36px] max-w-[690px] space-y-[10px] font-['Inter'] text-[15px] font-bold leading-[1.55] tracking-[-0.035em] text-[#f7f3df] md:text-[16px]">
            <p>
              At Kalamangala, we didn&apos;t just build homes — we built a
              lifestyle rooted in location excellence.
            </p>

            <p>
              The Waterfront stands as a perfect example of how thoughtful
              planning transforms living standards.
            </p>

            <p>
              From morning devotion at Thindal Kovil to evening shopping in the
              city, from weekend train trips to peaceful riverside sunsets —
              everything you love is within reach.
            </p>

            <p>This is not just a home.</p>

            <p>
              It&apos;s your gateway to premium living, crafted by a luxury home
              developer in Tamil Nadu who understands what modern families truly
              value —{" "}
              <span className="italic">time, peace, and pride of ownership.</span>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}