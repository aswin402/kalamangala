export function PremiumAmenitiesSection() {
  return (
    <section className="km-reveal relative w-full overflow-hidden px-5 text-center sm:px-6">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.42]"
        style={{
          backgroundImage: `
            linear-gradient(30deg, transparent 24%, rgba(13,43,34,0.105) 25%, rgba(13,43,34,0.105) 26%, transparent 27%, transparent 74%, rgba(13,43,34,0.105) 75%, rgba(13,43,34,0.105) 76%, transparent 77%),
            linear-gradient(150deg, transparent 24%, rgba(13,43,34,0.105) 25%, rgba(13,43,34,0.105) 26%, transparent 27%, transparent 74%, rgba(13,43,34,0.105) 75%, rgba(13,43,34,0.105) 76%, transparent 77%)
          `,
          backgroundSize: "42px 72px",
          backgroundPosition: "0 0",
        }}
      />

      <div
        className="
          relative
          mx-auto
          flex
          max-w-[1680px]
          flex-col
          items-center
          pb-[42px]
          pt-[34px]
          md:pb-[52px]
          md:pt-[42px]
        "
      >
        <h2
          className="
            mx-auto
            max-w-[1260px]
            font-['Inter',sans-serif]
            text-[34px]
            font-bold
            leading-[0.98]
            tracking-[-0.075em]
            text-[#0d2b22]
            sm:text-[44px]
            md:text-[56px]
            lg:text-[64px]
            xl:text-[68px]
          "
        >
          A Premium Gated Community in Tamil Nadu with World-Class Amenities
        </h2>

        <div
          className="
            mx-auto
            mt-8
            flex
            max-w-[1530px]
            flex-col
            items-center
            gap-6
            md:mt-9
            md:gap-7
          "
        >
          <p
            className="
              mx-auto
              max-w-[1530px]
              text-center
              font-['Inter',sans-serif]
              text-[17px]
              font-bold
              leading-[1.42]
              tracking-[-0.045em]
              text-[#0d2b22]
              sm:text-[19px]
              md:text-[22px]
              lg:text-[24px]
            "
          >
            Living in a premium gated community in Tamil Nadu means enjoying a
            lifestyle that blends exclusivity with community spirit. Kalamangala
            ensures this through world-class amenities and infrastructure
            designed for modern families.
          </p>

          <p
            className="
              text-center
              font-['Inter',sans-serif]
              text-[17px]
              font-bold
              leading-[1.42]
              tracking-[-0.045em]
              text-[#0d2b22]
              sm:text-[19px]
              md:text-[22px]
              lg:text-[24px]
            "
          >
            Some of the key highlights include:
          </p>
        </div>
      </div>
    </section>
  );
}