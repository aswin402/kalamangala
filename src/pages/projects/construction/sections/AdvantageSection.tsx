import img8 from "../../../../assets/construction-company/img8.webp";

export function AdvantageSection() {
  return (
    <section
      className="
        mx-auto
        mt-[26px]
        grid
        max-w-[1455px]
        grid-cols-1
        items-center
        gap-[22px]
        px-[40px]
        pb-[42px]
        md:mt-[38px]
        md:grid-cols-[0.9fr_1.1fr]
        md:gap-[70px]
        md:px-5
        md:pb-[26px]
      "
    >
      {/* Image - First on mobile, right side on desktop */}
      <div
        className="
          km-reveal
          order-1
          overflow-hidden
          rounded-[18px]
          md:order-2
        "
      >
        <img
          src={img8}
          alt="Kalamangala advantage"
          className="
            h-[350px]
            w-full
            object-cover
            object-center
            sm:h-[390px]
            md:h-[555px]
          "
        />
      </div>

      {/* Content - Below image on mobile, left side on desktop */}
      <div className="km-reveal order-2 md:order-1 md:pl-[6px]">
        <h2
          className="
            max-w-[610px]
            font-['Inter',sans-serif]
            text-[16px]
            font-[900]
            leading-[0.95]
            tracking-[-0.035em]
            text-foreground
            md:text-[18px]
          "
        >
          Experience the Kalamangala Advantage
        </h2>

        <p
          className="
            mt-[12px]
            max-w-[720px]
            font-['Inter',sans-serif]
            text-[16px]
            font-[400]
            italic
            leading-[1.22]
            tracking-[-0.045em]
            text-black/70
            md:mt-[18px]
            md:text-[15px]
            md:leading-[1.25]
          "
        >
          Being a luxury home developer in Tamil Nadu, Kalamangala brings more
          than just structures — we bring vision, trust, and lifestyle
          excellence.
        </p>

        <div
          className="
            mt-[13px]
            max-w-[760px]
            font-['Inter',sans-serif]
            text-[16px]
            font-[500]
            leading-[1.05]
            tracking-[-0.035em]
            text-black
            md:mt-[12px]
            md:text-[15px]
            md:leading-[1.12]
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
    </section>
  );
}