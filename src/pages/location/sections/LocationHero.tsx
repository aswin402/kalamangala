import { MarqueeText } from "../../../global/components/MarqueeText";
import { ScrollHero } from "../../../global/components/ScrollHero";
import img1 from "../../../assets/location-advantage/img1.avif";

export function LocationHero() {
  return (
    <ScrollHero
      titleContent={
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
      }
      mediaContent={
        <img
          src={img1}
          alt="Location Advantage"
          className="h-full w-full object-cover object-center"
        />
      }
      titlePanelClassName="
        h-[280px]
        sm:h-[320px]
        md:h-[380px]
        lg:h-[420px]
        xl:h-[440px]
      "
      mediaWrapperClassName="px-[13px] sm:px-4 md:px-8 lg:px-[38px]"
      mediaInnerClassName="
        mx-auto max-w-[1600px]
        h-[395px] rounded-[8px]
        sm:h-[430px] sm:rounded-[12px]
        md:h-[455px] md:rounded-[18px]
        lg:rounded-[22px]
        xl:h-[485px]
      "
    />
  );
}