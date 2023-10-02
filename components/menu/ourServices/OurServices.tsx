"use client";
import { FC } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";
import { Fleet } from "./fleet/Fleet";
import { Styling } from "./styling/Styling";
import { usePathname } from "next/navigation";

interface IOurServicesProps {
  handleMenu: (status: boolean) => void;
  openServices: boolean;
  handleServices: (statusServices: boolean) => void;
  openPreservation: boolean;
  handlePreservation: (statusPreservation: boolean) => void;
  openFleet: boolean;
  handleFleet: (statusFleet: boolean) => void;
  openStyling: boolean;
  handleStyling: (statusStyling: boolean) => void;
  isDesktop: boolean;
}

export const OurServices: FC<IOurServicesProps> = ({
  handleMenu,
  openServices,
  handleServices,
  handlePreservation,
  openFleet,
  handleFleet,
  openStyling,
  handleStyling,
  isDesktop,
}) => {
  const pathname = usePathname();
  return (
    <li
      className="w-auto px-4  lg:flex lg:justify-center py-2"
      onMouseLeave={() => {
        if (!isDesktop) {
          return;
        }
        handleServices(false);
      }}
      onMouseEnter={() => {
        if (!isDesktop) {
          return;
        }
        handleServices(true);
      }}
    >
      <div className="flex items-center justify-between  w-full">
        <Link
          className={` h-full text-sm text-slate-100 hover:text-yellow-500 cursor-pointer line flex items-center justify-between ${
            pathname === "/our-services" ? "text-yellow-500 active-line" : ""
          }`}
          href={`/our-services`}
          onClick={() => {
            handleMenu(false);
          }}
        >
          Our Services
        </Link>
        <motion.div
          animate={{ rotate: openServices ? 180 : 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="cursor-pointer"
          onClick={() => {
            handleStyling(false);
            handleFleet(false);
            handlePreservation(false);
            handleServices(!openServices);
          }}
        >
          <IoMdArrowDropdown color={"#f1f5f9"} size={25} />
        </motion.div>
      </div>

      <AnimatePresence>
        {openServices && (
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
            transition={{ duration: 0.4 }}
            className={`lg:w-[215px] overflow-hidden lg:overflow-visible pl-2 lg:absolute lg:bg-[#111827] top-9 lg:shadow-xl lg:px-4 lg:py-4 space-y-0 lg:space-y-2`}
          >
            <li className="mt-0 pt-2 w-auto pl-4 py-1 lg:pt-0">
              <Link
                className={`inline h-full text-sm text-slate-100 hover:text-yellow-500 cursor-pointer line ${
                  pathname === "/our-services/hitches" ? "text-yellow-500 active-line" : ""
                }`}
                href={`/our-services/hitches`}
                onClick={() => {
                  handleMenu(false);
                }}
              >
                Hitches
              </Link>
            </li>
            <li className="mt-0 pt-2 w-auto pl-4 py-1 lg:pt-0">
              <Link
                className={`inline h-full text-sm text-slate-100 hover:text-yellow-500 cursor-pointer line ${
                  pathname === "/our-services/rust-prevention" ? "text-yellow-500 active-line" : ""
                }`}
                href={`/our-services/rust-prevention`}
                onClick={() => {
                  handleMenu(false);
                }}
              >
                Rust Prevention
              </Link>
            </li>
            <li className="mt-0 pt-2 w-auto pl-4 py-1 lg:pt-0">
              <Link
                className={`inline h-full text-sm text-slate-100 hover:text-yellow-500 cursor-pointer line ${
                  pathname === "/our-services/patriot-liner" ? "text-yellow-500 active-line" : ""
                }`}
                href={`/our-services/patriot-liner`}
                onClick={() => {
                  handleMenu(false);
                }}
              >
                Spray in Bedliner
              </Link>
            </li>
            <li className="mt-0 pt-2 w-auto pl-4 py-1 lg:pt-0">
              <Link
                className={`inline h-full text-sm text-slate-100 hover:text-yellow-500 cursor-pointer line ${
                  pathname === "/our-services/ppf" ? "text-yellow-500 active-line" : ""
                }`}
                href={`/our-services/ppf`}
                onClick={() => {
                  handleMenu(false);
                }}
              >
                PPF / Clear Bra
              </Link>
            </li>
            <li className="mt-0 pt-2 w-auto pl-4 py-1 lg:pt-0">
              <Link
                className={`inline h-full text-sm text-slate-100 hover:text-yellow-500 cursor-pointer line ${
                  pathname === "/our-services/ceramic-coatings" ? "text-yellow-500 active-line" : ""
                }`}
                href={`/our-services/ceramic-coatings`}
                onClick={() => {
                  handleMenu(false);
                }}
              >
                Ceramic Coatings
              </Link>
            </li>
            <li className="mt-0 pt-2 w-auto pl-4 py-1 lg:pt-0">
              <Link
                className={`inline h-full text-sm text-slate-100 hover:text-yellow-500 cursor-pointer line ${
                  pathname === "/our-services/accessories" ? "text-yellow-500 active-line" : ""
                }`}
                href={`/our-services/accessories`}
                onClick={() => {
                  handleMenu(false);
                }}
              >
                Accessories
              </Link>
            </li>

            <Styling handleMenu={handleMenu} openStyling={openStyling} handleStyling={handleStyling} isDesktop={isDesktop} />
            <Fleet handleMenu={handleMenu} openFleet={openFleet} handleFleet={handleFleet} isDesktop={isDesktop} />
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};
