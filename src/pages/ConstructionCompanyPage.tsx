import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, HardHat, Ruler, PenTool, Hammer, TrendingUp, Heart, Layers, Navigation, Star } from 'lucide-react';

// Assets
import img1 from '../assets/construction-company/img1.webp';
import img2 from '../assets/construction-company/img2.webp';
import img3 from '../assets/construction-company/img3.webp';
import img4 from '../assets/construction-company/img4.webp';
import img6 from '../assets/construction-company/img6.webp';
import img7 from '../assets/construction-company/img7.webp';
import img8 from '../assets/construction-company/img8.webp';
import img9 from '../assets/construction-company/img9.webp';
import img10 from '../assets/construction-company/img10.webp';

gsap.registerPlugin(ScrollTrigger);

export function ConstructionCompanyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 22,
        ease: 'none',
      });
    }

    const reveals = containerRef.current?.querySelectorAll('.scroll-reveal');
    reveals?.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  const services = [
    {
      title: "Residential Projects",
      desc: "Crafting beautiful homes that combine comfort, style, and functionality for modern living.",
      img: img2,
      icon: <Building2 size={24} />
    },
    {
      title: "Commercial Projects",
      desc: "Designing and building strategic commercial spaces that drive business growth and efficiency.",
      img: img3,
      icon: <HardHat size={24} />
    },
    {
      title: "Industrial Construction",
      desc: "Robust construction solutions for factories, warehouses, and industrial complexes.",
      img: img4,
      icon: <Layers size={24} />
    },
    {
      title: "Architectural Design & Planning",
      desc: "Visionary designs and meticulous planning to bring your project to life with precision.",
      img: img6,
      icon: <PenTool size={24} />
    },
    {
      title: "Renovations & Remodeling",
      desc: "Transforming existing spaces into modern, functional environments with expert craftsmanship.",
      img: img7,
      icon: <Hammer size={24} />
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-[#f9f8f3] overflow-x-hidden pt-24 pb-20">
      
      {/* Marquee Header */}
      <div className="w-full border-b border-foreground/5 py-4 overflow-hidden bg-white/30 backdrop-blur-sm">
        <div ref={marqueeRef} className="whitespace-nowrap flex gap-8 items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl md:text-6xl font-heading font-bold text-foreground/10 uppercase tracking-tighter">
              Construction. Company. <span className="text-primary italic">Erode.</span>
            </span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-6 py-12 scroll-reveal">
        <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[21/9] border-4 border-white">
          <img src={img1} alt="Construction Hero" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-32 scroll-reveal">
        <h1 className="text-5xl md:text-8xl font-heading font-bold text-foreground tracking-tighter leading-none mb-6">
          Top Construction <br /> <span className="text-primary">Companies in Erode</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-foreground/80 mb-8 italic">Leading Construction Company in Tamil Nadu</h2>
        <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto">
          Kalamangala stands as one of the <span className="text-primary font-bold">top construction companies in Erode</span>. Known for delivering excellence in every structure we create. We specialize in residential, commercial, and industrial projects with a focus on quality, durability, and innovation.
        </p>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-6xl mx-auto px-6 mb-40 scroll-reveal">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-foreground/5">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 tracking-tight">Building the Future with Precision and Passion</h2>
          <div className="grid md:grid-cols-2 gap-12 text-foreground/60 leading-relaxed">
            <p>
              At Kalamangala, we believe that every structure is a testament to our commitment to excellence. Our team of experienced engineers and architects work in tandem to ensure that your vision is realized with the highest standards of quality and safety.
            </p>
            <p>
              We have earned our reputation as a trusted construction partner by maintaining transparency, adhering to timelines, and delivering projects that exceed expectations. From concept to completion, we manage every detail with the utmost care and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Core Construction Services */}
      <section className="max-w-6xl mx-auto px-6 mb-40">
        <div className="mb-20 text-center scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tighter">Our Core Construction Services</h2>
        </div>
        
        <div className="flex flex-col gap-10">
          {services.map((s, i) => (
            <div key={i} className="relative h-[300px] rounded-[2.5rem] overflow-hidden group scroll-reveal shadow-2xl">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b25]/95 via-[#1a2b25]/60 to-transparent p-10 flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary backdrop-blur-md">
                      {s.icon}
                   </div>
                   <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">{s.title}</h3>
                </div>
                <p className="text-white/60 max-w-xl text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                 <Ruler size={20} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Advantage Section (Reuse) */}
      <section className="max-w-6xl mx-auto px-6 mb-20 scroll-reveal">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-[3rem] p-8 shadow-xl border border-foreground/5">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-heading font-bold text-foreground">Experience the Kalamangala Advantage</h3>
            <p className="text-foreground/60 leading-relaxed">
              With decades of experience and a track record of successful projects, Kalamangala is your partner for building a better future. We combine traditional values with modern technology to deliver unmatched results.
            </p>
            <ul className="space-y-4">
              {["Expert Engineering", "Quality Materials", "On-time Delivery", "Transparent Pricing"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-bold text-foreground">
                  <Star size={16} className="text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 rounded-[2.5rem] overflow-hidden shadow-2xl h-[350px]">
            <img src={img8} alt="Advantage" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Lifestyle Benefits Section */}
      <section className="max-w-6xl mx-auto px-6 mb-40 scroll-reveal">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 bg-white rounded-[3rem] p-8 shadow-xl border border-foreground/5">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-heading font-bold text-foreground">Lifestyle Benefits You'll Love</h3>
            <p className="text-foreground/60 leading-relaxed">
              Choosing the right construction partner is about more than just bricks and mortar. It's about the quality of life you'll experience in the spaces we create. 
            </p>
            <div className="grid grid-cols-1 gap-4">
               {["Modern Living Standards", "Energy Efficient Designs", "Sustainable Building Practices"].map((benefit, bIdx) => (
                 <div key={bIdx} className="flex items-center gap-4 p-4 rounded-2xl bg-foreground/5">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                       <HardHat size={16} />
                    </div>
                    <span className="text-sm font-bold text-foreground/80">{benefit}</span>
                 </div>
               ))}
            </div>
          </div>
          <div className="flex-1 rounded-[2.5rem] overflow-hidden shadow-2xl h-[350px]">
            <img src={img10} alt="Lifestyle" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Why Choose Feature Cards (Reuse) */}
      <section className="max-w-6xl mx-auto px-6 mb-40 scroll-reveal">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-heading font-bold text-foreground italic">Why Choose The Waterfront, Erode</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Location Mastery", icon: <Navigation />, desc: "Unmatched connectivity to key city points." },
            { title: "Future Appreciation", icon: <TrendingUp />, desc: "Located in a high-growth investment zone." },
            { title: "Convenient Living", icon: <Layers />, desc: "Schools, hospitals, and malls within reach." },
            { title: "Natural Harmony", icon: <Heart />, desc: "Riverside living with fresh air and views." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] border border-foreground/5 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-foreground/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section (Reuse) */}
      <section className="max-w-[1400px] mx-auto px-6 mb-20 scroll-reveal">
         <div className="relative h-[500px] rounded-[4rem] overflow-hidden shadow-2xl group cursor-pointer border-4 border-white">
            <img src={img9} alt="Live Connected" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-10">
               <h2 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter mb-6">
                  Live Connected. <br /> Live Complete.
               </h2>
               <p className="text-white/80 max-w-xl mx-auto text-lg font-medium">
                  Experience the standard of building excellence with Kalamangala. Let's construct your dream together.
               </p>
               <button className="mt-12 px-12 py-5 bg-primary text-foreground rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors">
                  Work With Us
               </button>
            </div>
         </div>
      </section>

      {/* Huge Logo Footer Section */}
      <section className="w-full pt-40 pb-20 bg-[#1a2b25] flex flex-col items-center overflow-hidden">
        <h2 className="text-[25vw] font-heading font-bold text-primary/5 leading-none select-none pointer-events-none transform translate-y-1/4 uppercase">
          Kalamangala
        </h2>
      </section>

    </div>
  );
}
