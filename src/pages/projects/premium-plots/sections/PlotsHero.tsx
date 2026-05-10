import { MarqueeText } from "../../../../global/components/MarqueeText";
import { ScrollHero } from "../../../../global/components/ScrollHero";
import img1 from "../../../../assets/premium-residential-plots-in-coimbatore/img1.jpg";

export function PlotsHero() {
  return (
    <ScrollHero
      titleContent={
        <MarqueeText
          text="Premium Residential Plots. "
          duration={60}
          className="
            w-full overflow-hidden
            pt-[115px] pb-[12px]
            sm:pt-[120px] sm:pb-[14px]
            md:pt-[130px] md:pb-[20px]
            lg:pt-[140px] lg:pb-[24px]
          "
          repeatCount={5}
        />
      }
      mediaContent={
        <img
          src={img1}
          alt="Premium residential plots in Coimbatore"
          className="h-full w-full object-cover object-center"
        />
      }
      titlePanelClassName="
        h-[250px]
        sm:h-[300px]
        md:h-[340px]
        lg:h-[384px]
      "
      mediaWrapperClassName="px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8"
      mediaInnerClassName="
        mx-auto max-w-[1540px]
        h-[255px] rounded-[10px]
        sm:h-[340px] sm:rounded-[14px]
        md:h-[360px] md:rounded-[18px]
        lg:h-[454px] lg:rounded-[22px]
      "
    />
  );
}