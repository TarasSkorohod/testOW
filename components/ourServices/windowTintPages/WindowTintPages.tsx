"use client";
import React, { useState } from "react";
import { Title } from "@/components/title/Title";
import { CustomForm } from "@/components/customForm/CustomForm";

import { Reviews } from "@/components/reviews/Reviews";
import { WindowTintItem } from "@/components/ourServices/windowTintPages/WindowTintItem";
export const textList = [
  "UV Protection",
  "Improved Privacy",
  "Reduced Glare",
  "Added Style",
];
export const textList2 = [
  "70% Heat Rejection",
  "UV Protection",
  "Improved Privacy",
  "Reduced Glare",
  " Improved Comfort",
  "Added Style",
];
export const textList3 = [
  "96% Heat Rejection",
  "UV Protection",
  "Improved Privacy",
  "Reduced Glare",
  "Non-Metallized",
  "Nano-Ceramic",
  "Added Style",
];

export function WindowTintPages() {
  const [currentText, setCurrentText] = useState("PRIME CS");
  const [currentImage, setCurrentImage] = useState("path-to-prime-cs-image");

  const handleButtonClick = (text: string, image: string) => {
    setCurrentText(text);
    setCurrentImage(image);
  };
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
    <div className="container">
      <Title tag="h2" cn="mt-24 sm:mt-[6px] md:mt-[20px] lg:mt-[28px] mb-14">
        Window <span className="text-yellow-500">Tinting</span>
      </Title>
      <div>
        <WindowTintItem />
      </div>

      <div className="pb-20">
        <Title tag="h4" cn="mb-10">
          Contact us
        </Title>
        <CustomForm />
      </div>
    </div>
  );
}
