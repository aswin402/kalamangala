import { MarqueeText } from "../../../../global/components/MarqueeText";
import { ScrollHero } from "../../../../global/components/ScrollHero";
import img1 from "../../../../assets/construction-company/img1.webp";

export function ConstructionHero() {
  return (
    <ScrollHero
      titleContent={
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
      }
      mediaContent={
        <img
          src={img1}
          alt="Construction crane"
          className="h-full w-full object-cover object-[center_42%]"
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