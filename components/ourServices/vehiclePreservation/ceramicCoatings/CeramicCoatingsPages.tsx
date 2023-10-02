"use client";
import React, { useState } from "react";
import { Title } from "@/components/title/Title";
import { motion } from "framer-motion";
import Image from "next/image";
import { ListTintPages } from "@/components/ourServices/windowTintPages/ListTintPages";

import {
  ceramicCoatingsPagesImages,
  ceramicCoatingsPagesText,
  text1,
  text2,
  text3,
  text4,
} from "@/components/ourServices/vehiclePreservation/ceramicCoatings/ceramicCoatingsData/CeramicCoatingsData";
import { v4 as uuidv4 } from "uuid";

export function CeramicCoatingsPages() {
  const [currentText, setCurrentText] = useState("FULL FRONT");
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
    <div className="py-10">
      <Title tag="h4" cn="mt-24 sm:mt-[6px] md:mt-[20px] lg:mt-[28px] mb-14">
        CERAMIC COATING <span className="text-yellow-500">PACKAGES</span>
      </Title>
      <div className="grid lg:grid-cols-[240px_auto_340px] gap-12  justify-center">
        <div className="m-5 rounded-md" role="group">
          <button
            type="button"
            className={`w-full py-5 rounded text-sm font-medium ${
              currentText === "FULL FRONT"
                ? "text-white bg-gray-900"
                : "text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white"
            }`}
            onClick={() =>
              handleButtonClick("FULL FRONT", "path-to-prime-cs-image.jpg")
            }
          >
            Fusion Lite
          </button>
          <button
            type="button"
            className={`w-full py-5 rounded text-sm font-medium ${
              currentText === "TRACK PACK"
                ? "text-white bg-gray-900"
                : "text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white"
            }`}
            onClick={() =>
              handleButtonClick("TRACK PACK", "path-to-prime-xr-image.jpg")
            }
          >
            Fusion Plus
          </button>
          <button
            type="button"
            className={`w-full py-5 rounded text-sm font-medium ${
              currentText === "FULL BODY"
                ? "text-white bg-gray-900"
                : "text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white"
            }`}
            onClick={() =>
              handleButtonClick("FULL BODY", "path-to-prime-xr-image.jpg")
            }
          >
            Fusion Satin
          </button>
          <button
            type="button"
            className={`w-full py-5 rounded text-sm font-medium ${
              currentText === "FORT KNOX"
                ? "text-white bg-gray-900"
                : "text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white"
            }`}
            onClick={() =>
              handleButtonClick("FORT KNOX", "path-to-prime-cs-image.jpg")
            }
          >
            Fusion Premium
          </button>
        </div>
        <div className=" ">
          {ceramicCoatingsPagesImages.map((item) => {
            return (
              <React.Fragment key={uuidv4()}>
                {currentText === item.title && (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={imageAbout}
                    viewport={{ once: true }}
                    className="  flex justify-center  order-1 lg:order-2 max-w-full"
                  >
                    <Image
                      className=" rounded-2xl lg:rounded-2xl   max-w-full"
                      width={500}
                      height={500}
                      src={item.image}
                      alt="bg"
                    />
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className="flex justify-between ">
          <div className="flex flex-col">
            {ceramicCoatingsPagesText.map((item) => {
              return (
                <React.Fragment key={uuidv4()}>
                  {currentText === item.value && (
                    <h1 className="text-[13px] text-yellow-500 font-semibold">
                      {item.title}
                    </h1>
                  )}
                </React.Fragment>
              );
            })}

            <div>
              <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                {currentText === "FULL FRONT" && (
                  <>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      1-YEAR
                    </h2>

                    <ListTintPages text={text1} />

                  </>
                )}
                {currentText === "TRACK PACK" && (
                  <>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      4-YEAR
                    </h2>

                    <ListTintPages text={text2} />
                  </>
                )}
                {currentText === "FULL BODY" && (
                  <>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      4-YEAR
                    </h2>

                    <ListTintPages text={text3} />
                  </>
                )}
                {currentText === "FORT KNOX" && (
                  <>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      8-YEAR
                    </h2>
                    <ListTintPages text={text4} />
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div></div>
      </div>
      <div className="mb-16">
        {ceramicCoatingsPagesText.map((item) => {
          return (
            <React.Fragment key={uuidv4()}>
              {currentText === item.value && <p>{item.paragraph}</p>}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
