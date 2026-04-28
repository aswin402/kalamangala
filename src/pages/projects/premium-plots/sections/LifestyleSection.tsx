import img9 from "../../../../assets/premium-residential-plots-in-coimbatore/img9.webp";

export function LifestyleSection() {
  const benefits = [
    "Morning walks with the river breeze",
    "Quick temple visits without traffic",
    "Weekend shopping in minutes",
    "Easy school runs and daily commutes",
    "Peaceful nights with no city noise",
  ];

  return (
    <section className="km-reveal relative mx-auto mt-[0px] w-full overflow-hidden bg-[#fbfbef] py-[28px] font-['Inter',sans-serif]">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(30deg, transparent 24%, rgba(13,43,34,0.11) 25%, rgba(13,43,34,0.11) 26%, transparent 27%, transparent 74%, rgba(13,43,34,0.11) 75%, rgba(13,43,34,0.11) 76%, transparent 77%),
            linear-gradient(150deg, transparent 24%, rgba(13,43,34,0.11) 25%, rgba(13,43,34,0.11) 26%, transparent 27%, transparent 74%, rgba(13,43,34,0.11) 75%, rgba(13,43,34,0.11) 76%, transparent 77%)
          `,
          backgroundSize: "42px 72px",
          backgroundPosition: "0 0",
        }}
      />

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-[42px] px-[24px] md:grid-cols-[780px_1fr] lg:px-0">
        {/* Left image */}
        <div className="mx-auto h-[360px] w-full overflow-hidden rounded-[18px] md:h-[540px] md:w-[780px]">
          <img
            src={img9}
            alt="Kalamangala amenities"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right content */}
        <div className="md:pl-[8px]">
          <h2 className="text-[34px] font-[900] leading-[0.95] tracking-[-0.065em] text-[#0d2b22] md:text-[52px]">
            Lifestyle Benefits You’ll Love
          </h2>

          <ul className="mt-[12px] list-disc pl-[20px] text-[16px] font-[900] leading-[1.2] tracking-[-0.045em] text-black md:text-[18px]">
            {benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="mt-[24px] max-w-[520px] text-[16px] font-[500] leading-[1.25] tracking-[-0.045em] text-[#111] md:text-[18px]">
            It’s not just location — it’s a lifestyle crafted for those
            <br className="hidden md:block" />
            who appreciate fine living and meaningful moments.
          </p>
        </div>
      </div>
    </section>
  );
}