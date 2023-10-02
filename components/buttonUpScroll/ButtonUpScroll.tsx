"use client";

import { BsFillArrowUpSquareFill } from "react-icons/bs";
import ScrollToTop from "react-scroll-to-top";
export const ButtonUpScroll = () => {
  return (
    <div className="fixed right-4 bottom-4">
      <ScrollToTop smooth className="flex items-center justify-center p-2" />
    </div>
  );
};
