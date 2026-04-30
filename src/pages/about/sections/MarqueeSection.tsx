import { MarqueeText } from "../../../global/components/MarqueeText";

const MARQUEE = "Innovation. Community. Quality. ";

export const MarqueeSection = () => {
  return (
    <MarqueeText 
      text={MARQUEE} 
      duration={300} 
      className="relative flex h-[250px] w-full items-center overflow-hidden bg-transparent sm:h-[300px] md:h-[340px] lg:h-[384px] mt-14 mb-14" 
      repeatCount={5}
    />
  );
};