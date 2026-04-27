import { Clock } from "lucide-react";
import img2 from "../../../../assets/premium-residential-plots-in-coimbatore/img2.jpg";
import img3 from "../../../../assets/premium-residential-plots-in-coimbatore/img3.jpg";
import img4 from "../../../../assets/premium-residential-plots-in-coimbatore/img4.jpeg";
import img5 from "../../../../assets/premium-residential-plots-in-coimbatore/img5.webp";
import img6 from "../../../../assets/premium-residential-plots-in-coimbatore/img6.jpeg";
import img7 from "../../../../assets/premium-residential-plots-in-coimbatore/img7.jpg";

export function LandmarksSection() {
  const landmarks = [
    {
      title: "Perundurai Railway Junction",
      desc: "Direct access to major cities across South India.",
      dist: "15 Mins",
      img: img2,
      dark: true,
    },
    {
      title: "Pachaimalai Murugan Temple",
      desc: "Spiritual peace just a short drive away.",
      dist: "8 Mins",
      img: img3,
      dark: false,
    },
    {
      title: "Collector's Office",
      desc: "Close to the city's administrative heart.",
      dist: "20 Mins",
      img: img4,
      dark: true,
    },
    {
      title: "Le-Meridian & Malls",
      desc: "Luxury and retail therapy at your doorstep.",
      dist: "25 Mins",
      img: img5,
      dark: false,
    },
    {
      title: "Central Bus Stand",
      desc: "Seamless intercity connectivity.",
      dist: "18 Mins",
      img: img6,
      dark: true,
    },
    {
      title: "Cauvery River Viewpoint",
      desc: "Scenic natural beauty nearby.",
      dist: "12 Mins",
      img: img7,
      dark: false,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 mb-40">
      <div className="mb-20 text-center scroll-reveal">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tighter italic">
          Why Choose Kalamangala?
        </h2>
      </div>
      <div className="flex flex-col gap-8">
        {landmarks.map((l, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-stretch rounded-[3rem] overflow-hidden scroll-reveal shadow-xl ${l.dark ? "bg-[#1a2b25] text-white" : "bg-white text-foreground"}`}
          >
            <div
              className={`flex-1 min-h-[300px] ${i % 2 === 0 ? "" : "md:order-2"}`}
            >
              <img
                src={l.img}
                alt={l.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`flex-1 p-12 md:p-16 flex flex-col justify-center gap-6 ${i % 2 === 0 ? "" : "md:order-1"}`}
            >
              <h3 className="text-3xl font-heading font-bold">{l.title}</h3>
              <p
                className={`${l.dark ? "text-white/60" : "text-foreground/60"}`}
              >
                {l.desc}
              </p>
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold w-fit ${l.dark ? "bg-white/10" : "bg-foreground/5"}`}
              >
                <Clock size={14} className="text-primary" />
                {l.dist}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
