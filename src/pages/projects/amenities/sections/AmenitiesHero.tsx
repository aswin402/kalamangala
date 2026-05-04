import { MarqueeText } from "../../../../global/components/MarqueeText";
import img1 from "../../../../assets/amenities/img1.avif";

export function AmenitiesHero() {
  return (
    <>
      {/* AMENITIES MARQUEE */}
      <MarqueeText 
        text="Amenities." 
        duration={180} 
        className="
          relative w-full overflow-hidden
          h-[205px] pt-[102px]
          sm:h-[235px] sm:pt-[92px]
          md:h-[280px] md:pt-[110px]
          lg:h-[315px] lg:pt-[116px]
          xl:h-[330px] xl:pt-[122px]
          2xl:h-[340px] 2xl:pt-[124px]
        "
        repeatCount={10}
      />

      {/* HERO IMAGE */}
      <section
        className="
          km-hero mx-auto w-full max-w-[1600px]
          mt-[38px] px-[13px]
          sm:mt-[56px] sm:px-4
          md:mt-[0px] md:px-8
          lg:mt-[0px]
          xl:mt-[0px]
          2xl:mt-[0px]
        "
      >
        <div
          className="
            mx-auto overflow-hidden
            h-[426px] w-full rounded-[8px]
            sm:h-[520px]
            md:h-[560px]
            lg:h-[520px]
            xl:h-[520px]
            2xl:h-[520px]
          "
        >
          <img
            src={img1}
            alt="Amenities"
            className="
              h-full w-full
              object-cover
              object-center
              lg:object-cover
            "
          />
        </div>
      </section>
    </>
  );
}