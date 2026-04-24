import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Zap, Droplets, Wind, Star, CheckCircle2 } from 'lucide-react';

// Assets
import img1 from '../assets/amenities/img1.avif';
import img2 from '../assets/amenities/img2.avif';
import img3 from '../assets/amenities/img3.webp';
import img4 from '../assets/amenities/img4.webp';
import img5 from '../assets/amenities/img5.avif';
import img6 from '../assets/amenities/img6.webp';
import img7 from '../assets/amenities/img7.webp';
import img8 from '../assets/amenities/img8.avif';
import img9 from '../assets/amenities/img9.webp';
import img10 from '../assets/amenities/img10.webp';
import img11 from '../assets/amenities/img11.webp';
import img12 from '../assets/amenities/img12.webp';
import img13 from '../assets/amenities/img13.webp';

gsap.registerPlugin(ScrollTrigger);

export function AmenitiesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Marquee Animation
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: 'none',
      });
    }

    // Scroll Revelations
    const sections = containerRef.current?.querySelectorAll('.scroll-reveal');
    sections?.forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  const features = [
    {
      title: "Premium Clubhouse",
      desc: "A sprawling social hub designed for community interaction, celebrations, and leisure.",
      items: ["Lounge Area", "Indoor Games", "Community Spaces"],
      img: img3,
      align: "right"
    },
    {
      title: "Smart Home Ready",
      desc: "Experience the future with homes designed to integrate seamless smart technologies.",
      items: ["High-speed Connectivity", "Automation Ready", "Energy Efficiency"],
      img: img6,
      align: "left"
    },
    {
      title: "State-of-the-art Gym",
      desc: "Equipped with modern fitness gear to help you maintain a healthy and active lifestyle.",
      items: ["Cardio Zone", "Weight Training", "Yoga Space"],
      img: img5,
      align: "right"
    },
    {
      title: "Children's Play Area",
      desc: "Safe and vibrant spaces where children can explore, play, and create lasting memories.",
      items: ["Safe Flooring", "Modern Equipment", "Green Surroundings"],
      img: img10,
      align: "left"
    },
    {
      title: "Multipurpose Hall",
      desc: "Versatile spaces perfect for hosting events, meetings, and personal celebrations.",
      items: ["Acoustic Treatment", "Flexible Layout", "Modern Decor"],
      img: img11,
      align: "right"
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-[#f9f8f3] overflow-x-hidden pt-24 pb-20">
      
      {/* Top Marquee */}
      <div className="w-full border-b border-foreground/5 py-4 overflow-hidden bg-white/30 backdrop-blur-sm">
        <div ref={marqueeRef} className="whitespace-nowrap flex gap-8 items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl md:text-6xl font-heading font-bold text-foreground/10 uppercase tracking-tighter">
              Amenities. <span className="text-primary italic">Amenities.</span>
            </span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-6 py-16 scroll-reveal">
        <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[21/9] border-4 border-white">
          <img src={img1} alt="Amenities Hero" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-32 scroll-reveal">
        <h2 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-8 tracking-tighter">
          Why choose <br /> <span className="text-primary">Kalamangala</span>
        </h2>
        <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto">
          We don't just build houses; we craft environments where families thrive. Our amenities are chosen to provide a balanced lifestyle of wellness, security, and community.
        </p>
        <div className="mt-12 inline-flex items-center gap-2 px-8 py-4 bg-[#1a2b25] text-white rounded-full font-bold text-sm hover:scale-105 transition-transform cursor-pointer">
          Explore Features
        </div>
      </section>

      {/* Visionary Section */}
      <section className="max-w-6xl mx-auto px-6 mb-40 scroll-reveal">
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-foreground italic">Crafted by Visionaries, Built for You</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-12 text-foreground/70 leading-relaxed">
          <p>
            At Kalamangala, we believe that the true value of a home lies beyond its walls. It's in the way you feel when you step into the clubhouse, the safety your children feel at play, and the peace of mind that comes from knowing every detail has been meticulously planned.
          </p>
          <p>
            Our project, The Waterfront, represents our commitment to excellence. We have integrated the natural beauty of the canal views with state-of-the-art modern amenities to create a truly unique living experience in Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Feature Rows */}
      <section className="max-w-6xl mx-auto px-6 mb-40">
        <div className="flex flex-col gap-32">
          {features.map((f, i) => (
            <div key={i} className={`flex flex-col ${f.align === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center scroll-reveal`}>
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest">
                  <Star size={12} />
                  <span>Premium Feature</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tighter">{f.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{f.desc}</p>
                <ul className="grid grid-cols-1 gap-3">
                  {f.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                      <CheckCircle2 size={18} className="text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/3] group cursor-pointer border-4 border-white/50">
                  <img src={f.img} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Stands Apart Grid */}
      <section className="bg-[#1a2b25] py-32 rounded-t-[5rem]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tighter mb-4">
              Why The Waterfront <br /> <span className="text-primary">Stands Apart</span>
            </h2>
            <p className="text-white/40 text-sm tracking-[0.2em] uppercase">Premium Community Living</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {[
              { title: "Grand Entrance", desc: "Impressive gated entry with 24/7 surveillance.", img: img13 },
              { title: "24/7 Security", desc: "Advanced security systems for absolute peace of mind.", img: img9 },
              { title: "Lush Landscaping", desc: "Themed gardens and green belts across the project.", img: img8 },
              { title: "Underground Utilities", desc: "No hanging wires. Pure aesthetic excellence.", img: img12 },
              { title: "Modern Infrastructure", desc: "High-quality roads and drainage systems.", img: img7 }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden group scroll-reveal">
                <div className="h-48 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lifestyle Showcase */}
          <div className="flex flex-col gap-12">
            <div className="bg-[#1d2f28] border border-white/5 rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-stretch scroll-reveal shadow-2xl">
              <div className="flex-1 p-12 md:p-16 flex flex-col justify-center gap-6">
                <h3 className="text-3xl font-heading font-bold text-white">The Waterfront Lifestyle</h3>
                <p className="text-white/50 leading-relaxed">
                  Imagine waking up to the gentle breeze from the canal and spending your evenings in a vibrant community space. Our project is designed to give you that perfect blend of nature and modern luxury.
                </p>
                <div className="flex items-center gap-4 mt-4">
                   <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                      <Wind size={24} />
                   </div>
                   <div className="text-white/80 text-sm font-medium">Naturally Ventilated Layouts</div>
                </div>
              </div>
              <div className="flex-1 min-h-[350px]">
                <img src={img2} alt="Lifestyle" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="bg-[#1d2f28] border border-white/5 rounded-[3rem] overflow-hidden flex flex-col md:flex-row-reverse items-stretch scroll-reveal shadow-2xl">
              <div className="flex-1 p-12 md:p-16 flex flex-col justify-center gap-6">
                <h3 className="text-3xl font-heading font-bold text-white">Security & Safety</h3>
                <p className="text-white/50 leading-relaxed">
                  Your safety is our priority. With gated access, 24/7 CCTV monitoring, and dedicated security personnel, The Waterfront offers a sanctuary for your family.
                </p>
                <ul className="space-y-4">
                  {[Shield, Zap, Droplets].map((Icon, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-primary">
                        <Icon size={16} />
                      </div>
                      <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
                        {i === 0 ? "24/7 Surveillance" : i === 1 ? "Emergency Power" : "Pure Water Supply"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 min-h-[350px]">
                <img src={img4} alt="Security" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Huge Logo Footer Section */}
      <section className="w-full pt-40 pb-20 bg-[#1a2b25] flex flex-col items-center overflow-hidden">
        <h2 className="text-[25vw] font-heading font-bold text-primary/5 leading-none select-none pointer-events-none transform translate-y-1/4">
          Kalamangala
        </h2>
      </section>

    </div>
  );
}
