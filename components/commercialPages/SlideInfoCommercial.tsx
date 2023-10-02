import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "@/components/slider/OtherInfo";
import {CurrentSlideDataC, DataSliderC} from "@/data/dataSliderCommercial/DataTepe";

type Props = {
    transitionData: DataSliderC;
    currentSlideData: CurrentSlideDataC;
};

function SlideInfoCommercial({ transitionData, currentSlideData }: Props) {
    return (
        <>
            <OtherInfo data={transitionData ? transitionData : currentSlideData.data} />
        </>
    );
}

export default SlideInfoCommercial;