"use client";
import { FC } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";
import { usePathname } from "next/navigation";
interface IStylingProps {
  handleMenu: (status: boolean) => void;
  openStyling: boolean;
  handleStyling: (Styling: boolean) => void;
  isDesktop: boolean;
}

export const Styling: FC<IStylingProps> = ({ handleMenu, openStyling, handleStyling, isDesktop }) => {
  const pathname = usePathname();
  return (
    <li
      className="w-auto pl-4 py-1 lg:flex lg:justify-center"
      onMouseLeave={() => {
        if (!isDesktop) {
          return;
        }
        handleStyling(false);
      }}
      onMouseEnter={() => {
        if (!isDesktop) {
          return;
        }
        handleStyling(true);
      }}
    >
      <div className="flex items-center justify-between  w-full">
        <Link
          className={`inline h-full text-sm text-slate-100 hover:text-yellow-500 cursor-pointer line ${
            pathname === "/our-services/styling" ? "text-yellow-500 active-line" : ""
          }`}
          href={`/our-services/styling`}
          onClick={() => {
            handleMenu(false);
          }}
        >
          Styling & Perfomance
        </Link>
        <motion.div
          animate={{ rotate: openStyling ? 180 : 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="cursor-pointer"
          onClick={() => handleStyling(!openStyling)}
        >
          <IoMdArrowDropdown color={"#f1f5f9"} size={25} />
        </motion.div>
      </div>

      <AnimatePresence>
        {openStyling && (
          <motion.ul
            initial={
              !isDesktop
                ? {
                    height: 0,
                  }
                : { opacity: 0 }
            }
            animate={
              !isDesktop
                ? {
                    height: "auto",
                  }
                : { opacity: 1 }
            }
            exit={!isDesktop ? { height: 0 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`overflow-hidden pl-4 lg:px-4 static lg:shadow-xl lg:absolute lg:left-[212px] lg:bg-[#111827] lg:w-full min-w-auto lg:min-w-[220px] lg:overflow-visible`}
          >
            <li className="mt-0 pt-2 w-auto px-4 py-1 lg:mt-4">
              <Link
                className={`text-sm inline h-full text-slate-100 hover:text-yellow-500 cursor-pointer line ${
                  pathname === "/our-services/styling/wheels-tires" ? "text-yellow-500 active-line" : ""
                }`}
                href={`/our-services/styling/wheels-tires`}
                onClick={() => {
                  handleMenu(false);
                }}
              >
                Wheels & Tires
              </Link>
            </li>
            <li className="inline px-4 py-1 transition">
              <Link
                className={`text-sm w-auto h-full text-slate-100 hover:text-yellow-500 cursor-pointer line ${
                  pathname === "/our-services/styling/suspension" ? "text-yellow-500 active-line" : ""
                }`}
                href={`/our-services/styling/suspension`}
                onClick={() => {
                  handleMenu(false);
                }}
              >
                Suspension
              </Link>
            </li>
            <li className="w-auto px-4 py-1 transition">
              <Link
                className={`text-sm inline h-full text-slate-100 hover:text-yellow-500 cursor-pointer line ${
                  pathname === "/our-services/styling/exhaust" ? "text-yellow-500 active-line" : ""
                }`}
                href={`/our-services/styling/exhaust`}
                onClick={() => {
                  handleMenu(false);
                }}
              >
                Exhaust
              </Link>
            </li>

            <li className="w-auto px-4 py-1 mb-0 lg:mb-4">
              <Link
                className={`text-sm inline h-full text-slate-100 hover:text-yellow-500 cursor-pointer line ${
                  pathname === "/our-services/styling/window-tint" ? "text-yellow-500 active-line" : ""
                }`}
                href={`/our-services/styling/window-tint`}
                onClick={() => {
                  handleMenu(false);
                }}
              >
                Window Tint
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};
