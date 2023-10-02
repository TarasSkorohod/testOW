import React from "react";
import SliderCard from "./SliderCard";
import {DataSlider} from "@/data/dataSliderHome/DataTepe";

type Props = {
  data: DataSlider[];
};

function Slides({ data }: Props) {
  return (
    <div className=" flex w-full gap-6">
      {data.map((data) => {
        return <SliderCard key={data.img} data={data} />;
      })}
    </div>
  );
}

export default Slides;
