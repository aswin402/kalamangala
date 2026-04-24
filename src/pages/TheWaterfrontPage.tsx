import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Home, MapPin, Calendar, Droplets, Shield, Zap, Wind } from 'lucide-react';

// Assets
import logo from '../assets/thewaterfront/logo.avif';
import img1 from '../assets/thewaterfront/img1.avif';
import img2 from '../assets/thewaterfront/img2.png';
import img3 from '../assets/thewaterfront/img3.png';
import img4 from '../assets/thewaterfront/img4.png';
import img5 from '../assets/thewaterfront/img5.png';
import img6 from '../assets/thewaterfront/img6.png';
import img7 from '../assets/thewaterfront/img7.png';
import img8 from '../assets/thewaterfront/img8.png';
import img9 from '../assets/thewaterfront/img9.png';
import img10 from '../assets/thewaterfront/img10.png';
import after from '../assets/thewaterfront/after.png';

gsap.registerPlugin(ScrollTrigger);

export function TheWaterfrontPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const sections = containerRef.current?.querySelectorAll('section');
    sections?.forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full pt-28 pb-20 bg-background overflow-x-hidden">
      
      {/* Header Logo */}
      <section className="flex justify-center mb-16 px-6">
        <img src={logo} alt="The Waterfront Logo" className="w-full max-w-[500px] h-auto" />
      </section>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-8 mb-24">
        <div className="md:col-span-8 rounded-[2rem] overflow-hidden shadow-2xl h-[450px]">
          <img src={img1} alt="The Waterfront Hero" className="w-full h-full object-cover" />
        </div>
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-[2rem] p-8 flex flex-col gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Calendar size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-foreground/40 font-semibold">Status</p>
                <p className="text-sm font-bold text-foreground">On Going</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Home size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-foreground/40 font-semibold">Type</p>
                <p className="text-sm font-bold text-foreground">Residential Community</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-foreground/40 font-semibold">Location</p>
                <p className="text-sm font-bold text-foreground">Perundurai, Erode</p>
              </div>
            </div>
          </div>
          <button className="w-full py-5 bg-foreground text-white rounded-full font-bold text-sm tracking-wide hover:bg-foreground/90 transition-all shadow-xl">
            Enquire Now
          </button>
        </div>
      </section>

      {/* Description Section */}
      <section className="max-w-4xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <h2 className="text-3xl md:text-4xl font-heading font-bold leading-[1.1] text-foreground">
            Welcome to The Waterfront by Kalamangala – where nature and modern comforts come together.
          </h2>
          <div className="flex flex-col gap-6">
            <p className="text-foreground/60 leading-relaxed">
              Experience Erode's first premium community living. Choose your plot, build your dream home and be part of a secure, eco-friendly and like-minded neighborhood.
            </p>
            <div className="flex items-center gap-2 text-primary font-bold text-sm group cursor-pointer">
              <span>Explore Community</span>
              <div className="w-6 h-px bg-primary group-hover:w-10 transition-all"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Map View Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/40">
          <img src={after} alt="The Waterfront Map View" className="w-full h-auto" />
          <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-white/50">
            <span className="text-[10px] font-bold tracking-[0.2em] text-foreground uppercase italic">After</span>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="max-w-4xl mx-auto px-6 mb-32">
        <div className="bg-[#fcfbf7] border border-foreground/5 rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 text-[180px] font-serif text-foreground/5 pointer-events-none">“</div>
          <p className="text-xl md:text-2xl font-medium text-foreground/80 leading-relaxed text-center relative z-10 italic">
            "Kalamangala houses are designed with your life and happiness in mind. Every project we undertake is a step towards building a better future, where you can live your best life, surrounded by nature and modern comforts."
          </p>
          <p className="text-center mt-8 font-bold text-primary tracking-widest uppercase text-xs">— Kalamangala</p>
        </div>
      </section>

      {/* Video Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="relative aspect-video rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl border-4 border-white/20">
          <img 
            src="https://i.ytimg.com/vi_webp/MzczJI7bn34/sddefault.webp" 
            alt="Project Video Placeholder" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
              <Play className="text-foreground fill-foreground ml-1" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-heading font-bold text-foreground tracking-tighter opacity-10 uppercase select-none">Showcase</h2>
          <div className="h-1 w-20 bg-primary mx-auto -mt-6 rounded-full"></div>
        </div>
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map((img, idx) => (
            <div key={idx} className="break-inside-avoid rounded-[1.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <img src={img} alt={`Showcase ${idx}`} className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <section className="max-w-6xl mx-auto px-6 mb-10">
        <div className="bg-[#1a2b25] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <Droplets className="text-primary" size={32} />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-white/80">Water Supply</p>
              <p className="text-[10px] text-white/40">24/7 Pure Water</p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <Shield className="text-primary" size={32} />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-white/80">Security</p>
              <p className="text-[10px] text-white/40">Gated Community</p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <Zap className="text-primary" size={32} />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-white/80">Power</p>
              <p className="text-[10px] text-white/40">Underground Wiring</p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <Wind className="text-primary" size={32} />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-white/80">Greenery</p>
              <p className="text-[10px] text-white/40">Eco Friendly</p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <Home className="text-primary" size={32} />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-white/80">Clubhouse</p>
              <p className="text-[10px] text-white/40">Premium Amenities</p>
            </div>
          </div>
          
          <div className="mt-24 pt-16 border-t border-white/5 flex flex-col items-center">
            <h2 className="text-[12vw] font-heading font-bold tracking-tighter text-white/5 leading-none select-none">Kalamangala</h2>
          </div>
        </div>
      </section>

    </div>
  );
}
