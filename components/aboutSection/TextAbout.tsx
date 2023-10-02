"use client";

import { motion } from "framer-motion";
import { TextPage } from "../textPage/TextPage";

export function TextAbout() {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: any) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.4,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex order-2 lg:order-1 flex-col px-10 md:px-10"
    >
      <motion.div
        custom={0}
        variants={textAnimation}
        viewport={{ once: true }}
        className="leading-6 text-[16px] mb-6 w-full"
      >
        <TextPage>
          Welcome to <strong>Capital Upfitters</strong>, the family-owned
          epicenter of top-tier auto customization, vehicle preservation, and
          performance enhancements. With a heritage of over 35 years in the
          industry, we proudly deliver unparalleled fleet customization services
          and robust protection coatings to a diverse range of clients, from
          municipal to retail sectors.
        </TextPage>
      </motion.div>
      <motion.div
        custom={1}
        variants={textAnimation}
        viewport={{ once: true }}
        className="leading-6 text-[16px]  mb-2 w-full"
      >
        <TextPage>
          Our reputation as a trailblazer stems from our continuous commitment
          to superior craftsmanship, delivering innovative auto customization
          and performance solutions that truly redefine automotive excellence.
        </TextPage>
      </motion.div>
    </motion.div>
  );
}
