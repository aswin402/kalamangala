export function PremiumAmenitiesSection() {
  return (
    <section className="km-reveal relative w-full overflow-hidden font-['Inter',sans-serif] text-foreground">
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

      <div className="relative mx-auto max-w-[1680px] px-[24px] pb-[42px] pt-[34px] md:px-[120px]">
        <h2 className="max-w-[1260px] text-[36px] font-[900] leading-[1.08] tracking-[-0.05em] md:text-[62px]">
          A Premium Gated Community in Tamil Nadu with World-Class Amenities
        </h2>

        <p className="mt-[30px] max-w-[1530px] text-[18px] font-[900] leading-[1.3] tracking-[-0.055em] md:text-[24px]">
          Living in a premium gated community in Tamil Nadu means enjoying a
          lifestyle that blends exclusivity with community spirit. Kalamangala
          ensures this through world-class amenities and infrastructure designed
          for modern families.
        </p>

        <p className="mt-[26px] text-[18px] font-[900] leading-[1.2] tracking-[-0.055em] md:text-[24px]">
          Some of the key highlights include:
        </p>
      </div>
    </section>
  );
}
