import { MarqueeText } from "../../../global/components/MarqueeText";
import img1 from "../../../assets/location-advantage/img1.avif";

export function LocationHero() {
  return (
    <>
      {/* Big Marquee */}
      <MarqueeText 
        text="Location.Advantage. " 
        duration={140} 
        className="
          w-full overflow-hidden
          pt-[115px]
          pb-[12px]
          sm:pt-[120px]
          sm:pb-[14px]
          md:pt-[130px]
          md:pb-[20px]
          lg:pt-[140px]
          lg:pb-[24px]
        "
        repeatCount={5}
      />

      {/* Hero Image */}
      <section
        className="
          la-reveal
          mx-auto
          mt-[58px]
          w-full
          max-w-[1600px]
          px-[13px]
          pb-[25px]
          sm:mt-[64px]
          sm:px-4
          md:mt-[78px]
          md:px-8
          lg:mt-[84px]
        "
      >
        <div
          className="
            mx-auto
            h-[395px]
            w-full
            overflow-hidden
            rounded-[8px]
            sm:h-[430px]
            md:h-[455px]
            xl:h-[485px]
          "
        >
          <img
            src={img1}
            alt="The Waterfront"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>
    </>
  );
}