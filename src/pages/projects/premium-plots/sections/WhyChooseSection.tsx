import img2 from "../../../../assets/premium-residential-plots-in-coimbatore/img2.jpg";
import img3 from "../../../../assets/premium-residential-plots-in-coimbatore/img3.jpg";
import img4 from "../../../../assets/premium-residential-plots-in-coimbatore/img4.jpeg";
import img5 from "../../../../assets/premium-residential-plots-in-coimbatore/img5.webp";
import img6 from "../../../../assets/premium-residential-plots-in-coimbatore/img6.jpeg";
import img7 from "../../../../assets/premium-residential-plots-in-coimbatore/img7.jpg";

const DARK = "#17352d";
const SOFT = "#ded9ad";

export function WhyChooseSection() {
  const whyCards = [
    {
      image: img2,
      title: "Erode Railway Station",
      time: "Just 15 Minutes Away",
      text: "Stay connected to major towns and cities with easy railway access from the community.",
      dark: true,
    },
    {
      image: img3,
      title: "Thindal Kovil",
      time: "Reachable Within 5 Minutes",
      text: "A peaceful spiritual landmark close to your home, adding cultural value to the neighbourhood.",
      dark: false,
    },
    {
      image: img4,
      title: "Collector Office",
      time: "Only 10 Minutes Away",
      text: "Important civic and administrative facilities are located within a short drive.",
      dark: true,
    },
    {
      image: img5,
      title: "Erode Shopping Centre",
      time: "10 Minutes Away",
      text: "Daily shopping, essentials, restaurants, and city conveniences remain close to your address.",
      dark: false,
    },
    {
      image: img6,
      title: "Erode New Bus Stand",
      time: "Only 20 Minutes Away",
      text: "Easy regional connectivity for work, travel, education, and family movement.",
      dark: true,
    },
    {
      image: img7,
      title: "Cauvery River",
      time: "Just 2 Minutes Away",
      text: "Enjoy the calm natural surroundings and scenic lifestyle advantage near the river.",
      dark: false,
    },
  ];

  return (
    <section className="mt-8 md:mt-12">
      <h2 className="km-reveal text-[20px] font-black tracking-[-0.06em] sm:text-[25px]">
        Why Choose Kalamangala?
      </h2>

      <div className="mt-4 flex flex-col gap-7">
        {whyCards.map((item, index) => (
          <article
            key={item.title}
            className={`km-reveal overflow-hidden rounded-[9px] ${
              item.dark ? "text-white" : "text-black"
            }`}
            style={{
              backgroundColor: item.dark ? DARK : SOFT,
            }}
          >
            <div
              className={`grid min-h-[160px] grid-cols-1 md:min-h-[178px] md:grid-cols-2 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="h-[140px] overflow-hidden md:h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center px-7 py-7 md:px-10">
                <p className="mb-1 text-[8px] font-bold uppercase tracking-[0.08em] opacity-60">
                  Landmark
                </p>

                <h3 className="text-[16px] font-black leading-[0.96] tracking-[-0.055em] sm:text-[20px]">
                  {item.title}
                  <br />
                  {item.time}
                </h3>

                <p
                  className={`mt-4 max-w-[360px] text-[10px] font-medium leading-[1.45] tracking-[-0.02em] sm:text-[11px] ${
                    item.dark ? "text-white/75" : "text-black/75"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
