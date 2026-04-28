import img9 from "../../../../assets/construction-company/img9.webp";

export function CTASection() {
  return (
    <section
      className="
        km-reveal
        mx-auto
        mt-[42px]
        max-w-[1460px]
        px-5
        pb-[50px]
      "
    >
      <div
        className="
          grid
          min-h-[500px]
          overflow-hidden
          rounded-[28px]
          bg-[#17392f]
          md:grid-cols-[0.98fr_1.02fr]
        "
      >
        {/* Left Image */}
        <div className="relative min-h-[360px] md:min-h-[500px]">
          <img
            src={img9}
            alt="The Waterfront"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />
        </div>

        {/* Right Content */}
        <div
          className="
            flex
            flex-col
            justify-center
            px-[42px]
            py-[48px]
            md:px-[62px]
          "
        >
          <h2
            className="
              max-w-[560px]
              font-['Inter',sans-serif]
              text-[42px]
              font-[900]
              leading-[1.08]
              tracking-[-0.075em]
              text-[#f7a77f]
              md:text-[54px]
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
              max-w-[650px]
              font-['Inter',sans-serif]
              text-[15px]
              font-[600]
              leading-[1.65]
              tracking-[-0.035em]
              text-[#fff8ec]
              md:text-[16px]
            "
          >
            <p>
              At Kalamangala, we didn’t just build homes — we built a lifestyle
              rooted in location excellence.
            </p>

            <p className="mt-[6px]">
              The Waterfront stands as a perfect example of how thoughtful
              planning transforms living standards.
            </p>

            <p className="mt-[6px]">
              From morning devotion at Thindal Kovil to evening shopping in the
              city, from weekend train trips to peaceful riverside sunsets —
              everything you love is within reach.
            </p>

            <p className="mt-[6px]">
              This is not just a home.
            </p>

            <p className="mt-[6px]">
              It’s your{" "}
              <strong className="font-[900]">
                gateway to premium living,
              </strong>{" "}
              crafted by a{" "}
              <strong className="font-[900]">
                luxury home developer in Tamil Nadu
              </strong>{" "}
              who understands what modern families truly value —{" "}
              <em className="font-[800]">
                time, peace, and pride of ownership.
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}