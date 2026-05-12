import { useState } from "react";
import { motion } from "framer-motion";

import { SectionLabel } from "@/components/ui/SectionLabel";

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

const showcaseItems = [
  {
    img: img3,
    title: "Trusted building firm",
    text: "UGC Infrastructure: Power and communication cables are routed separately to prevent interference.\n\nPower Distribution: A centralized grid ensures only one house is affected by outages. EV charging is supported.\n\nCommunication: Three ISP options, one adaptable for intercom.\n\nDrainage & Roads: Heavy-load drainage and durable bituminous roads maintain full width.",
  },
  {
    img: img4,
    title: "Kalamangala 6",
    text: "Our state-of-the-art 1-lakh-liter water tank, with access to water lines and borewell water system ensures uninterrupted water supply throughout the community. Combining aesthetic excellence with functionality, this modern system guarantees your family's daily water needs while also keeping in mind our community's distinctive requirements.",
  },
  {
    img: img2,
    title: "Flowing Water",
    text: "Here, every evening walk becomes a peaceful retreat, and every home enjoys the timeless calmness of flowing water. At The Waterfront, the natural canal isn't just preserved — it's respected. Tree-lined pathways along the Waterfront create perfect walking trails, while thoughtfully designed seating areas invite you to pause and connect with nature. The alternating canopy of trees provides year-round shade and beauty, making living here a refreshing experience.",
  },
  {
    img: img8,
    title: "Temple",
    text: "Discover peace at our Lord Ganesha Temple, surrounded by a beautifully landscaped park, facing an elegant check dam. Built for meditation, yoga, dhyana, festivals and family rituals, the temple offers a calm retreat for spiritual seekers. This tranquil space is ideal for connecting with the divine in a delightful environment, ensuring a perfect balance between nature and spirituality — right at the heart of the community.",
  },
  {
    img: img5,
    title: "Gym Amenities",
    text: "Push your limits and stay fit at our state-of-the-art gymnasium thoughtfully designed for community members of all ages and fitness levels. The gym features high-quality cardio machines, strength training equipment and free weights. An energetic ambience and a functional layout, the gym offers an ideal space for both younger fitness enthusiasts to challenge themselves and for senior residents to maintain vitality and strength — right within your community.",
  },
  {
    img: img7,
    title: "Top 10 Home Builders in Erode",
    text: "Enjoy a thoughtfully designed park that caters to all ages, whether you seek an energizing walk, a peaceful retreat, or a space for social gatherings. The park features a spacious walking track for uninterrupted strolls, ample seating to relax, and lush surroundings. A pleasant check dam adds tranquility, while cushioned EPDM flooring ensures a safe play area for kids. Modern play equipment makes it fun for children, creating a space where everyone can connect and enjoy the outdoors.",
  },
  {
    img: img6,
    title: "Sports Amenities",
    text: "The professionally designed Cricket and Football turf is designed to provide an ideal play area for both budding players and seasoned enthusiasts. The high-quality synthetic surface guarantees durability and performance, while safety nets keep every game secure. It's the perfect setting for friendly matches, practice sessions and building lifelong memories.",
  },
  {
    img: img9,
    title: "Sports Amenities",
    text: "Enjoy the latest sporting sensation alongside classic favorites! The court accommodates the rapidly growing pickleball phenomenon — now taking Erode by storm — alongside traditional basketball and badminton. Why enroll your kids in multiple classes when everything they need is right here? Pickleball's easy learning curve makes it perfect for all ages, while basketball and badminton provide variety. From casual games to serious practice, this dynamic space fosters fitness, skill development, and community — all within your neighborhood.",
  },
  {
    img: img10,
    title: "Waterfront Club House",
    text: "The Waterfront Clubhouse offers a sprawling 5,560 sq. ft. modern space designed to bring people together. It features two multipurpose rooms, spacious common area, kitchen space, visitor's car parking area and well-planned facilities like sleek washrooms. Celebrate special occasions in the beautiful community hall and an Indoor game area to enjoy a quick game, stay fit at the gym — there is something for everyone in your household.",
  },
  {
    img: img1,
    title: "Gated Community Layouts",
    text: "The expansive community hall is perfect for hosting engagements, birthday parties, anniversaries, events and cultural programs. It offers ample comfortable seating for 150–200 pax along with bride and groom rooms and washrooms. A spacious stage, a modern lighting system and facilities for integrating audio and video solutions. Whether it's a family celebration or a community gathering, this hall will make every occasion special.",
  },
];

export function ShowcaseGrid() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      className="w-full pb-[72px] pt-[24px] text-foreground sm:pb-[90px] sm:pt-[44px] md:pb-[120px] md:pt-[70px]"
    >
      <div className="mx-[39px] max-xl:mx-9 max-md:mx-4 max-sm:mx-3">
        {/* HEADING */}
        <div
          className="
            km-reveal-slow
            mb-[24px]
            flex
            justify-center
            text-center
            sm:mb-[42px]
            md:mb-[78px]
          "
        >
          <h2
            className="
              relative
              inline-block
              text-[clamp(70px,19vw,92px)]
              font-medium
              leading-[0.82]
              tracking-[-0.105em]
              text-foreground
              sm:text-[clamp(86px,17vw,130px)]
              md:text-[clamp(110px,12vw,220px)]
              md:leading-[0.78]
              md:tracking-[-0.095em]
            "
          >
            <div 
              className="
                absolute 
                left-[28%] 
                top-[6%] 
                z-10 
                flex 
                -translate-y-1/2 
                sm:left-[30%]
                md:left-[26%] 
                lg:left-[26%]
                md:top-[12%]
              "
            >
              <SectionLabel className="font-bold !text-[9px] sm:!text-[11px] md:!text-[13px] tracking-[-0.02em]">
                Project Images
              </SectionLabel>
            </div>
            Showcase
          </h2>
        </div>

        {/* IMAGE GRID */}
        <div
          className="km-stagger grid grid-cols-1 gap-[10px] md:grid-cols-2"
        >
          {showcaseItems.map((item, index) => {
            const isActive = activeCard === index;

            return (
              <motion.div
                key={index}
                initial="rest"
                animate={isActive ? "hover" : "rest"}
                whileHover="hover"
                onClick={() =>
                  setActiveCard((prev) => (prev === index ? null : index))
                }
                className="
                  group
                  relative
                  h-[260px]
                  cursor-pointer
                  overflow-hidden
                  rounded-[18px]
                  sm:h-[390px]
                  md:h-[420px]
                  md:rounded-[16px]
                  lg:h-[520px]
                  xl:h-[560px]
                  2xl:h-[600px]
                "
              >
                <div
                  data-parallax-img
                  className="absolute left-0 top-[-15%] h-[130%] w-full will-change-transform"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    variants={{
                      rest: {
                        scale: 1,
                        filter: "blur(0px)",
                      },
                      hover: {
                        scale: 1.08,
                        filter: "blur(6px)",
                      },
                    }}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full w-full object-cover"
                  />
                </div>

                <motion.div
                  variants={{
                    rest: {
                      opacity: 0,
                    },
                    hover: {
                      opacity: 1,
                    },
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 bg-black/35"
                />

                <motion.div
                  variants={{
                    rest: {
                      opacity: 0,
                      y: 28,
                    },
                    hover: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    left-0
                    top-0
                    z-10
                    flex
                    h-full
                    w-full
                    flex-col
                    justify-start
                    px-[34px]
                    pt-[32px]
                    text-white
                    sm:px-[38px]
                    sm:pt-[36px]
                    md:px-[34px]
                    md:pt-[34px]
                  "
                >
                  <h3
                    className="
                      mb-[18px]
                      max-w-[760px]
                      text-[18px]
                      font-extrabold
                      leading-none
                      tracking-[-0.045em]
                    "
                  >
                    {item.title}
                  </h3>

                  <div
                    className="
                      max-w-[820px]
                      whitespace-pre-line
                      text-[16px]
                      font-semibold
                      leading-[1.5]
                      tracking-[-0.045em]
                      text-white/95
                    "
                  >
                    {item.text}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}