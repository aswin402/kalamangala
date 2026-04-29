import { useState } from "react";
import { motion, type Variants } from "framer-motion";

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
    title: "Signature Tower",
    text: "The landmark tower brings a distinctive identity to The Waterfront community.",
  },
  {
    img: img2,
    title: "Green Walkway",
    text: "Calm pedestrian pathways with shaded trees and thoughtfully planned open spaces.",
  },
  {
    img: img8,
    title: "Temple Zone",
    text: "A peaceful spiritual corner crafted for the community.",
  },
  {
    img: img5,
    title: "Fitness Studio",
    text: "Modern indoor fitness space designed for everyday wellness.",
  },
  {
    img: img7,
    title: "Lakefront View",
    text: "Aerial view of the waterfront landscape, walking tracks and leisure zones.",
  },
  {
    img: img6,
    title: "Sports Turf",
    text: "A covered sports area for active recreation and community play.",
  },
  {
    img: img9,
    title: "Outdoor Court",
    text: "Multi-sport court with open-air play zones and premium flooring.",
  },
  {
    img: img10,
    title: "Waterfront Club House",
    text: "The Waterfront Clubhouse offers a sprawling modern space designed to bring people together.",
  },
  {
    img: img1,
    title: "Community Hall",
    text: "A spacious indoor hall for gatherings, events and community celebrations.",
  },
];

const sectionVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
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
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function ShowcaseGrid() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <motion.section
      className="
        waterfront-animate
        w-full
        px-[13px]
        pb-[72px]
        pt-[24px]
        text-[#17392f]
        sm:px-[22px]
        sm:pb-[90px]
        sm:pt-[44px]
        md:px-[38px]
        md:pb-[120px]
        md:pt-[70px]
      "
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={sectionVariants}
    >
      <div className="mx-auto w-full max-w-[1800px]">
        {/* HEADING */}
        <motion.div
          variants={fadeUp}
          className="
            relative
            mb-[24px]
            flex
            justify-center
            text-center
            sm:mb-[42px]
            md:mb-[78px]
          "
        >
          <span
            className="
              absolute
              left-1/2
              top-[2px]
              z-10
              flex
              -translate-x-[14px]
              items-center
              gap-[4px]
              text-[10px]
              font-extrabold
              uppercase
              leading-none
              tracking-[-0.04em]
              text-[#17392f]
              sm:top-[6px]
              sm:text-[12px]
              md:top-[12px]
              md:-translate-x-[16px]
              md:gap-[5px]
              md:text-[13px]
            "
          >
            <span
              className="
                h-[7px]
                w-[7px]
                rounded-full
                border-[2px]
                border-[#17392f]
                md:h-[8px]
                md:w-[8px]
              "
            />
            Project Images
          </span>

          <h2
            className="
              text-[clamp(70px,19vw,92px)]
              font-medium
              leading-[0.82]
              tracking-[-0.105em]
              text-[#17392f]
              sm:text-[clamp(86px,17vw,130px)]
              md:text-[clamp(110px,12vw,220px)]
              md:leading-[0.78]
              md:tracking-[-0.095em]
            "
          >
            Showcase
          </h2>
        </motion.div>

        {/* IMAGE GRID */}
        <motion.div
          variants={sectionVariants}
          className="grid grid-cols-1 gap-[10px] md:grid-cols-2"
        >
          {showcaseItems.map((item, index) => {
            const isActive = activeCard === index;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
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
                  md:h-[520px]
                  md:rounded-[16px]
                  lg:h-[640px]
                "
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
        </motion.div>
      </div>
    </motion.section>
  );
}