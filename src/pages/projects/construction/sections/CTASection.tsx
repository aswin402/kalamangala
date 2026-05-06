import img9 from "../../../../assets/construction-company/img9.webp";

export function CTASection() {
  return (
    <section
      className="
        mx-auto
        mt-[72px]
        w-full
        max-w-[1540px]
        px-4
        sm:px-5
        md:mt-[96px]
        lg:mt-[118px]
        3xl:max-w-[1800px]
      "
    >
      <article
        className="
          la-card
          grid
          w-full
          overflow-hidden
          rounded-[28px]
          bg-card-green
          text-white-text
          lg:h-[480px]
          lg:grid-cols-[0.98fr_1.02fr]
          xl:h-[520px]
          2xl:h-[540px]
        "
      >
        {/* LEFT IMAGE */}
        <div
          className="
            relative
            h-[280px]
            w-full
            overflow-hidden
            rounded-[28px]
            sm:h-[340px]
            md:h-[400px]
            lg:h-[480px]
          "
        >
          <img
            src={img9}
            alt="Live Connected"
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

        {/* RIGHT CONTENT */}
        <div
          className="
            flex
            h-full
            flex-col
            justify-center
            px-6
            py-8
            sm:px-8
            md:px-10
            lg:px-[38px]
            lg:py-[34px]
            xl:px-[38px]
            2xl:px-[38px]
          "
        >
          <h2
            className="
              text-primary
              text-[34px]
              font-bold
              leading-[1.04]
              tracking-[-0.055em]
              sm:text-[40px]
              md:text-[46px]
              lg:text-[48px]
              xl:text-[50px]
              2xl:text-[50px]
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
              mt-[32px]
              max-w-[760px]
              text-[14px]
              font-semibold
              leading-[1.68]
              tracking-[-0.02em]
              text-white-text
              sm:text-[15px]
              md:text-[15px]
              lg:text-[14px]
              xl:text-[14px]
              2xl:text-[15px]
            "
          >
            <p>
              At Kalamangala, we didn&apos;t just build homes — we built a
              lifestyle rooted in location excellence.
              <br />
              The Waterfront stands as a perfect example of how thoughtful
              planning transforms living standards.
              <br />
              From morning devotion at Thindal Kovil to evening shopping in the
              city, from weekend train trips to peaceful riverside sunsets —
              everything you love is within reach.
              <br />
              This is not just a home.
              <br />
              It&apos;s your{" "}
              <span className="font-bold">
                gateway to premium living, crafted by a luxury home developer in
                Tamil Nadu
              </span>{" "}
              who understands what modern families truly value —{" "}
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