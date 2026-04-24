import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, MapPin, Clock, Droplets, TreePine, Zap, Baby, CloudRain, Star, Navigation } from 'lucide-react';

// Assets
import img1 from '../assets/premium-residential-plots-in-coimbatore/img1.jpg';
import img2 from '../assets/premium-residential-plots-in-coimbatore/img2.jpg';
import img3 from '../assets/premium-residential-plots-in-coimbatore/img3.jpg';
import img4 from '../assets/premium-residential-plots-in-coimbatore/img4.jpeg';
import img5 from '../assets/premium-residential-plots-in-coimbatore/img5.webp';
import img6 from '../assets/premium-residential-plots-in-coimbatore/img6.jpeg';
import img7 from '../assets/premium-residential-plots-in-coimbatore/img7.jpg';
import img8 from '../assets/premium-residential-plots-in-coimbatore/img8.avif';
import img9 from '../assets/premium-residential-plots-in-coimbatore/img9.webp';
import img10 from '../assets/premium-residential-plots-in-coimbatore/img10.webp';
import img11 from '../assets/premium-residential-plots-in-coimbatore/img11.avif';
import img12 from '../assets/premium-residential-plots-in-coimbatore/img12.avif';
import img13 from '../assets/premium-residential-plots-in-coimbatore/img13.webp';
import img14 from '../assets/premium-residential-plots-in-coimbatore/img14.webp';
import img15 from '../assets/premium-residential-plots-in-coimbatore/img15.webp';

gsap.registerPlugin(ScrollTrigger);

export function PremiumResidentialPlotsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 25,
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

  const amenities = [
    { title: "Secured Entrance & 24/7 Surveillance", desc: "Your safety is our priority with gated access and CCTV monitoring.", icon: <Shield /> },
    { title: "Wide Paved Roads & Street Lighting", desc: "Well-planned internal roads with modern energy-efficient lighting.", icon: <Navigation /> },
    { title: "Abundant Green Spaces", desc: "Beautifully landscaped parks and gardens for a healthy lifestyle.", icon: <TreePine /> },
    { title: "Water & Drainage Facilities", desc: "Reliable water supply and advanced underground drainage systems.", icon: <Droplets /> },
    { title: "Children's Play Area & Recreational Zones", desc: "Safe spaces for kids to play and communities to interact.", icon: <Baby /> },
    { title: "Rainwater Harvesting & Eco-Friendly Initiatives", desc: "Sustainable living with modern green practices.", icon: <CloudRain /> }
  ];

  const landmarks = [
    { title: "Perundurai Railway Junction", desc: "Direct access to major cities across South India.", dist: "15 Mins", img: img2, dark: true },
    { title: "Pachaimalai Murugan Temple", desc: "Spiritual peace just a short drive away.", dist: "8 Mins", img: img3, dark: false },
    { title: "Collector's Office", desc: "Close to the city's administrative heart.", dist: "20 Mins", img: img4, dark: true },
    { title: "Le-Meridian & Malls", desc: "Luxury and retail therapy at your doorstep.", dist: "25 Mins", img: img5, dark: false },
    { title: "Central Bus Stand", desc: "Seamless intercity connectivity.", dist: "18 Mins", img: img6, dark: true },
    { title: "Cauvery River Viewpoint", desc: "Scenic natural beauty nearby.", dist: "12 Mins", img: img7, dark: false }
  ];

  return (
    <div ref={containerRef} className="w-full bg-[#f9f8f3] overflow-x-hidden pt-24 pb-20">
      
      {/* Marquee Header */}
      <div className="w-full border-b border-foreground/5 py-4 overflow-hidden bg-white/30 backdrop-blur-sm">
        <div ref={marqueeRef} className="whitespace-nowrap flex gap-8 items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl md:text-6xl font-heading font-bold text-foreground/10 uppercase tracking-tighter">
              Premium. Residential. <span className="text-primary italic">Plots.</span>
            </span>
          ))}
        </div>
      </div>

      {/* Hero Image */}
      <section className="max-w-[1400px] mx-auto px-6 py-12 scroll-reveal">
        <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[21/9] border-4 border-white">
          <img src={img1} alt="Coimbatore Plots Hero" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-32 scroll-reveal">
        <h1 className="text-5xl md:text-8xl font-heading font-bold text-foreground tracking-tighter leading-none mb-6">
          Discover Premium <br /> <span className="text-primary">Plots in Coimbatore</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-foreground/80 mb-8 italic">At Kalamangala — Your Dream Canvas</h2>
        <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto">
          We offer meticulously planned residential plots in Coimbatore's fastest-growing corridor. Build your home on a foundation of quality, security, and world-class amenities.
        </p>
      </section>

      {/* Prime Location Text */}
      <section className="max-w-6xl mx-auto px-6 mb-40 scroll-reveal">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-foreground/5 text-center">
           <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">Prime Location — The Heart of Coimbatore's Growth Corridor</h2>
           <p className="text-foreground/60 leading-relaxed max-w-4xl mx-auto">
             Positioned strategically to offer maximum appreciation and convenience. Our plots are located in areas with robust infrastructure development, ensuring a high quality of life and great investment returns.
           </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-40">
        <div className="mb-20 text-center scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tighter">A Premium Gated Community with <br /><span className="text-primary italic">World-Class Amenities</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal">
          {amenities.map((a, i) => (
            <div key={i} className="bg-[#edeae0] p-10 rounded-[2.5rem] border border-foreground/5 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {a.icon}
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2 leading-tight">{a.title}</h4>
              <p className="text-sm text-foreground/50 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section (Landmarks) */}
      <section className="max-w-6xl mx-auto px-6 mb-40">
        <div className="mb-20 text-center scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tighter italic">Why Choose Kalamangala?</h2>
        </div>
        <div className="flex flex-col gap-8">
          {landmarks.map((l, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-stretch rounded-[3rem] overflow-hidden scroll-reveal shadow-xl ${l.dark ? 'bg-[#1a2b25] text-white' : 'bg-white text-foreground'}`}>
              <div className={`flex-1 min-h-[300px] ${i % 2 === 0 ? '' : 'md:order-2'}`}>
                <img src={l.img} alt={l.title} className="w-full h-full object-cover" />
              </div>
              <div className={`flex-1 p-12 md:p-16 flex flex-col justify-center gap-6 ${i % 2 === 0 ? '' : 'md:order-1'}`}>
                <h3 className="text-3xl font-heading font-bold">{l.title}</h3>
                <p className={`${l.dark ? 'text-white/60' : 'text-foreground/60'}`}>{l.desc}</p>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold w-fit ${l.dark ? 'bg-white/10' : 'bg-foreground/5'}`}>
                   <Clock size={14} className="text-primary" />
                   {l.dist}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connectivity Table */}
      <section className="max-w-6xl mx-auto px-6 mb-40 scroll-reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tighter">The Neighbourhood Advantage</h2>
        </div>
        <div className="overflow-hidden rounded-[2.5rem] border border-foreground/5 shadow-2xl bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1a2b25] text-white">
                <th className="px-8 py-6 font-heading text-lg">Location</th>
                <th className="px-8 py-6 font-heading text-lg">Distance</th>
                <th className="px-8 py-6 font-heading text-lg">Travel Time</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              {[
                { name: "Perundurai Road", dist: "1.2 km", time: "3 Mins" },
                { name: "Railway Station", dist: "5 km", time: "12 Mins" },
                { name: "City Center", dist: "7 km", time: "18 Mins" },
                { name: "Sathyamangalam Road", dist: "2 km", time: "5 Mins" },
                { name: "Collector Office", dist: "8.5 km", time: "20 Mins" }
              ].map((row, i) => (
                <tr key={i} className="border-b border-foreground/5 hover:bg-foreground/5 transition-colors">
                  <td className="px-8 py-5 font-bold flex items-center gap-3">
                    <MapPin size={16} className="text-primary" />
                    {row.name}
                  </td>
                  <td className="px-8 py-5 text-sm font-medium">{row.dist}</td>
                  <td className="px-8 py-5 text-sm font-bold text-primary">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Designed for Growth Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-40">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tighter">A Neighbourhood Designed for Growth</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-reveal">
          <div className="md:col-span-1 rounded-[2rem] overflow-hidden aspect-square shadow-lg">
            <img src={img8} alt="Growth 1" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-1 rounded-[2rem] overflow-hidden aspect-square shadow-lg">
            <img src={img9} alt="Growth 2" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-1 rounded-[2rem] overflow-hidden aspect-square shadow-lg">
            <img src={img10} alt="Growth 3" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-2 rounded-[2rem] overflow-hidden h-64 shadow-lg">
             <img src={img11} alt="Growth 4" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-1 rounded-[2rem] overflow-hidden h-64 shadow-lg">
             <img src={img12} alt="Growth 5" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Experience Advantage Section */}
      <section className="max-w-6xl mx-auto px-6 mb-20 scroll-reveal">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-[3rem] p-8 shadow-xl border border-foreground/5">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-heading font-bold text-foreground">Experience the Kalamangala Advantage</h3>
            <p className="text-foreground/60 leading-relaxed">
              We specialize in creating premium residential environments that offer lasting value. Our Coimbatore project is a testament to our commitment to excellence.
            </p>
            <div className="flex flex-col gap-4">
               {["Premium Gated Community", "Strategic Growth Location", "World-Class Amenities"].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-3 text-sm font-bold text-foreground">
                    <Star size={16} className="text-primary" />
                    {item}
                 </div>
               ))}
            </div>
          </div>
          <div className="flex-1 rounded-[2.5rem] overflow-hidden shadow-2xl h-[350px]">
            <img src={img13} alt="Advantage" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Lifestyle Benefits Section */}
      <section className="max-w-6xl mx-auto px-6 mb-40 scroll-reveal">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 bg-white rounded-[3rem] p-8 shadow-xl border border-foreground/5">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-heading font-bold text-foreground">Lifestyle Benefits You'll Love</h3>
            <p className="text-foreground/60 leading-relaxed">
              Live in a community that inspires. From green parks to modern utilities, everything is designed to make your life effortless and joyful.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {["Safe Play Zones", "Green Walkways", "24/7 Security", "Pure Water"].map((l, i) => (
                <li key={i} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/60">
                   <Zap size={14} className="text-primary" />
                   {l}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 rounded-[2.5rem] overflow-hidden shadow-2xl h-[350px]">
            <img src={img15} alt="Lifestyle" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-[1400px] mx-auto px-6 mb-20 scroll-reveal">
         <div className="relative h-[500px] rounded-[4rem] overflow-hidden shadow-2xl group cursor-pointer border-4 border-white">
            <img src={img14} alt="Live Connected" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-10">
               <h2 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter mb-6">
                  Live Connected. <br /> Live Kalamangala.
               </h2>
               <p className="text-white/80 max-w-xl mx-auto text-lg font-medium">
                  Secure your future in Coimbatore's most prestigious gated community.
               </p>
               <button className="mt-12 px-12 py-5 bg-primary text-foreground rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors">
                  Contact Sales Team
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
