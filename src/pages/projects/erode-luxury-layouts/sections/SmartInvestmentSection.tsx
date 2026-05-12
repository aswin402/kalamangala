import img8 from "../../../../assets/construction-company/img8.webp";

export function SmartInvestmentSection() {
  return (
    <section
      className="
        mx-auto
        mt-[72px]
        w-full
        max-w-[1500px]
        px-5
        md:mt-[96px]
        3xl:max-w-[1800px]
      "
    >
      <div
        className="
          grid
          grid-cols-1
          items-center
          gap-[40px]
          md:grid-cols-[1fr_0.9fr]
          lg:gap-[58px]
        "
      >
        <div>
          <h2
            className="
              km-reveal
              font-['Inter',sans-serif]
              text-[34px]
              font-bold
              leading-[0.98]
              tracking-[-0.07em]
              text-foreground
              sm:text-[42px]
              md:text-[50px]
              lg:text-[52px]
            "
          >
            A Smart Investment Choice
          </h2>

          <p
            className="
              km-reveal
              mt-[22px]
              font-['Inter',sans-serif]
              text-[17px]
              font-medium
              leading-[1.45]
              tracking-[-0.03em]
              text-foreground
              sm:text-[19px]
              md:text-[21px]
            "
          >
            Buying land in Erode today ensures significant appreciation tomorrow.
            Kalamangala projects are strategically chosen in growth corridors
            where development is continuous, ensuring higher ROI for investors.
            Whether you plan to build your dream home or hold the property for
            value appreciation, investing with Kalamangala guarantees smart and
            secure long-term benefits.
          </p>
        </div>

        {/* Image */}
        <div
          className="
            la-card
            h-[320px]
            overflow-hidden
            rounded-[18px]
            sm:h-[400px]
            md:h-[480px]
          "
        >
          <img
            src={img8}
            alt="Smart investment choice in Erode"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
