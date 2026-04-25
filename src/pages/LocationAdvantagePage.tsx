import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  MapPin,
  Clock,
  Train,
  Building2,
  ShoppingBag,
  Bus,
  Waves,
  TrendingUp,
  Heart,
  Leaf,
  Home,
  Navigation,
} from 'lucide-react';

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

const bgPattern =
  "url(\"data:image/svg+xml,%3Csvg width='42' height='36' viewBox='0 0 42 36' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23dcd8c4' stroke-width='.8' stroke-opacity='.55'%3E%3Cpath d='M0 9h10.5L21 0l10.5 9H42'/%3E%3Cpath d='M0 27h10.5L21 36l10.5-9H42'/%3E%3Cpath d='M21 0v36'/%3E%3Cpath d='M10.5 9L21 18 31.5 9'/%3E%3Cpath d='M10.5 27L21 18 31.5 27'/%3E%3C/g%3E%3C/svg%3E\")";

export function LocationAdvantagePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const marqueeTween = gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 55,
      repeat: -1,
      ease: 'none',
    });

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.la-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 42, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.la-card').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 45, opacity: 0, scale: 0.985 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });
    }, pageRef);

    return () => {
      marqueeTween.kill();
      ctx.revert();
    };
  }, []);

  const landmarks = [
    {
      title: 'Erode Railway Station',
      time: 'Just 15 Minutes Away',
      desc: 'A major transport gateway connecting Erode with Chennai, Coimbatore, Bengaluru and other important cities. Living close to this railway hub gives residents smooth travel access for work, education and family needs.',
      img: img2,
      icon: Train,
      dark: true,
    },
    {
      title: 'Thindal Kovil',
      time: 'Reachable Within 5 Minutes',
      desc: 'One of Erode’s most loved spiritual landmarks. The temple’s calm surroundings and quick accessibility add cultural value, peace and everyday convenience to the neighbourhood.',
      img: img3,
      icon: Heart,
      dark: false,
    },
    {
      title: 'Collector Office',
      time: 'Only 10 Minutes Away',
      desc: 'The administrative centre of Erode district is close by, making access to civic offices, government departments and public services simple and time-saving.',
      img: img4,
      icon: Building2,
      dark: true,
    },
    {
      title: 'Erode Shopping Centre',
      time: '10 Minutes Away',
      desc: 'From daily essentials to lifestyle shopping, restaurants and entertainment, residents stay close to the city’s active retail and commercial zones.',
      img: img5,
      icon: ShoppingBag,
      dark: false,
    },
    {
      title: 'Erode New Bus Stand',
      time: 'Only 2 Minutes Away',
      desc: 'A key public transport hub with frequent bus connectivity to nearby towns and cities. This makes commuting easy for families, students and working professionals.',
      img: img6,
      icon: Bus,
      dark: true,
    },
    {
      title: 'Cauvery River',
      time: 'Just 2 Minutes Away',
      desc: 'A natural landmark that adds freshness, scenic beauty and calmness to everyday life, creating a rare balance between city access and nature.',
      img: img7,
      icon: Waves,
      dark: false,
    },
  ];

  const tableRows = [
    ['Erode New Bus Stand', '1.2 km', '2 mins'],
    ['Cauvery River', '1 km', '2 mins'],
    ['Thindal Kovil', '2 km', '5 mins'],
    ['Erode Shopping Centre', '5 km', '10 mins'],
    ['Collector Office', '5.5 km', '10 mins'],
    ['Railway Station', '7 km', '15 mins'],
  ];

  const growthCards = [
    {
      title: 'Strong connectivity',
      desc: 'Close to transport, city access and daily movement points.',
      img: img8,
    },
    {
      title: 'Educational zone',
      desc: 'Schools and institutions located within easy reach.',
      img: img9,
    },
    {
      title: 'Healthcare access',
      desc: 'Hospitals and emergency support nearby.',
      img: img10,
    },
    {
      title: 'Commercial growth',
      desc: 'Retail, business and lifestyle zones developing around the location.',
      img: img11,
    },
    {
      title: 'High appreciation',
      desc: 'A fast-growing corridor with strong future value potential.',
      img: img12,
    },
  ];

  const whyCards = [
    {
      title: 'Prime Location',
      desc: 'Placed close to the most important lifestyle and travel points.',
      icon: MapPin,
    },
    {
      title: 'Future Value',
      desc: 'A location with strong growth and appreciation potential.',
      icon: TrendingUp,
    },
    {
      title: 'Convenient Living',
      desc: 'Daily needs, schools, hospitals and shopping within minutes.',
      icon: Home,
    },
    {
      title: 'Natural Harmony',
      desc: 'A peaceful riverside setting with open surroundings.',
      icon: Leaf,
    },
  ];

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#f6f4e7] text-[#132d25]"
      style={{
        backgroundImage: bgPattern,
        backgroundSize: '42px 36px',
      }}
    >
      <section className="w-full overflow-hidden pt-8">
        <div
          ref={marqueeRef}
          className="flex w-max whitespace-nowrap will-change-transform"
        >
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center">
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={`${set}-${i}`}
                  className="pr-1 font-['Inter'] text-[42px] font-medium leading-none tracking-[-0.085em] text-[#122c24] md:text-[62px]"
                >
                  Location.Advantage.Location.
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-[1030px] px-5 la-reveal">
        <div className="mx-auto h-[250px] overflow-hidden rounded-[3px] md:h-[270px]">
          <img src={img1} alt="The Waterfront" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="mx-auto mt-4 max-w-[780px] px-5 text-center la-reveal">
        <h1 className="font-['Inter'] text-[42px] font-black leading-[0.82] tracking-[-0.075em] text-[#142d25] md:text-[70px]">
          Welcome to The
          <br />
          Waterfront
        </h1>

        <h2 className="mt-3 font-['Inter'] text-[18px] font-black leading-none tracking-[-0.055em] text-[#142d25] md:text-[23px]">
          Erode&apos;s Most Connected Riverside Address
        </h2>

        <p className="mx-auto mt-5 max-w-[650px] font-['Inter'] text-[10px] font-medium leading-[1.55] tracking-[-0.025em] text-[#142d25]/80 md:text-[12px]">
          Where every convenience is just a short journey away. At Kalamangala, we
          redefine the idea of luxury not only through location — where life flows
          effortlessly, nature feels near, and the city stays within reach.
        </p>

        <button className="mt-5 rounded-full bg-[#132d25] px-9 py-2 font-['Inter'] text-[10px] font-bold tracking-[-0.03em] text-[#f7d3b5] transition duration-300 hover:scale-105 hover:bg-[#1b3a30]">
          Scroll
        </button>
      </section>

      <section className="mx-auto mt-24 max-w-[1010px] px-5">
        <div className="la-reveal mb-5">
          <h2 className="font-['Inter'] text-[22px] font-black leading-none tracking-[-0.06em] text-[#142d25] md:text-[30px]">
            Erode&apos;s Landmarks — All Within Minutes
          </h2>
          <p className="mt-2 max-w-[760px] font-['Inter'] text-[10px] font-medium leading-[1.5] tracking-[-0.02em] text-[#142d25]/80 md:text-[12px]">
            When you say convenience unlocked, we mean it. Every major landmark of
            Erode is just around the corner. That&apos;s not a promise. That&apos;s
            the power of location.
          </p>
        </div>

        <div className="space-y-8">
          {landmarks.map((item, index) => {
            const Icon = item.icon;
            const imageFirst = index % 2 === 0;

            return (
              <article
                key={item.title}
                className={`la-card grid overflow-hidden rounded-[8px] md:grid-cols-2 ${
                  item.dark
                    ? 'bg-[#132d25] text-[#f7f3df]'
                    : 'bg-[#e8e4bc] text-[#132d25]'
                }`}
              >
                <div
                  className={`h-[250px] p-2 md:h-[300px] ${
                    imageFirst ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full rounded-[5px] object-cover"
                  />
                </div>

                <div
                  className={`flex min-h-[250px] flex-col justify-center px-6 py-7 md:min-h-[300px] md:px-8 ${
                    imageFirst ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <div
                    className={`mb-5 flex h-9 w-9 items-center justify-center rounded-[5px] ${
                      item.dark ? 'bg-[#f0d1a9]/12' : 'bg-[#132d25]/10'
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <h3 className="font-['Inter'] text-[20px] font-black leading-[0.95] tracking-[-0.065em] md:text-[28px]">
                    {item.title}
                  </h3>

                  <p className="mt-1 font-['Inter'] text-[13px] font-black leading-none tracking-[-0.045em]">
                    {item.time}
                  </p>

                  <p
                    className={`mt-5 font-['Inter'] text-[10px] font-medium leading-[1.65] tracking-[-0.02em] md:text-[12px] ${
                      item.dark ? 'text-[#f7f3df]/78' : 'text-[#132d25]/78'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-[900px] px-5 la-reveal">
        <h2 className="mb-7 text-center font-['Inter'] text-[22px] font-black leading-none tracking-[-0.06em] text-[#132d25] md:text-[30px]">
          The Neighbourhood Advantage
        </h2>

        <div className="overflow-hidden">
          <table className="w-full border-collapse font-['Inter'] text-[10px] md:text-[13px]">
            <thead>
              <tr className="bg-[#254f44] text-[#f7f3df]">
                <th className="border border-[#f6f4e7] px-5 py-3 text-center font-bold tracking-[-0.03em]">
                  Landmark
                </th>
                <th className="border border-[#f6f4e7] px-5 py-3 text-center font-bold tracking-[-0.03em]">
                  Distance
                </th>
                <th className="border border-[#f6f4e7] px-5 py-3 text-center font-bold tracking-[-0.03em]">
                  Travel Time
                </th>
              </tr>
            </thead>

            <tbody>
              {tableRows.map((row) => (
                <tr key={row[0]} className="bg-[#ece8cf] text-[#132d25]">
                  {row.map((cell) => (
                    <td
                      key={cell}
                      className="border border-[#f6f4e7] px-5 py-3 text-center font-semibold tracking-[-0.03em]"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-[1010px] px-5">
        <div className="la-reveal mb-6">
          <h2 className="font-['Inter'] text-[22px] font-black leading-none tracking-[-0.06em] text-[#142d25] md:text-[30px]">
            A Neighbourhood Designed for Growth
          </h2>
          <p className="mt-3 max-w-[900px] font-['Inter'] text-[10px] font-medium leading-[1.55] tracking-[-0.02em] text-[#142d25]/80 md:text-[12px]">
            Surrounded by educational institutions, healthcare centres, commercial
            zones, and infrastructure growth, Kalamangala Waterfront brings together
            lifestyle convenience and long-term value.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {growthCards.map((card, index) => (
            <article
              key={card.title}
              className={`la-card group overflow-hidden rounded-[7px] bg-[#132d25] p-2 text-[#f7f3df] ${
                index > 2 ? 'md:col-span-1.5' : ''
              } ${index === 3 ? 'md:col-span-2' : ''}`}
            >
              <div className="h-[125px] overflow-hidden rounded-[4px] md:h-[155px]">
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="px-2 pb-3 pt-4">
                <h3 className="font-['Inter'] text-[14px] font-black leading-none tracking-[-0.05em] md:text-[18px]">
                  {card.title}
                </h3>
                <p className="mt-2 font-['Inter'] text-[9px] font-medium leading-[1.45] tracking-[-0.02em] text-[#f7f3df]/75 md:text-[11px]">
                  {card.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-[1010px] items-center gap-7 px-5 md:grid-cols-2">
        <div className="la-reveal">
          <h2 className="font-['Inter'] text-[22px] font-black leading-[0.98] tracking-[-0.06em] text-[#142d25] md:text-[30px]">
            Experience the Kalamangala
            <br />
            Advantage
          </h2>

          <p className="mt-5 font-['Inter'] text-[10px] font-medium leading-[1.65] tracking-[-0.02em] text-[#142d25]/80 md:text-[12px]">
            A premium address becomes truly valuable when every daily need is
            within reach. The Waterfront gives you connectivity, convenience and a
            peaceful lifestyle in one thoughtfully selected location.
          </p>

          <ul className="mt-5 space-y-2 font-['Inter'] text-[10px] font-bold tracking-[-0.025em] text-[#142d25] md:text-[12px]">
            <li>• Fast access to transport hubs and city movement points</li>
            <li>• Close to schools, hospitals, retail and civic centres</li>
            <li>• Peaceful surroundings with river-side natural value</li>
          </ul>
        </div>

        <div className="la-card h-[355px] overflow-hidden rounded-[7px] md:h-[420px]">
          <img src={img13} alt="Kalamangala Advantage" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-[1010px] items-center gap-7 px-5 md:grid-cols-2">
        <div className="la-card h-[300px] overflow-hidden rounded-[7px] md:h-[355px]">
          <img src={img15} alt="Lifestyle Benefits" className="h-full w-full object-cover" />
        </div>

        <div className="la-reveal">
          <h2 className="font-['Inter'] text-[22px] font-black leading-[0.98] tracking-[-0.06em] text-[#142d25] md:text-[30px]">
            Lifestyle Benefits You&apos;ll Love
          </h2>

          <ul className="mt-5 space-y-2 font-['Inter'] text-[10px] font-semibold leading-[1.45] tracking-[-0.02em] text-[#142d25]/85 md:text-[12px]">
            <li>• Morning walks in a calm and greener neighbourhood</li>
            <li>• Quick drives to schools, shops and daily essentials</li>
            <li>• Better family lifestyle with less travel stress</li>
            <li>• Peaceful surroundings without losing city access</li>
            <li>• A location designed for living and investment</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-[1010px] px-5">
        <h2 className="la-reveal mb-7 font-['Inter'] text-[22px] font-black leading-none tracking-[-0.06em] text-[#132d25] md:text-[30px]">
          Why Choose The Waterfront, Erode
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {whyCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="la-card rounded-[7px] bg-[#ece8cf] p-5 text-[#132d25]"
              >
                <div className="mb-8 flex h-7 w-7 items-center justify-center rounded-[4px] bg-white">
                  <Icon size={14} />
                </div>

                <h3 className="font-['Inter'] text-[17px] font-black leading-none tracking-[-0.055em] md:text-[23px]">
                  {card.title}
                </h3>

                <p className="mt-3 font-['Inter'] text-[10px] font-medium leading-[1.5] tracking-[-0.02em] text-[#132d25]/75 md:text-[12px]">
                  {card.desc}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-[1010px] px-5 pb-24">
        <article className="la-card grid overflow-hidden rounded-[7px] bg-[#132d25] text-[#f7f3df] md:grid-cols-[1.02fr_.98fr]">
          <div className="h-[330px] p-2 md:h-[410px]">
            <img
              src={img1}
              alt="Live Connected"
              className="h-full w-full rounded-[5px] object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-8 md:px-8">
            <Navigation className="mb-5 text-[#f3b489]" size={28} />

            <h2 className="font-['Inter'] text-[25px] font-black leading-[0.92] tracking-[-0.065em] text-[#f3b489] md:text-[38px]">
              Live Connected.
              <br />
              Live Complete.
              <br />
              Live The Waterfront.
            </h2>

            <p className="mt-6 font-['Inter'] text-[10px] font-medium leading-[1.75] tracking-[-0.02em] text-[#f7f3df]/75 md:text-[12px]">
              The Waterfront by Kalamangala is planned for people who want more
              than land. It gives you a connected address, a calm lifestyle and a
              location that supports future growth.
            </p>
          </div>
        </article>

        <div className="la-reveal mt-10 text-center">
          <h2 className="font-['Inter'] text-[20px] font-black leading-none tracking-[-0.055em] text-[#132d25] md:text-[26px]">
            The Waterfront by Kalamangala
          </h2>

          <p className="mx-auto mt-3 max-w-[540px] font-['Inter'] text-[10px] font-medium leading-[1.55] tracking-[-0.02em] text-[#132d25]/75 md:text-[12px]">
            Where every direction leads to convenience, and every day feels closer
            to nature.
          </p>
        </div>
      </section>
    </main>
  );
}