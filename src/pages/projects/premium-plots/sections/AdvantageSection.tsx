import img8 from "../../../../assets/premium-residential-plots-in-coimbatore/img8.avif";

export function AdvantageSection() {
  return (
    <section className="km-reveal relative mx-auto mt-[80px] w-full overflow-hidden bg-[#fbfbef] py-[40px] font-['Inter',sans-serif]">
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

      <div className="relative mx-auto grid max-w-[1455px] grid-cols-1 items-center gap-[58px] px-[24px] md:grid-cols-[680px_1fr] lg:px-0">
        {/* Left content */}
        <div className="pl-0 md:pl-[64px]">
          <h2 className="max-w-[660px] text-[34px] font-[900] leading-[1.05] tracking-[-0.055em] text-[#0d2b22] md:text-[48px]">
            Experience the Kalamangala
            <br />
            Advantage
          </h2>

          <p className="mt-[14px] max-w-[690px] text-[16px] font-[500] italic leading-[1.45] tracking-[-0.035em] text-[#4f4f42]">
            Being a luxury home developer in Tamil Nadu, Kalamangala brings more
            than just structures – we bring vision, trust, and lifestyle
            excellence.
          </p>

          <div className="mt-[14px] max-w-[710px] text-[16px] font-[500] leading-[1.12] tracking-[-0.035em] text-black md:text-[17px]">
            <p>
              Our goal has always been to choose locations that naturally enhance
              the quality of life.
            </p>

            <p>That’s why The Waterfront stands apart:</p>

            <ul className="list-disc pl-[20px]">
              <li>Strategically chosen for accessibility and serenity</li>
              <li>Built with sustainable layouts and modern amenities</li>
              <li>Designed for families, investors, and nature lovers alike</li>
            </ul>
          </div>

          <p className="mt-[20px] max-w-[700px] text-[16px] font-[500] leading-[1.25] tracking-[-0.035em] text-black md:text-[17px]">
            Every home here reflects Kalamangala’s promise of{" "}
            <strong className="font-[900]">
              luxury that lasts a lifetime.
            </strong>
          </p>
        </div>

        {/* Right image */}
        <div className="h-[360px] overflow-hidden rounded-[18px] md:h-[555px] md:w-[710px]">
          <img
            src={img8}
            alt="Kalamangala lifestyle"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}