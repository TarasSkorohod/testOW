"use client";

import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface ITitleProps {
  tag: string;
  cn?: string;
  children: ReactNode;
}

export const Title: FC<ITitleProps> = ({ tag, cn, children }) => {
  const titleAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  switch (tag) {
    case "h1":
      return (
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={titleAnimation}
          viewport={{ once: true }}
          className={`font-extrabold text-[#111827] uppercase text-3xl lg:text-7xl text-center  ${
            cn ? cn : ""
          }`}
        >
          {children}
        </motion.h1>
      );
    case "h2":
      return (
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={titleAnimation}
          viewport={{ once: true }}
          className={`font-extrabold text-[#111827] uppercase text-3xl lg:text-7xl text-center  ${
            cn ? cn : ""
          }`}
        >
          {children}
        </motion.h2>
      );
    case "h4":
      return (
        <motion.h4
          initial="hidden"
          whileInView="visible"
          variants={titleAnimation}
          viewport={{ once: true }}
          className={`font-extrabold text-[#111827] uppercase text-xl lg:text-5xl text-center  ${
            cn ? cn : ""
          }`}
        >
          {children}
        </motion.h4>
      );
    case "h6":
      return (
        <motion.h6
          initial="hidden"
          whileInView="visible"
          variants={titleAnimation}
          viewport={{ once: true }}
          className={`font-extrabold text-[#111827] uppercase text-xl lg:text-2xl text-center  ${
            cn ? cn : ""
          }`}
        >
          {children}
        </motion.h6>
      );
    default:
      return null;
  }
};
