"use client";

import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface IButtonProps {
  children: ReactNode;
  outline: boolean;
  cn?: string;
  handleClick: () => void;
  type: "button" | "submit" | "reset";
}

export const Button: FC<IButtonProps> = ({
  children,
  outline,
  cn,
  handleClick,
  type,
}) => {
  return (
    <motion.button
      whileHover={{
        backgroundColor: outline ? "#000000" : "#ffffff",
        color: outline ? "#ffffff" : "#000000",
      }}
      className={`font-medium py-2 px-8 border-[1px] border-black border-solid rounded-md
      ${outline ? "bg-inherit text-[#111827]" : "bg-[#111827] text-white"}`}
      onClick={handleClick}
      type={type ? type : "button"}
    >
      {children}
    </motion.button>
  );
};
