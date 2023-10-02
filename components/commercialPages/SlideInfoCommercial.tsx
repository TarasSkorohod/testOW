import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "@/components/slider/OtherInfo";
import {CurrentSlideDataC, DataSliderC} from "@/data/dataSliderCommercial/DataTepe";
import {Link as LinkScroll} from "react-scroll/modules";

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
                <LinkScroll
                    activeClass="active"
                    to="form"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <button
                        className="w-full md:w-auto rounded-full border-[1px] border-[#ffffff8f] px-8 py-4 text-[14px] font-thin transition duration-300 ease-in-out hover:bg-white hover:text-black"
                    >
                        Contact us
                    </button>
                </LinkScroll>
            </motion.div>
        </>
    );
}

export default SlideInfoCommercial;