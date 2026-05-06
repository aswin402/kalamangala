import img13 from "../../../assets/location-advantage/img13.webp";
import img15 from "../../../assets/location-advantage/img15.webp";


export function AdvantageSection() {
  return (
    <>
      <section
        className="
          mx-auto
          mt-[55px]
          grid
          w-full
          max-w-[1500px]
          grid-cols-1
          items-center
          gap-[44px]
          px-5
          md:mt-[75px]
          md:grid-cols-[0.94fr_1.06fr]
          lg:gap-[58px]
          xl:px-4
          2xl:px-0
          3xl:max-w-[1800px]
        "
      >
        {/* Left Content */}
        <div className="la-reveal md:pl-[6px]">
          <h2
            className="
              max-w-[670px]
              font-['Inter',sans-serif]
              text-[42px]
              font-bold
              leading-[1.02]
              tracking-[-0.075em]
              text-[#0d2b22]
              sm:text-[48px]
              md:text-[50px]
              lg:text-[54px]
            "
          >
            Experience the Kalamangala
            <br />
            Advantage
          </h2>

          <p
            className="
              mt-[12px]
              max-w-[700px]
              font-['Inter',sans-serif]
              text-[15px]
              font-medium
              italic
              leading-[1.62]
              tracking-[-0.025em]
              text-[#263c36]/80
              md:text-[16px]
            "
          >
            Being a luxury home developer in Tamil Nadu, Kalamangala brings more
            than just structures – we bring vision, trust, and lifestyle
            excellence.
          </p>

          <div
            className="
              mt-[10px]
              max-w-[720px]
              font-['Inter',sans-serif]
              text-[16px]
              font-medium
              leading-[1.15]
              tracking-[-0.02em]
              text-black
              md:text-[17px]
            "
          >
            <p>
              Our goal has always been to choose locations that naturally
              enhance the quality of life.
            </p>

            <p>That’s why The Waterfront stands apart:</p>

            <ul className="list-disc">
              <li>Strategically chosen for accessibility and serenity</li>
              <li>Built with sustainable layouts and modern amenities</li>
              <li>Designed for families, investors, and nature lovers alike</li>
            </ul>

            <p className="mt-[20px] leading-[1.3]">
              Every home here reflects Kalamangala’s promise of{" "}
              <span className="font-bold">
                luxury that lasts a lifetime.
              </span>
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="
            la-card
            h-[340px]
            overflow-hidden
            rounded-[18px]
            sm:h-[430px]
            md:h-[520px]
            lg:h-[555px]
            xl:h-[555px]
          "
        >
          <img
            src={img13}
            alt="Kalamangala Advantage"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />
        </div>
      </section>

      <section
        className="
          mx-auto
          mt-[70px]
          grid
          w-full
          max-w-[1480px]
          grid-cols-1
          items-center
          gap-[44px]
          px-5
          pb-[60px]
          md:grid-cols-[0.98fr_1.02fr]
          xl:px-4
          2xl:px-0
          3xl:max-w-[1800px]
        "
      >
        <div
          className="
            la-card
            h-[360px]
            overflow-hidden
            rounded-[18px]
            sm:h-[430px]
            md:h-[520px]
            lg:h-[560px]
          "
        >
          <img
            src={img15}
            alt="Lifestyle Benefits"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="la-reveal md:pl-[20px]">
          <h2
            className="
              max-w-[650px]
              font-['Inter',sans-serif]
              text-[40px]
              font-bold
              leading-[1.02]
              tracking-[-0.075em]
              text-[#0d2b22]
              sm:text-[48px]
              md:text-[54px]
            "
          >
            Lifestyle Benefits You’ll Love
          </h2>

          <ul
            className="
              mt-[22px]
              list-disc
              font-['Inter',sans-serif]
              text-[17px]
              font-bold
              leading-[1.55]
              tracking-[-0.025em]
              text-black
              md:text-[18px]
            "
          >
            <li>Morning walks with the river breeze</li>
            <li>Quick temple visits without traffic</li>
            <li>Weekend shopping in minutes</li>
            <li>Easy school runs and daily commutes</li>
            <li>Peaceful nights with no city noise</li>
          </ul>

          <p
            className="
              mt-[24px]
              max-w-[560px]
              font-['Inter',sans-serif]
              text-[17px]
              font-medium
              leading-[1.45]
              tracking-[-0.025em]
              text-black
              md:text-[18px]
            "
          >
            It’s not just location — it’s a lifestyle crafted for those who
            appreciate fine living and meaningful moments.
          </p>
        </div>
      </section>
    </>
  );
}