import { MarqueeText } from "../../../../global/components/MarqueeText";
import { ScrollHero } from "../../../../global/components/ScrollHero";
import img1 from "../../../../assets/amenities/img1.avif";

export function AmenitiesHero() {
  return (
    <ScrollHero
      titleContent={
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
      }
      mediaContent={
        <img
          src={img1}
          alt="Amenities"
          className="h-full w-full object-cover object-center"
        />
      }
      titlePanelClassName="
        h-[260px]
        sm:h-[300px]
        md:h-[360px]
        lg:h-[400px]
        xl:h-[420px]
        2xl:h-[430px]
      "
      mediaWrapperClassName="px-[13px] sm:px-4 md:px-8 lg:px-[38px]"
      mediaInnerClassName="
        mx-auto max-w-[1600px]
        h-[426px] rounded-[8px]
        sm:h-[520px] sm:rounded-[12px]
        md:h-[560px] md:rounded-[18px]
        lg:h-[520px] lg:rounded-[22px]
        xl:h-[520px]
        2xl:h-[520px]
      "
    />
  );
}