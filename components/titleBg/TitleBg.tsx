"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface TitleBgProps {
  children: string;
}

export const TitleBg: FC<TitleBgProps> = ({ children }) => {
  const arrLetter = children.split("");

  const bigTitleAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom: any) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };
  return (
    <motion.div className="overflow-hidden text-7xl sm:text-8xl md:text-9xl lg:text-[228px] font-black opacity-10 text-center z-[-10] sticky bottom-[100px]">
      {arrLetter.map((item, i) => {
        return (
          <motion.span
            initial="hidden"
            whileInView="visible"
            key={i}
            custom={i}
            variants={bigTitleAnimation}
          >
            {item}
          </motion.span>
        );
      })}
    </motion.div>
  );
};
