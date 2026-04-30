import img13 from "../../../../assets/premium-residential-plots-in-coimbatore/img13.webp";
import img12 from "../../../../assets/premium-residential-plots-in-coimbatore/img12.avif";

export function AdvantageSection() {
  return (
    <>
      <section className="mx-auto mt-[130px] grid w-full max-w-[1470px] items-center gap-[58px] px-5 md:grid-cols-[0.92fr_1.08fr]">
        <div className="la-reveal">
          <h2 className="max-w-[660px] font-['Inter'] text-[42px] font-black leading-[1.05] tracking-[-0.065em] text-foreground md:text-[54px]">
            Experience the Kalamangala
            <br />
            Advantage
          </h2>

          <p className="mt-[22px] max-w-[650px] font-['Inter'] text-[15px] font-medium italic leading-[1.35] tracking-[-0.035em] text-foreground/80 md:text-[18px]">
            Being a luxury home developer in Tamil Nadu, Kalamangala brings more
            than just structures – we bring vision, trust, and lifestyle
            excellence.
          </p>

          <div className="mt-[18px] max-w-[690px] font-['Inter'] text-[16px] font-medium leading-[1.12] tracking-[-0.035em] text-black md:text-[18px]">
            <p>
              Our goal has always been to choose locations that naturally
              enhance the quality of life.
            </p>

            <p>That’s why The Waterfront stands apart:</p>

            <ul className="list-disc pl-[20px]">
              <li>Strategically chosen for accessibility and serenity</li>
              <li>Built with sustainable layouts and modern amenities</li>
              <li>Designed for families, investors, and nature lovers alike</li>
            </ul>

            <p className="mt-[22px]">
              Every home here reflects Kalamangala’s promise of{" "}
              <span className="font-black">luxury that lasts a lifetime.</span>
            </p>
          </div>
        </div>

        <div className="la-card h-[520px] overflow-hidden rounded-[16px] md:h-[585px]">
          <img
            src={img13}
            alt="Kalamangala Advantage"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>

      <section className="mx-auto mt-[130px] grid w-full max-w-[1470px] items-center gap-[44px] px-5 pb-[90px] md:grid-cols-[0.98fr_1.02fr]">
        <div className="la-card h-[500px] overflow-hidden rounded-[18px] md:h-[560px]">
          <img
            src={img12}
            alt="Lifestyle Benefits"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="la-reveal md:pl-[20px]">
          <h2 className="font-['Inter'] text-[42px] font-black leading-[0.95] tracking-[-0.07em] text-foreground md:text-[54px]">
            Lifestyle Benefits You’ll Love
          </h2>

          <ul className="mt-[22px] list-disc pl-[20px] font-['Inter'] text-[16px] font-black leading-[1.22] tracking-[-0.04em] text-black md:text-[18px]">
            <li>Morning walks with the river breeze</li>
            <li>Quick temple visits without traffic</li>
            <li>Weekend shopping in minutes</li>
            <li>Easy school runs and daily commutes</li>
            <li>Peaceful nights with no city noise</li>
          </ul>

          <p className="mt-[28px] max-w-[560px] font-['Inter'] text-[16px] font-medium leading-[1.25] tracking-[-0.035em] text-black md:text-[18px]">
            It’s not just location — it’s a lifestyle crafted for those who
            appreciate fine living and meaningful moments.
          </p>
        </div>
      </section>
    </>
  );
}