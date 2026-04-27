import img1 from "../../../../assets/thewaterfront/img1.avif";
import img2 from "../../../../assets/thewaterfront/img2.png";
import img3 from "../../../../assets/thewaterfront/img3.png";
import img4 from "../../../../assets/thewaterfront/img4.png";
import img5 from "../../../../assets/thewaterfront/img5.png";
import img6 from "../../../../assets/thewaterfront/img6.png";
import img7 from "../../../../assets/thewaterfront/img7.png";
import img8 from "../../../../assets/thewaterfront/img8.png";
import img9 from "../../../../assets/thewaterfront/img9.png";
import img10 from "../../../../assets/thewaterfront/img10.png";

export function ShowcaseGrid() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <section className="max-w-6xl mx-auto px-6 mb-32">
      <div className="text-center mb-16">
        <h2 className="text-6xl md:text-8xl font-heading font-bold text-foreground tracking-tighter opacity-10 uppercase select-none">
          Showcase
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto -mt-6 rounded-full"></div>
      </div>
      <div className="columns-1 md:columns-2 gap-8 space-y-8">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="break-inside-avoid rounded-[1.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
          >
            <img
              src={img}
              alt={`Showcase ${idx}`}
              className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
