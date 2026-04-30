import img1 from "../../../assets/location-advantage/img1.avif";

export function CTASection() {
  return (
    <section
      className="
        mx-auto
        mt-[88px]
        w-full
        max-w-[1515px]
        px-5
        md:mt-[118px]
      "
    >
      <article
        className="
          la-card
          grid
          min-h-[585px]
          overflow-hidden
          rounded-[30px]
          bg-card-green
          text-white-text
          lg:grid-cols-[0.98fr_1.02fr]
        "
      >
        {/* LEFT IMAGE */}
        <div
          className="
            h-[380px]
            overflow-hidden
            rounded-[30px]
            lg:h-[585px]
          "
        >
          <img
            src={img1}
            alt="Live Connected"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="
            flex
            flex-col
            justify-center
            px-[36px]
            py-[44px]
            lg:px-[38px]
            xl:px-[50px]
            2xl:px-[50px]
          "
        >
          <h2
            className="
              font-['Inter']
              text-[42px]
              font-black
              leading-[0.98]
              tracking-[-0.07em]
              text-[var(--location-ctasection-text-3)]
              md:text-[54px]
              lg:text-[50px]
              xl:text-[54px]
              2xl:text-[54px]
            "
          >
            Live Connected.
            <br />
            Live Complete.
            <br />
            Live The Waterfront.
          </h2>

          <div
            className="
              mt-[34px]
              max-w-[690px]
              space-y-[8px]
              font-['Inter']
              text-[15px]
              font-bold
              leading-[1.6]
              tracking-[-0.035em]
              text-white-text
              md:text-[16px]
            "
          >
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
              <span className="italic">
                time, peace, and pride of ownership.
              </span>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}