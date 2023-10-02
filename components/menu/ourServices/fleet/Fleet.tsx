"use client";
import { FC } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropdown } from "react-icons/io";
import { usePathname } from "next/navigation";
interface IFleetProps {
  handleMenu: (status: boolean) => void;
  openFleet: boolean;
  handleFleet: (statusFleet: boolean) => void;
  isDesktop: boolean;
}

export const Fleet: FC<IFleetProps> = ({ handleMenu, openFleet, handleFleet, isDesktop }) => {
  const pathname = usePathname();
  return (
    <li
      className="w-auto pl-4 py-1 lg:flex lg:justify-center"
      onMouseLeave={() => {
        if (!isDesktop) {
          return;
        }
        handleFleet(false);
      }}
      onMouseEnter={() => {
        if (!isDesktop) {
          return;
        }
        handleFleet(true);
      }}
    >
      <div className="flex items-center justify-between  w-full">
        <Link
          className={`inline h-full text-sm text-slate-100 hover:text-yellow-500 cursor-pointer line ${
            pathname === "/our-services/fleet-management" ? "text-yellow-500 active-line" : ""
          }`}
          href={`/our-services/fleet-management`}
          onClick={() => {
            handleMenu(false);
          }}
        >
          Fleet Management
        </Link>
        <motion.div
          animate={{ rotate: openFleet ? 180 : 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="cursor-pointer"
          onClick={() => handleFleet(!openFleet)}
        >
          <IoMdArrowDropdown color={"#f1f5f9"} size={25} />
        </motion.div>
      </div>

      <AnimatePresence>
        {openFleet && (
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
            <li className="mt-0 pt-2  w-auto px-4 py-1 lg:mt-4">
              <Link
                className={`text-sm inline h-full text-slate-100 hover:text-yellow-500 cursor-pointer line ${
                  pathname === "/our-services/fleet-management/goverment" ? "text-yellow-500 active-line" : ""
                }`}
                href={`/our-services/fleet-management/goverment`}
                onClick={() => {
                  handleMenu(false);
                }}
              >
                Goverment
              </Link>
            </li>
            <li className="inline px-4 py-1">
              <Link
                className={`text-sm w-auto h-full text-slate-100 hover:text-yellow-500 cursor-pointer line ${
                  pathname === "/our-services/fleet-management/commercial" ? "text-yellow-500 active-line" : ""
                }`}
                href={`/our-services/fleet-management/commercial`}
                onClick={() => {
                  handleMenu(false);
                }}
              >
                Commercial
              </Link>
            </li>
            <li className="px-4 py-1 mb-0 lg:mb-4">
              <Link
                className={`text-sm inline h-full text-slate-100 hover:text-yellow-500 cursor-pointer line ${
                  pathname === "/our-services/fleet-management/dealerships" ? "text-yellow-500 active-line" : ""
                }`}
                href={`/our-services/fleet-management/dealerships`}
                onClick={() => {
                  handleMenu(false);
                }}
              >
                Dealerships
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};
