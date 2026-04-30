export function PrimeLocationSection() {
  return (
    <section className="km-reveal relative w-full overflow-hidden px-5 text-center sm:px-6">
      {/* Background pattern */}
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
          pb-[56px]
          pt-[34px]
          md:pb-[64px]
          md:pt-[42px]
        "
      >
        <h2
          className="
            mx-auto
            max-w-[980px]
            font-['Inter',sans-serif]
            text-[36px]
            font-bold
            leading-[0.98]
            tracking-[-0.075em]
            text-[#0d2b22]
            sm:text-[46px]
            md:text-[58px]
            lg:text-[64px]
            xl:text-[68px]
          "
        >
          <span className="block">Prime Location – The Heart of</span>
          <span className="block">Coimbatore’s Growth Corridor</span>
        </h2>

        <div
          className="
            mx-auto
            mt-8
            flex
            max-w-[1500px]
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
              max-w-[1420px]
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
            Coimbatore is one of Tamil Nadu’s most dynamic and rapidly
            developing cities, renowned for its industrial strength, educational
            excellence, and pleasant climate. Kalamangala’s premium residential
            plots in Coimbatore are strategically located near emerging growth
            zones, ensuring seamless connectivity to the airport, IT hubs,
            educational institutions, hospitals, and shopping centers.
          </p>

          <p
            className="
              mx-auto
              max-w-[1460px]
              text-center
              font-['Inter',sans-serif]
              text-[17px]
              font-semibold
              leading-[1.42]
              tracking-[-0.045em]
              text-[#0d2b22]
              sm:text-[19px]
              md:text-[22px]
              lg:text-[24px]
            "
          >
            The region is witnessing an incredible transformation with new
            infrastructure projects, making it the perfect time to invest in land
            that promises exponential appreciation. Whether you are planning to
            build your dream home or seeking a valuable investment opportunity,
            Kalamangala’s location combines urban access with natural tranquility
            a rare combination in today’s fast-paced world.
          </p>
        </div>
      </div>
    </section>
  );
}