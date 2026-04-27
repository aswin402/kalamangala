import img2 from "../../../assets/location-advantage/img2.jpg";
import img3 from "../../../assets/location-advantage/img3.jpg";
import img4 from "../../../assets/location-advantage/img4.jpeg";
import img5 from "../../../assets/location-advantage/img5.webp";
import img6 from "../../../assets/location-advantage/img6.jpeg";
import img7 from "../../../assets/location-advantage/img7.jpg";

type Landmark = {
  title: string;
  time: string;
  intro?: string;
  desc: string;
  points: string[];
  outro?: string;
  img: string;
  dark: boolean;
};

export function LandmarksSection() {
  const landmarks: Landmark[] = [
    {
      title: "Erode Railway Station",
      time: "Just 15 Minutes Away",
      intro: "Start your day connected to the world.",
      desc: "The Erode Junction Railway Station, one of South India’s busiest transport hubs, is just 15 minutes from The Waterfront. Whether you’re a daily commuter or a frequent traveler, this advantage means less time on the road and more time at home.",
      points: [
        "Quick access to major routes like Coimbatore, Chennai, Trichy, and Salem",
        "Excellent connectivity for professionals working across cities",
        "Ideal for business travelers and families alike",
      ],
      outro:
        "Living this close to the railway station combines urban convenience with suburban calm — a rare luxury in itself.",
      img: img2,
      dark: true,
    },
    {
      title: "Thindal Kovil",
      time: "Reachable Within 5 Minutes",
      desc: "One of Erode’s most sacred landmarks, Thindal Murugan Temple, lies just 5 minutes away from The Waterfront. The golden towers of the temple not only symbolize divinity but also cultural pride — making this location truly blessed.",
      points: [
        "Ideal morning visits without traffic",
        "Peaceful surroundings for a calm, family-friendly life",
        "Temple festivals and traditions easily accessible",
      ],
      outro:
        "For families who value culture, faith, and peace, this proximity adds an emotional dimension to luxury living.",
      img: img3,
      dark: false,
    },
    {
      title: "Collector Office",
      time: "Only 10 Minutes Away",
      desc: "Efficiency is about being close to what matters — and with Erode’s Collector Office just 10 minutes away, you stay near the administrative and civic heart of the district.",
      points: [
        "Quick access for official documentation and services",
        "Smooth road connectivity via Thindal and Erode Ring Road",
        "Well-developed infrastructure surrounding this area",
      ],
      outro:
        "It’s not just convenience — it’s an advantage that simplifies your daily life and future planning.",
      img: img4,
      dark: true,
    },
    {
      title: "Erode Shopping Centre",
      time: "10 Minutes Away",
      intro: "City lifestyle meets modern luxury here.",
      desc: "In just 10 minutes, you can step into Erode Shopping Centre — a vibrant retail destination offering everything from global brands to local essentials.",
      points: [
        "Easy access to fashion stores, supermarkets, cafés, and entertainment",
        "Weekend plans simplified for families and couples",
        "Active lifestyle choices close to home",
      ],
      outro:
        "Enjoy the best of both worlds — a day out in the city and a calm evening back home by the river.",
      img: img5,
      dark: false,
    },
    {
      title: "Erode New Bus Stand",
      time: "Only 2 Minutes Away",
      desc: "Yes, you read that right — just 2 minutes from your doorstep lies the Erode New Bus Stand, making intercity and local travel effortless.",
      points: [],
      outro:
        "Whether it’s a quick trip to Coimbatore or a weekend getaway to Ooty, your travel hub is right next to your community. This also enhances property value and connectivity, making The Waterfront one of the most strategic locations in Erode’s residential map.",
      img: img6,
      dark: true,
    },
    {
      title: "Cauvery River",
      time: "Just 2 Minutes Away",
      desc: "Imagine waking up to the soft breeze and panoramic view of the Cauvery River, only 2 minutes away. This isn’t just proximity — it’s privilege. The calming river view adds unmatched aesthetic and emotional value to your lifestyle.",
      points: [
        "Serene morning views and nature-filled evenings",
        "Perfect for evening walks, picnics, and meditation",
        "Enhances air quality and reduces city noise",
      ],
      outro:
        "It’s rare to find such a setting — a home close to water, close to the city, and close to heart.",
      img: img7,
      dark: false,
    },
  ];

  return (
    <section className="mx-auto mt-[92px] w-full max-w-[1490px] px-5 md:px-8">
      <div className="la-reveal mb-[34px]">
        <h2 className="font-['Inter'] text-[34px] font-black leading-[0.95] tracking-[-0.065em] text-[#132d25] md:text-[46px]">
          Erode&apos;s Landmarks — All Within Minutes
        </h2>

        <p className="mt-[14px] max-w-[1040px] font-['Inter'] text-[18px] font-black leading-[1.16] tracking-[-0.052em] text-[#132d25] md:text-[24px]">
          When we say convenience redefined, we mean it. Every major landmark of
          Erode is just around the corner. Here&apos;s how close your next home
          truly is 👇
        </p>
      </div>

      <div className="flex flex-col gap-[34px]">
        {landmarks.map((item, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <article
              key={item.title}
              className={`la-card grid min-h-[395px] overflow-hidden rounded-[24px] p-[20px] md:grid-cols-[0.96fr_1.04fr] md:gap-[42px] ${
                item.dark
                  ? "bg-[#173a31] text-[#f7f3df]"
                  : "bg-[#e8e5b8] text-[#132d25]"
              }`}
            >
              <div
                className={`h-[310px] overflow-hidden rounded-[12px] md:h-[355px] ${
                  imageFirst ? "md:order-1" : "md:order-2"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div
                className={`flex min-h-[355px] flex-col justify-center py-8 md:py-0 ${
                  imageFirst ? "md:order-2" : "md:order-1"
                }`}
              >
                <h3 className="max-w-[620px] font-['Inter'] text-[30px] font-black leading-[0.92] tracking-[-0.065em] md:text-[36px]">
                  {item.title}
                  <br />
                  {item.time}
                </h3>

                <div
                  className={`mt-[46px] max-w-[650px] font-['Inter'] text-[14px] font-black leading-[1.28] tracking-[-0.035em] md:text-[15.5px] ${
                    item.dark ? "text-[#f7f3df]/95" : "text-[#132d25]/95"
                  }`}
                >
                  {item.intro && <p>{item.intro}</p>}

                  <p>{item.desc}</p>

                  {item.points.length > 0 && (
                    <ul className="mt-[2px] list-disc pl-[19px]">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {item.outro && <p>{item.outro}</p>}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}