export function PrimeLocationSection() {
  return (
    <section className="km-reveal relative w-full overflow-hidden font-['Inter',sans-serif] text-foreground">
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

      <div className="relative mx-auto max-w-[1680px] px-[24px] pb-[56px] pt-[34px] md:px-[120px]">
        <h2 className="max-w-[720px] text-[36px] font-[900] leading-[1.03] tracking-[-0.07em] md:text-[50px]">
          Prime Location – The Heart of
          <br />
          Coimbatore’s Growth Corridor
        </h2>

        <p className="mt-[22px] max-w-[1600px] text-[18px] font-[900] leading-[1.3] tracking-[-0.055em] md:text-[24px]">
          Coimbatore is one of Tamil Nadu’s most dynamic and rapidly developing
          cities, renowned for its industrial strength, educational excellence,
          and pleasant climate.
          <br />
          Kalamangala’s premium residential plots in Coimbatore are
          strategically located near emerging growth zones, ensuring seamless
          connectivity to the airport, IT
          <br />
          hubs, educational institutions, hospitals, and shopping centers.
        </p>

        <p className="mt-[24px] max-w-[1640px] text-[18px] font-[900] leading-[1.3] tracking-[-0.055em] md:text-[24px]">
          The region is witnessing an incredible transformation with new
          infrastructure projects, making it the perfect time to invest in land
          that promises exponential
          <br />
          appreciation. Whether you are planning to build your dream home or
          seeking a valuable investment opportunity, Kalamangala’s location
          combines urban access
          <br />
          with natural tranquility a rare combination in today’s fast-paced
          world.
        </p>
      </div>
    </section>
  );
}