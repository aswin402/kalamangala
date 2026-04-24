import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Play } from 'lucide-react';
import img1 from '../assets/aboutpage/img1.avif';
import img2 from '../assets/aboutpage/img2.avif';
import img3 from '../assets/aboutpage/img3.avif';
import img4 from '../assets/aboutpage/img4.avif';
import img5 from '../assets/aboutpage/img5.avif';
import img6 from '../assets/aboutpage/img6.avif';
import img7 from '../assets/aboutpage/img7.avif';

const MARQUEE = 'Innovation. Community. Quality. ';

const journey = [
  {
    num: '01',
    title: 'housing plots in tamil nadu',
    desc: 'Discover thoughtfully designed communities with premium infrastructure and modern amenities.',
    img: img4,
  },
  {
    num: '02',
    title: 'luxury property developers',
    desc: 'Select a space that fits your lifestyle, crafted with quality and innovation.',
    img: img5,
  },
  {
    num: '03',
    title: 'Premium property developers',
    desc: 'Watch your dream take shape with our expert construction and development.',
    img: img6,
  },
  {
    num: '04',
    title: 'Custom home builders Tamil Nadu',
    desc: 'Experience an upscale, nature-integrated living environment built to last for generations.',
    img: img7,
  },
];

export function AboutPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<'mission' | 'vision'>('mission');

  useEffect(() => {
    const tl = gsap.to(trackRef.current, {
      xPercent: -50,
      ease: 'none',
      duration: 28,
      repeat: -1,
    });
    return () => { tl.kill(); };
  }, []);

  return (
    <div className="pt-20">

      {/* ─── Marquee ─────────────────────────────────────────── */}
      <section className="py-6 overflow-hidden">
        <div
          ref={trackRef}
          className="flex whitespace-nowrap will-change-transform"
          style={{ width: 'fit-content' }}
        >
          {[0, 1].map((i) => (
            <span
              key={i}
              className="font-heading font-bold text-foreground leading-none"
              style={{ fontSize: 'clamp(48px, 7vw, 118px)' }}
            >
              {MARQUEE.repeat(5)}
            </span>
          ))}
        </div>
      </section>

      {/* ─── About Dark Section ──────────────────────────────── */}
      <section className="bg-[#162a22] mx-4 rounded-[1.5rem] overflow-hidden py-14 px-10 md:px-14">

        {/* Header text row */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-10">
          <div className="lg:w-[55%]">
            <span className="text-[9px] font-semibold tracking-[0.25em] text-white/40 uppercase block mb-5">
              ● About Us
            </span>
            <h2 className="text-[22px] md:text-[28px] font-heading font-bold text-white leading-snug mb-5">
              Welcome to Kalamangala –<br />Where Quality Meets Legacy.
            </h2>
            <p className="text-white/60 text-[13.5px] leading-[1.85]">
              With over 33 years of expertise in construction, we craft premium living spaces designed
              to stand the test of time. Our projects blend superior infrastructure, modern amenities,
              and lush green landscapes to create thriving communities. At Kalamangala, we don't just
              build homes—we shape lifestyles, ensuring every detail enhances your comfort, convenience,
              and connection with nature.
            </p>
          </div>
          <div className="lg:w-[45%] flex items-end">
            <p className="text-white/50 text-[14px] leading-[1.85]">
              We seamlessly blend nature with modern living, designing communities with lush gardens
              and green spaces for a serene yet contemporary lifestyle.
            </p>
          </div>
        </div>

        {/* Image bento grid */}
        <div className="grid gap-3.5" style={{ gridTemplateColumns: '2fr 1fr 1.6fr', minHeight: '520px' }}>

          {/* Col 1: Large image + founder quote */}
          <div className="flex flex-col gap-3.5">
            <div className="rounded-xl overflow-hidden flex-1 group min-h-[300px]">
              <img
                src={img1}
                alt="Aerial view of Kalamangala"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="bg-white/[0.06] rounded-xl p-5">
              <p className="text-white/65 text-[12.5px] leading-relaxed italic">
                "With over 33 years in the construction industry, I've learned that quality is
                everything — that's why I've made it the top priority in every project at Kalamangala"
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center shrink-0">
                  <span className="text-white text-[10px] font-bold">RK</span>
                </div>
                <div>
                  <p className="text-white text-[11.5px] font-semibold">R.Krishnamurthy</p>
                  <p className="text-white/40 text-[10px]">Founder & Managing Director of Kalamangala</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Misty image + 33+ stat */}
          <div className="flex flex-col gap-3.5">
            <div className="rounded-xl overflow-hidden flex-1 group">
              <img
                src={img2}
                alt="Community aerial"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="bg-background rounded-xl p-5 flex flex-col items-center justify-center text-center">
              <span
                className="font-heading font-bold text-foreground leading-none"
                style={{ fontSize: '2.8rem' }}
              >
                33+
              </span>
              <span className="text-foreground/55 text-[11.5px] mt-1.5">Years of Experience</span>
            </div>
          </div>

          {/* Col 3: Quote + night video card + learn more */}
          <div className="flex flex-col gap-3.5">
            <div className="bg-white/[0.06] rounded-xl p-5">
              <p className="text-white/70 text-[12.5px] leading-relaxed">
                "At Kalamangala, we don't just build spaces — we create lasting legacies, where quality,
                innovation and expertise blend together to redefine modern living."
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center shrink-0">
                  <span className="text-white text-[10px] font-bold">RS</span>
                </div>
                <div>
                  <p className="text-white text-[11.5px] font-semibold">Raju S.V.</p>
                  <p className="text-white/40 text-[10px]">Managing Director of Kalamangala</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden flex-1 relative group cursor-pointer">
              <img
                src={img3}
                alt="Kalamangala night"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/85 flex items-center justify-center shadow-lg">
                  <Play className="w-4 h-4 text-foreground ml-0.5" />
                </div>
              </div>
            </div>
            <div className="bg-white/[0.06] rounded-xl px-5 py-4">
              <p className="text-white/55 text-[12.5px]">Learn more about Kalamangala.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Journey Section ─────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-[9px] font-semibold tracking-[0.25em] text-foreground/45 uppercase block mb-3">
              ● Our Approach
            </span>
            <h2 className="text-[26px] md:text-[34px] font-heading font-bold text-foreground">
              This is our journey with you
            </h2>
          </div>

          {/* Staggered items */}
          <div className="flex flex-col gap-14">
            {journey.map((item, i) => (
              <div
                key={item.num}
                className="flex items-start gap-10"
                style={{ paddingLeft: `${i * 54}px` }}
              >
                {/* Text */}
                <div className="min-w-[240px] max-w-[290px] shrink-0">
                  <div className="w-12 h-12 bg-foreground rounded-xl flex items-center justify-center mb-5">
                    <span className="text-white font-heading font-bold text-[15px]">{item.num}</span>
                  </div>
                  <h3 className="text-[16px] font-heading font-bold text-foreground mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-foreground/55 text-[13px] leading-relaxed">{item.desc}</p>
                </div>

                {/* Image */}
                <div className="flex-1 max-w-[360px] ml-auto">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] group">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mission / Vision ────────────────────────────────── */}
      <section className="px-4 pb-8">
        <div className="bg-[#162a22] rounded-[1.5rem] px-10 md:px-16 py-14">

          {/* Toggle */}
          <div className="flex justify-center mb-10">
            <div className="flex gap-1 bg-white/10 rounded-full p-1">
              {(['mission', 'vision'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-7 py-2 rounded-full text-[13px] font-medium capitalize transition-all duration-200 ${
                    tab === t ? 'bg-primary text-foreground font-semibold' : 'text-white/55 hover:text-white'
                  }`}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <p className="text-white/65 text-[15px] leading-[1.9] max-w-3xl mx-auto text-center">
            {tab === 'mission'
              ? 'At Kalamangala, we build premium, lasting developments with top-tier infrastructure, modern amenities, and eco-friendly designs. Focused on quality, innovation, and customer satisfaction, we create thriving, well-connected communities for a superior lifestyle.'
              : 'Our vision is to become the most trusted name in premium real estate development across Tamil Nadu — creating landmark communities that inspire generations, harmonise with nature, and set new benchmarks for quality, sustainability, and design excellence.'}
          </p>
        </div>
      </section>

    </div>
  );
}
