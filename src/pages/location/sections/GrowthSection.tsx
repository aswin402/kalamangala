import img8 from "../../../assets/location-advantage/img8.avif";
import img9 from "../../../assets/location-advantage/img9.webp";
import img10 from "../../../assets/location-advantage/img10.webp";
import img11 from "../../../assets/location-advantage/img11.avif";
import img12 from "../../../assets/location-advantage/img12.avif";

export function GrowthSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-40">
      <div className="text-center mb-16 scroll-reveal">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tighter">
          A Neighbourhood Designed for Growth
        </h2>
        <p className="text-foreground/50 mt-4 max-w-2xl mx-auto italic">
          Positioned in the fastest developing corridor of Erode, ensuring
          your investment grows as the city expands.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-reveal">
        <div className="md:col-span-1 rounded-[2rem] overflow-hidden aspect-square shadow-lg">
          <img
            src={img8}
            alt="Growth 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-1 rounded-[2rem] overflow-hidden aspect-square shadow-lg">
          <img
            src={img9}
            alt="Growth 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-1 rounded-[2rem] overflow-hidden aspect-square shadow-lg">
          <img
            src={img10}
            alt="Growth 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-2 rounded-[2rem] overflow-hidden h-64 shadow-lg">
          <img
            src={img11}
            alt="Growth 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-1 rounded-[2rem] overflow-hidden h-64 shadow-lg">
          <img
            src={img12}
            alt="Growth 5"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
