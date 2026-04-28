import img8 from "../../../../assets/construction-company/img8.webp";

export function AdvantageSection() {
  return (
    <section
      className="
        mx-auto
        mt-[38px]
        grid
        max-w-[1455px]
        grid-cols-1
        items-center
        gap-[70px]
        px-5
        pb-[26px]
        md:grid-cols-[0.9fr_1.1fr]
      "
    >
      {/* Left Content */}
      <div className="km-reveal md:pl-[6px]">
        <h2
          className="
            max-w-[610px]
            font-['Inter',sans-serif]
            text-[40px]
            font-[900]
            leading-[1.03]
            tracking-[-0.075em]
            text-[#0d2b22]
            md:text-[50px]
          "
        >
          Experience the Kalamangala Advantage
        </h2>

        <p
          className="
            mt-[18px]
            max-w-[720px]
            font-['Inter',sans-serif]
            text-[16px]
            font-[400]
            italic
            leading-[1.55]
            tracking-[-0.045em]
            text-black/70
            md:text-[18px]
          "
        >
          Being a luxury home developer in Tamil Nadu, Kalamangala brings more
          than just structures — we bring vision, trust, and lifestyle
          excellence.
        </p>

        <div
          className="
            mt-[12px]
            max-w-[760px]
            font-['Inter',sans-serif]
            text-[17px]
            font-[500]
            leading-[1.18]
            tracking-[-0.035em]
            text-black
            md:text-[18px]
          "
        >
          <p>
            Our goal has always been to choose locations that naturally enhance
            the quality of life.
          </p>

          <p>That’s why The Waterfront stands apart:</p>

          <ul className="mt-[2px] list-disc pl-[19px]">
            <li>Strategically chosen for accessibility and serenity</li>
            <li>Built with sustainable layouts and modern amenities</li>
            <li>Designed for families, investors, and nature lovers alike</li>
          </ul>

          <p className="mt-[22px]">
            Every home here reflects Kalamangala’s promise of{" "}
            <strong className="font-[900]">
              luxury that lasts a lifetime.
            </strong>
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div
        className="
          km-reveal
          overflow-hidden
          rounded-[18px]
        "
      >
        <img
          src={img8}
          alt="Kalamangala advantage"
          className="
            h-[430px]
            w-full
            object-cover
            object-center
            md:h-[555px]
          "
        />
      </div>
    </section>
  );
}