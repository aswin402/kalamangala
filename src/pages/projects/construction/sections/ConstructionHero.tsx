import { MarqueeText } from "../../../../global/components/MarqueeText";
import img1 from "../../../../assets/construction-company/img1.webp";

export function ConstructionHero() {
  return (
    <>
      {/* CONSTRUCTION MARQUEE */}
      <MarqueeText 
        text="Erode Construction.Company " 
        duration={180} 
        className="
          relative w-full overflow-hidden bg-transparent
          h-[205px] pt-[120px]
          sm:h-[235px] sm:pt-[110px]
          md:h-[280px] md:pt-[130px]
          lg:h-[315px] lg:pt-[140px]
          xl:h-[330px] xl:pt-[150px]
          2xl:h-[340px] 2xl:pt-[156px]
        "
        repeatCount={6}
      />

      {/* HERO IMAGE */}
      <section
        className="
          km-reveal w-full
          mt-[38px] px-[11px]
          sm:mt-[56px] sm:px-6
          md:mt-[82px] md:px-10
          lg:mt-[50px] lg:px-0
          xl:mt-[50px] lg:px-0
          2xl:mt-[50px] lg:px-0
        "
      >
        <div
          className="
            mx-auto overflow-hidden
            h-[300px] w-full rounded-[6px]
            sm:h-[380px]
            md:h-[452px]
            lg:h-[452px] lg:w-full lg:max-w-[1520px] lg:rounded-[8px]
            xl:h-[452px]
            2xl:h-[452px]
          "
        >
          <img
            src={img1}
            alt="Construction crane"
            className="
              h-full w-full
              object-cover
              object-[center_42%]
            "
          />
        </div>
      </section>
    </>
  );
}