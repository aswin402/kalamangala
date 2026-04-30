import { MarqueeText } from '../../global/components/MarqueeText';

const TEXT = "Let's Talk. Work with us. Contact. ";

export function ContactPage() {
  return (
    <MarqueeText 
      text={TEXT} 
      duration={60} 
      className="overflow-hidden pb-10 pt-20 md:pt-24 mt-16 mb-16" 
      repeatCount={3}
    />
  );
}