import { motion } from "framer-motion";

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
    blurCard: true,
  },
  {
    img: img4,
    title: "Signature Tower",
    text: "The landmark tower brings a distinctive identity to The Waterfront community.",
    blurCard: false,
  },
  {
    img: img2,
    title: "Green Walkway",
    text: "Calm pedestrian pathways with shaded trees and thoughtfully planned open spaces.",
    blurCard: false,
  },
  {
    img: img8,
    title: "Temple Zone",
    text: "A peaceful spiritual corner crafted for the community.",
    blurCard: false,
  },
  {
    img: img5,
    title: "Fitness Studio",
    text: "Modern indoor fitness space designed for everyday wellness.",
    blurCard: false,
  },
  {
    img: img7,
    title: "Lakefront View",
    text: "Aerial view of the waterfront landscape, walking tracks and leisure zones.",
    blurCard: false,
  },
  {
    img: img6,
    title: "Sports Turf",
    text: "A covered sports area for active recreation and community play.",
    blurCard: false,
  },
  {
    img: img9,
    title: "Outdoor Court",
    text: "Multi-sport court with open-air play zones and premium flooring.",
    blurCard: false,
  },
  {
    img: img10,
    title: "Waterfront Club House",
    text: "The Waterfront Clubhouse offers a sprawling modern space designed to bring people together.",
    blurCard: false,
  },
  {
    img: img1,
    title: "Community Hall",
    text: "A spacious indoor hall for gatherings, events and community celebrations.",
    blurCard: false,
  },
];

const sectionVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 70,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ShowcaseGrid() {
  return (
    <motion.section
      className="waterfront-animate w-full px-[38px] pb-[120px] pt-[70px] text-[#17392f]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={sectionVariants}
    >
      <div className="mx-auto w-full max-w-[1800px]">
        {/* HEADING */}
        <motion.div
          variants={fadeUp}
          className="relative mb-[78px] flex justify-center text-center"
        >
          <span className="absolute left-1/2 top-[12px] z-10 flex -translate-x-[16px] items-center gap-[5px] text-[13px] font-extrabold uppercase leading-none tracking-[-0.035em] text-[#17392f]">
            <span className="h-[8px] w-[8px] rounded-full border-[2px] border-[#17392f]" />
            Project Images
          </span>

          <h2 className="text-[clamp(110px,12vw,220px)] font-medium leading-[0.78] tracking-[-0.095em] text-[#17392f]">
            Showcase
          </h2>
        </motion.div>

        {/* IMAGE GRID */}
        <motion.div
          variants={sectionVariants}
          className="grid grid-cols-1 gap-[10px] md:grid-cols-2"
        >
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group relative h-[640px] overflow-hidden rounded-[16px]"
            >
              <motion.img
                src={item.img}
                alt={item.title}
                variants={{
                  rest: {
                    scale: item.blurCard ? 1.04 : 1,
                    filter: item.blurCard ? "blur(8px)" : "blur(0px)",
                  },
                  hover: {
                    scale: 1.08,
                    filter: "blur(5px)",
                  },
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full w-full object-cover"
              />

              {item.blurCard && (
                <div className="absolute inset-0 bg-[#f4a77f]/25" />
              )}

              {!item.blurCard && (
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
                  className="absolute inset-0 bg-black/25"
                />
              )}

              <motion.div
                variants={{
                  rest: {
                    opacity: item.blurCard ? 1 : 0,
                    y: item.blurCard ? 0 : 28,
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
                className="absolute left-0 top-0 z-10 flex h-full w-full flex-col justify-start px-[32px] pt-[32px] text-white md:px-[34px] md:pt-[34px]"
              >
                <h3 className="mb-[18px] max-w-[760px] text-[18px] font-extrabold leading-none tracking-[-0.045em]">
                  {item.title}
                </h3>

                <div className="max-w-[820px] whitespace-pre-line text-[16px] font-semibold leading-[1.45] tracking-[-0.045em] text-white/90">
                  {item.text}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}