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
            w-full overflow-hidden
            pt-[115px] pb-[12px]
            sm:pt-[120px] sm:pb-[14px]
            md:pt-[130px] md:pb-[20px]
            lg:pt-[140px] lg:pb-[24px]
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
        h-[250px]
        sm:h-[300px]
        md:h-[340px]
        lg:h-[384px]
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