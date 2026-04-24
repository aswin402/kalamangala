import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, TrendingUp, Heart, Layers, Navigation } from 'lucide-react';

// Assets
import img1 from '../assets/location-advantage/img1.avif';
import img2 from '../assets/location-advantage/img2.jpg';
import img3 from '../assets/location-advantage/img3.jpg';
import img4 from '../assets/location-advantage/img4.jpeg';
import img5 from '../assets/location-advantage/img5.webp';
import img6 from '../assets/location-advantage/img6.jpeg';
import img7 from '../assets/location-advantage/img7.jpg';
import img8 from '../assets/location-advantage/img8.avif';
import img9 from '../assets/location-advantage/img9.webp';
import img10 from '../assets/location-advantage/img10.webp';
import img11 from '../assets/location-advantage/img11.avif';
import img12 from '../assets/location-advantage/img12.avif';
import img13 from '../assets/location-advantage/img13.webp';
import img15 from '../assets/location-advantage/img15.webp';

gsap.registerPlugin(ScrollTrigger);

export function LocationAdvantagePage() {
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

  const landmarks = [
    {
      title: "Perundurai Railway Station Junction",
      desc: "Erode's most connected railway junction, providing seamless connectivity to major cities across South India.",
      points: ["15 Mins Drive", "Major Junction", "Daily Express Trains"],
      img: img2,
      dark: true
    },
    {
      title: "Pachaimalai Murugan Temple",
      desc: "A spiritual landmark situated on a serene hilltop, offering peace and divine blessings within minutes of your home.",
      points: ["8 Mins Drive", "Spiritual Landmark", "Scenic Views"],
      img: img3,
      dark: false
    },
    {
      title: "Collector Office - Erode",
      desc: "The administrative heart of Erode district, ensuring you are close to essential government services and civic bodies.",
      points: ["20 Mins Drive", "Administrative Hub", "Civic Center"],
      img: img4,
      dark: true
    },
    {
      title: "Le-Meridian & Shopping Center",
      desc: "Premium hospitality and shopping experiences are just around the corner, catering to all your lifestyle and entertainment needs.",
      points: ["25 Mins Drive", "Luxury Hotels", "Retail Therapy"],
      img: img5,
      dark: false
    },
    {
      title: "Erode Central Bus Stand",
      desc: "The primary hub for intercity and intracity bus services, connecting you effortlessly to the rest of the region.",
      points: ["18 Mins Drive", "Transport Hub", "Frequent Connectivity"],
      img: img6,
      dark: true
    },
    {
      title: "Cauvery River Viewpoint",
      desc: "Experience the natural beauty of the Cauvery river, a major source of life and beauty for the entire Erode district.",
      points: ["12 Mins Drive", "Natural Beauty", "Evening Spot"],
      img: img7,
      dark: false
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-[#f9f8f3] overflow-x-hidden pt-24 pb-20">
      
      {/* Marquee Header */}
      <div className="w-full border-b border-foreground/5 py-4 overflow-hidden bg-white/30 backdrop-blur-sm">
        <div ref={marqueeRef} className="whitespace-nowrap flex gap-8 items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl md:text-6xl font-heading font-bold text-foreground/10 uppercase tracking-tighter">
              Location Advantage. <span className="text-primary italic">Location.</span>
            </span>
          ))}
        </div>
      </div>

      {/* Hero Image */}
      <section className="max-w-[1400px] mx-auto px-6 py-12 scroll-reveal">
        <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[21/9] border-4 border-white">
          <img src={img1} alt="Location Hero" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-32 scroll-reveal">
        <h1 className="text-5xl md:text-8xl font-heading font-bold text-foreground tracking-tighter leading-none mb-6">
          Welcome to <br /> <span className="text-primary">The Waterfront</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-foreground/80 mb-8 italic">Erode's Most Connected Riverside Address</h2>
        <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto">
          Strategically located to offer you the perfect balance between urban convenience and natural serenity. Experience life where everything you need is just a short drive away.
        </p>
      </section>

      {/* Landmarks Rows */}
      <section className="max-w-6xl mx-auto px-6 mb-40">
        <div className="mb-20 text-center scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tighter">Erode's Landmarks — <span className="text-primary italic">All Within Minutes</span></h2>
        </div>
        
        <div className="flex flex-col gap-8">
          {landmarks.map((l, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-stretch rounded-[3rem] overflow-hidden scroll-reveal shadow-xl ${l.dark ? 'bg-[#1a2b25] text-white' : 'bg-[#edeae0] text-foreground'}`}>
              {i % 2 === 0 ? (
                <>
                  <div className="flex-1 min-h-[300px]">
                    <img src={l.img} alt={l.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 p-12 md:p-16 flex flex-col justify-center gap-6">
                    <h3 className="text-3xl font-heading font-bold tracking-tight">{l.title}</h3>
                    <p className={`${l.dark ? 'text-white/60' : 'text-foreground/60'} leading-relaxed`}>{l.desc}</p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      {l.points.map((p, idx) => (
                        <div key={idx} className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border ${l.dark ? 'border-white/10 bg-white/5' : 'border-foreground/10 bg-foreground/5'}`}>
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-1 p-12 md:p-16 flex flex-col justify-center gap-6 order-2 md:order-1">
                    <h3 className="text-3xl font-heading font-bold tracking-tight">{l.title}</h3>
                    <p className={`${l.dark ? 'text-white/60' : 'text-foreground/60'} leading-relaxed`}>{l.desc}</p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      {l.points.map((p, idx) => (
                        <div key={idx} className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border ${l.dark ? 'border-white/10 bg-white/5' : 'border-foreground/10 bg-foreground/5'}`}>
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 min-h-[300px] order-1 md:order-2">
                    <img src={l.img} alt={l.title} className="w-full h-full object-cover" />
                  </div>
                </>
              )}
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
                <th className="px-8 py-6 font-heading text-lg">Landmark</th>
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
                { name: "Collector Office", dist: "8.5 km", time: "20 Mins" },
                { name: "Cauvery River", dist: "4 km", time: "10 Mins" }
              ].map((row, i) => (
                <tr key={i} className="border-b border-foreground/5 hover:bg-foreground/5 transition-colors">
                  <td className="px-8 py-5 font-bold flex items-center gap-3">
                    <MapPin size={16} className="text-primary" />
                    {row.name}
                  </td>
                  <td className="px-8 py-5 text-sm font-medium">{row.dist}</td>
                  <td className="px-8 py-5 text-sm font-bold text-primary flex items-center gap-2">
                    <Clock size={16} />
                    {row.time}
                  </td>
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
          <p className="text-foreground/50 mt-4 max-w-2xl mx-auto italic">Positioned in the fastest developing corridor of Erode, ensuring your investment grows as the city expands.</p>
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
            <h3 className="text-3xl font-heading font-bold text-foreground">Experience The Kalamangala Advantage</h3>
            <p className="text-foreground/60 leading-relaxed">
              Our projects are selected based on strict criteria for connectivity, future growth potential, and quality of life. At The Waterfront, you are not just buying a plot; you are securing a legacy.
            </p>
            <button className="px-8 py-4 bg-[#1a2b25] text-white rounded-full font-bold text-sm hover:scale-105 transition-transform">
               Download Location Map
            </button>
          </div>
          <div className="flex-1 rounded-[2.5rem] overflow-hidden shadow-2xl h-[350px]">
            <img src={img13} alt="Advantage" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Why Choose Feature Cards */}
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

      {/* Final CTA Section */}
      <section className="max-w-[1400px] mx-auto px-6 mb-20 scroll-reveal">
         <div className="relative h-[500px] rounded-[4rem] overflow-hidden shadow-2xl group cursor-pointer">
            <img src={img15} alt="Live Connected" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-10">
               <h2 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter mb-6">
                  Live Connected. <br /> Live Kalamangala.
               </h2>
               <p className="text-white/80 max-w-xl mx-auto text-lg font-medium">
                  Be part of Erode's most prestigious community. Your future home at The Waterfront awaits.
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
