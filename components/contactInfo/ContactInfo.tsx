import React, { FC, useEffect } from "react";
import { Logo } from "../logo/Logo";
import { CloseButton } from "../closeButton/CloseButton";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { TbMailFilled } from "react-icons/tb";
import MyMapPage from "@/components/googleMaps/MyMap";

interface IContactInfo {
  openContactInfo: boolean;
  handleContactInfo: (status: boolean) => void;
}

export const ContactInfo: FC<IContactInfo> = ({
  handleContactInfo,
  openContactInfo,
}) => {
  useEffect(() => {
    if (openContactInfo) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [openContactInfo]);

  return (
    <div className="absolute">
      <div
        className={`overflow-y-auto z-30 transition duration-[800ms] ease-in-out border-white border-l-[1px] ${
          openContactInfo ? "translate-x-0" : "translate-x-[100%]"
        } fixed min-w-[80px] max-w-[400px] w-full min-h-full top-0 right-0 z-20`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative bg-[#111827] w-full z-20 h-screen border-l-[3px] overflow-y-auto`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center ">
              <Logo />
            </div>
            <div className="w-[80px] h-[80px] flex items-center justify-center bg-[#111827]">
              <CloseButton handleMenu={() => handleContactInfo(false)} />
            </div>
          </div>
          <div className="py-8 px-8">
            {" "}
            <h4 className="uppercase text-[24px] text-start font-extrabold text-slate-300 mb-8">
              Contact Info
            </h4>
            <div className="py-4">
              <BsFillTelephoneFill
                size={20}
                className="w-auto h-full  text-slate-100  cursor-pointer mb-2"
              />
              <a
                className="w-auto h-full text-base text-slate-100 hover:text-yellow-500 cursor-pointer line"
                href="tel:123-456-7891"
              >
                123-456-7891
              </a>
            </div>
            <div className="py-4">
              <TbMailFilled
                size={20}
                className="w-auto h-full  text-slate-100  cursor-pointer mb-2"
              />
              <a
                className="w-auto h-full text-base text-slate-100 hover:text-yellow-500 cursor-pointer line"
                href="mailto:info@mailauto.com"
              >
                info@mailauto.com
              </a>
            </div>
            <div className="py-4">
              <SiGooglemaps
                size={20}
                className="w-auto h-full  text-slate-100  cursor-pointer mb-2"
              />
              <a
                className="w-auto h-full text-base text-slate-100 hover:text-yellow-500 cursor-pointer line"
                href="https://www.google.com/maps/place/Capital+Upfitters+Auto+%26+Truck+Accessories/@39.051219,-77.108649,20z/data=!4m6!3m5!1s0x89b7cc2ec94dd327:0x4a6cc2fbd0961fb1!8m2!3d39.0512397!4d-77.1087077!16s%2Fg%2F11cmybdfrz?hl=en-US&entry=ttu"
              >
                12019 Nebel St, Rockville, MD 20852
              </a>
            </div>
            <div className=" border-white border-b-[1px] w-full"></div>
            <MyMapPage />
            <div className="flex items-center gap-4 py-4">
              <a href="https://www.instagram.com/">
                <BsInstagram
                  size={17}
                  className="text-slate-100 cursor-pointer hover:text-yellow-500 transition"
                />
              </a>
              <a href="https://www.facebook.com/">
                <BsFacebook
                  size={17}
                  className="text-slate-100 cursor-pointer hover:text-yellow-500 transition"
                />
              </a>
              <a href="https://twitter.com/">
                {" "}
                <BsTwitter
                  size={17}
                  className="text-slate-100 cursor-pointer hover:text-yellow-500 transition"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {openContactInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
            }}
            className={`fixed top-0 left-0 w-full h-full  backdrop-blur-[4px] z-20`}
            onClick={() => {
              handleContactInfo(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
