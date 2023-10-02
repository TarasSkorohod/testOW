"use client";

import { ThreeCircles } from "react-loader-spinner";

export const Spinner = () => {
  return (
    <div className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 z-50 ">
      <ThreeCircles
        height="100"
        width="100"
        color="#eab308"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};
