import { MarqueeText } from "../../../../global/components/MarqueeText";
import { ScrollHero } from "../../../../global/components/ScrollHero";
import img1 from "../../../../assets/construction-company/img1.webp";

export function TiruchengodeHero() {
  return (
    <ScrollHero
      titleContent={
        <MarqueeText
          text="Tiruchengode.RealEstate "
          duration={180}
          className="
            w-full overflow-hidden
            pt-[115px] pb-[12px]
            sm:pt-[120px] sm:pb-[14px]
            md:pt-[130px] md:pb-[20px]
            lg:pt-[140px] lg:pb-[24px]
          "
          repeatCount={6}
        />
      }
      mediaContent={
        <img
          src={img1}
          alt="Real estate development in Tiruchengode"
          className="h-full w-full object-cover object-[center_42%]"
        />
      }
      titlePanelClassName="
        h-[250px]
        sm:h-[300px]
        md:h-[340px]
        lg:h-[384px]
      "
      mediaWrapperClassName="px-[11px] sm:px-6 md:px-10 lg:px-[38px]"
      mediaInnerClassName="
        mx-auto max-w-[1520px]
        h-[300px] rounded-[6px]
        sm:h-[380px] sm:rounded-[10px]
        md:h-[452px] md:rounded-[16px]
        lg:h-[452px] lg:rounded-[20px]
        xl:h-[452px]
        2xl:h-[452px]
      "
    />
  );
}
