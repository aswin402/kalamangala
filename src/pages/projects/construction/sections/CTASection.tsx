import img9 from "../../../../assets/construction-company/img9.webp";

export function CTASection() {
  return (
    <section
      className="
        km-reveal
        mx-auto
        mt-[8px]
        w-[calc(100%-82px)]
        max-w-[318px]
        pb-[4px]
        md:mt-[42px]
        md:w-full
        md:max-w-[1460px]
        md:px-5
        md:pb-[50px]
      "
    >
      <div
        className="
          overflow-hidden
          rounded-[30px]
          bg-[#17392f]
          md:grid
          md:min-h-[500px]
          md:rounded-[28px]
          md:grid-cols-[0.98fr_1.02fr]
        "
      >
        {/* Left Image */}
        <div
          className="
            relative
            h-[210px]
            w-full
            md:h-auto
            md:min-h-[500px]
          "
        >
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
            px-[28px]
            pb-[34px]
            pt-[38px]
            md:px-[62px]
            md:py-[48px]
          "
        >
          <h2
            className="
              max-w-[270px]
              font-['Inter',sans-serif]
              text-[28px]
              font-[900]
              leading-[1.12]
              tracking-[-0.065em]
              text-[#f7a77f]
              md:max-w-[560px]
              md:text-[54px]
              md:leading-[1.08]
              md:tracking-[-0.075em]
            "
          >
            Live Connected.
            <br />
            Live Complete.
            <br />
            Live The Waterfront.
          </h2>

          {/* Mobile Content */}
          <div
            className="
              mt-[24px]
              block
              max-w-[264px]
              font-['Inter',sans-serif]
              text-[15px]
              font-[600]
              leading-[1.66]
              tracking-[-0.035em]
              text-[#fff8ec]
              md:hidden
            "
          >
            <p>
              What makes Kalamangala one of the{" "}
              <strong className="font-[900]">
                luxury home builders in Tamil Nadu
              </strong>{" "}
              is not just the architecture — it’s the philosophy. Every
              Kalamangala project is:
            </p>

            <ul className="mt-[4px] list-disc space-y-[2px] pl-[18px]">
              <li>
                <strong className="font-[900]">
                  Architecturally Distinct
                </strong>{" "}
                – blending local aesthetics with modern minimalism.
              </li>
              <li>
                <strong className="font-[900]">
                  Functionally Efficient
                </strong>{" "}
                – designed for long-term sustainability.
              </li>
              <li>
                <strong className="font-[900]">
                  Emotionally Connected
                </strong>{" "}
                – nurturing communities, not just houses.
              </li>
            </ul>

            <p className="mt-[28px]">
              The Waterfront embodies this very spirit — offering a luxurious yet
              grounded lifestyle.
            </p>
          </div>

          {/* Desktop / Tablet Content */}
          <div
            className="
              mt-[34px]
              hidden
              max-w-[650px]
              font-['Inter',sans-serif]
              text-[15px]
              font-[600]
              leading-[1.65]
              tracking-[-0.035em]
              text-[#fff8ec]
              md:block
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

            <p className="mt-[6px]">This is not just a home.</p>

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