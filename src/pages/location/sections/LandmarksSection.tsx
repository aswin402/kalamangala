import img2 from "../../../assets/location-advantage/img2.jpg";
import img3 from "../../../assets/location-advantage/img3.jpg";
import img4 from "../../../assets/location-advantage/img4.jpeg";
import img5 from "../../../assets/location-advantage/img5.webp";
import img6 from "../../../assets/location-advantage/img6.jpeg";
import img7 from "../../../assets/location-advantage/img7.jpg";

export function LandmarksSection() {
  const landmarks = [
    {
      title: "Perundurai Railway Station Junction",
      desc: "Erode's most connected railway junction, providing seamless connectivity to major cities across South India.",
      points: ["15 Mins Drive", "Major Junction", "Daily Express Trains"],
      img: img2,
      dark: true,
    },
    {
      title: "Pachaimalai Murugan Temple",
      desc: "A spiritual landmark situated on a serene hilltop, offering peace and divine blessings within minutes of your home.",
      points: ["8 Mins Drive", "Spiritual Landmark", "Scenic Views"],
      img: img3,
      dark: false,
    },
    {
      title: "Collector Office - Erode",
      desc: "The administrative heart of Erode district, ensuring you are close to essential government services and civic bodies.",
      points: ["20 Mins Drive", "Administrative Hub", "Civic Center"],
      img: img4,
      dark: true,
    },
    {
      title: "Le-Meridian & Shopping Center",
      desc: "Premium hospitality and shopping experiences are just around the corner, catering to all your lifestyle and entertainment needs.",
      points: ["25 Mins Drive", "Luxury Hotels", "Retail Therapy"],
      img: img5,
      dark: false,
    },
    {
      title: "Erode Central Bus Stand",
      desc: "The primary hub for intercity and intracity bus services, connecting you effortlessly to the rest of the region.",
      points: ["18 Mins Drive", "Transport Hub", "Frequent Connectivity"],
      img: img6,
      dark: true,
    },
    {
      title: "Cauvery River Viewpoint",
      desc: "Experience the natural beauty of the Cauvery river, a major source of life and beauty for the entire Erode district.",
      points: ["12 Mins Drive", "Natural Beauty", "Evening Spot"],
      img: img7,
      dark: false,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 mb-40">
      <div className="mb-20 text-center scroll-reveal">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tighter">
          Erode's Landmarks —{" "}
          <span className="text-primary italic">All Within Minutes</span>
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        {landmarks.map((l, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-stretch rounded-[3rem] overflow-hidden scroll-reveal shadow-xl ${l.dark ? "bg-[#1a2b25] text-white" : "bg-[#edeae0] text-foreground"}`}
          >
            {i % 2 === 0 ? (
              <>
                <div className="flex-1 min-h-[300px]">
                  <img
                    src={l.img}
                    alt={l.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-12 md:p-16 flex flex-col justify-center gap-6">
                  <h3 className="text-3xl font-heading font-bold tracking-tight">
                    {l.title}
                  </h3>
                  <p
                    className={`${l.dark ? "text-white/60" : "text-foreground/60"} leading-relaxed`}
                  >
                    {l.desc}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {l.points.map((p, idx) => (
                      <div
                        key={idx}
                        className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border ${l.dark ? "border-white/10 bg-white/5" : "border-foreground/10 bg-foreground/5"}`}
                      >
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex-1 p-12 md:p-16 flex flex-col justify-center gap-6 order-2 md:order-1">
                  <h3 className="text-3xl font-heading font-bold tracking-tight">
                    {l.title}
                  </h3>
                  <p
                    className={`${l.dark ? "text-white/60" : "text-foreground/60"} leading-relaxed`}
                  >
                    {l.desc}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {l.points.map((p, idx) => (
                      <div
                        key={idx}
                        className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border ${l.dark ? "border-white/10 bg-white/5" : "border-foreground/10 bg-foreground/5"}`}
                      >
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 min-h-[300px] order-1 md:order-2">
                  <img
                    src={l.img}
                    alt={l.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
