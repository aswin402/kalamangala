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
      text: "Start your day connected to the world. The Erode Junction Railway Station, one of South India's busiest transport hubs, is just 15 minutes from The Waterfront. Whether you’re a daily commuter or a frequent traveler, this advantage means less time on the road and more time at home.",
      points: [
        "Quick access to major routes like Coimbatore, Chennai, Trichy, and Salem",
        "Excellent connectivity for professionals working across cities",
        "Ideal for business travelers and families alike",
      ],
      endText:
        "Living this close to the railway station combines urban convenience with suburban calm — a rare luxury in itself.",
      dark: true,
    },
    {
      image: img3,
      title: "Thindal Kovil",
      time: "Reachable Within 5 Minutes",
      text: "A peaceful spiritual landmark close to your home, adding cultural value and everyday calm to the neighbourhood.",
      points: [
        "Easy access for daily worship and family visits",
        "A calm landmark that adds emotional value to the location",
        "Perfect for families looking for peaceful surroundings",
      ],
      endText:
        "A home near such a meaningful landmark gives your lifestyle a balance of comfort, culture, and peace.",
      dark: false,
    },
    {
      image: img4,
      title: "Collector Office",
      time: "Only 10 Minutes Away",
      text: "Important civic and administrative facilities are located within a short drive, making daily requirements easier and more convenient.",
      points: [
        "Quick access to key government offices",
        "Saves time for documentation and administrative needs",
        "Adds strong civic convenience to the location",
      ],
      endText:
        "This close proximity makes The Waterfront a practical and well-connected choice for modern families.",
      dark: true,
    },
    {
      image: img5,
      title: "Erode Shopping Centre",
      time: "10 Minutes Away",
      text: "Daily shopping, essentials, restaurants, and city conveniences remain close to your address without disturbing the calm of your home.",
      points: [
        "Close to supermarkets, stores, and restaurants",
        "Easy access to lifestyle and daily essentials",
        "Perfect balance between city access and peaceful living",
      ],
      endText:
        "You get the comfort of a serene home while staying connected to the city’s everyday conveniences.",
      dark: false,
    },
    {
      image: img6,
      title: "Erode New Bus Stand",
      time: "Only 20 Minutes Away",
      text: "Easy regional connectivity for work, travel, education, and family movement, all within a comfortable travel distance.",
      points: [
        "Convenient access to nearby towns and cities",
        "Helpful for students, professionals, and families",
        "Smooth travel options for daily and occasional journeys",
      ],
      endText:
        "Being close to the bus stand makes travel simpler while keeping your home environment peaceful.",
      dark: true,
    },
    {
      image: img7,
      title: "Cauvery River",
      time: "Just 2 Minutes Away",
      text: "Enjoy calm natural surroundings and a scenic lifestyle advantage near the river, bringing freshness to everyday living.",
      points: [
        "Beautiful natural surroundings close to home",
        "Peaceful environment away from city noise",
        "Adds a resort-like calmness to everyday life",
      ],
      endText:
        "The river-side advantage gives The Waterfront a rare sense of nature, openness, and relaxed living.",
      dark: false,
    },
  ];

  return (
    <section className="mx-auto mt-[48px] w-full max-w-[1480px] px-5 xl:px-0 3xl:max-w-[1800px] md:mt-[58px]">
      <h2
        className="
          km-reveal
          text-left
          font-['Inter',sans-serif]
          text-[36px]
          font-bold
          leading-none
          tracking-[-0.07em]
          text-[#17352d]
          sm:text-[44px]
          md:text-[52px]
          xl:text-[48px]
        "
      >
        Why Choose Kalamangala?
      </h2>

      <div className="mt-[28px] flex flex-col gap-[34px] md:mt-[30px]">
        {whyCards.map((item, index) => (
          <article
            key={item.title}
            className={`
              km-reveal
              overflow-hidden
              rounded-[22px]
              md:rounded-[24px]
              ${item.dark ? "text-[#fff8df]" : "text-[#17352d]"}
            `}
            style={{
              backgroundColor: item.dark ? DARK : SOFT,
            }}
          >
            <div
              className={`
                grid
                grid-cols-1
                md:grid-cols-[1fr_1fr]
                xl:min-h-[390px]
                2xl:min-h-[390px]
                ${index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}
              `}
            >
              {/* Image */}
              <div
                className="
                  h-[280px]
                  overflow-hidden
                  p-[18px]
                  pb-0
                  md:h-auto
                  md:p-[18px]
                  xl:p-[18px]
                "
              >
                <div className="h-full w-full overflow-hidden rounded-[14px] md:rounded-[16px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className="
                  flex
                  flex-col
                  justify-center
                  px-[26px]
                  py-[34px]
                  sm:px-[36px]
                  md:px-[40px]
                  md:py-[40px]
                  lg:px-[48px]
                  xl:px-[34px]
                  2xl:px-[40px]
                "
              >
                <h3
                  className="
                    max-w-[650px]
                    font-['Inter',sans-serif]
                    text-[30px]
                    font-bold
                    leading-[0.98]
                    tracking-[-0.065em]
                    sm:text-[38px]
                    md:text-[36px]
                    lg:text-[38px]
                    xl:text-[34px]
                    2xl:text-[34px]
                  "
                >
                  {item.title}
                  <br />
                  {item.time}
                </h3>

                <div
                  className={`
                    mt-[44px]
                    max-w-[760px]
                    font-['Inter',sans-serif]
                    text-[15px]
                    font-semibold
                    leading-[1.35]
                    tracking-[-0.025em]
                    sm:text-[16px]
                    md:text-[15px]
                    lg:text-[16px]
                    xl:text-[15.5px]
                    2xl:text-[15.5px]
                    ${item.dark ? "text-white" : "text-[#17352d]"}
                  `}
                >
                  <p>{item.text}</p>

                  <ul className="mt-[6px] list-disc space-y-[2px] pl-[18px]">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <p className="mt-[6px]">{item.endText}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}