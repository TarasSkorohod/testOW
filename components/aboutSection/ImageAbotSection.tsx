"use client";

import { motion } from "framer-motion";
import { ImagePage } from "../imagePage/ImagePage";
import aboutSection from "@/public/images/aboutSection.png";

export const ImageAboutSection = () => {
  const imageAbout = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={imageAbout}
      viewport={{ once: true }}
      className=" flex justify-center brightness-75 order-1 lg:order-2 mb-8 lg:mb-0"
    >
      <ImagePage img={aboutSection} />
    </motion.div>
  );
};
