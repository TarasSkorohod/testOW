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
            <motion.span layout className="mb-2 h-1 w-5 rounded-full bg-white" />
            <OtherInfo data={transitionData ? transitionData : currentSlideData.data} />
            <motion.div layout className="mt-5 flex items-center gap-3">

            </motion.div>
        </>
    );
}

export default SlideInfoCommercial;