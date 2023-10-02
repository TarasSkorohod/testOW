import React, {useState} from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import imagesTest2 from "@/public/Ceramic/CERAMIC-Truck.webp";
import imagesTest from "@/public/Ceramic/CARBON-Truck.webp";
import imagesTest3 from "@/public/Ceramic/CERAMIC-Plus-Truck.webp";
import {ListTintPages} from "@/components/ourServices/windowTintPages/ListTintPages";
import {
    textList,
    textList2,
    textList3
} from "@/components/ourServices/windowTintPages/WindowTintPages";

export function WindowTintTruck(){
    const [currentText, setCurrentText] = useState('CS');
    const [currentImage, setCurrentImage] = useState('path-to-prime-cs-image');

    const handleButtonClick = (text: string, image: string) => {
        setCurrentText(text);
        setCurrentImage(image);
    };
    const imageAbout = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return(
        <div className=" pb-20 grid lg:grid-cols-[140px_auto_240px] gap-12  justify-center">

            <div className=" m-5 rounded-md " role="group">
                <button
                    type="button"
                    className={`w-full py-5 text-sm rounded font-medium ${
                        currentText === 'CS' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                    }`}
                    onClick={() => handleButtonClick('CS', 'path-to-prime-cs-image.jpg')}
                >
                    CARBON
                </button>
                <button
                    type="button"
                    className={`w-full py-5 text-sm rounded font-medium ${
                        currentText === 'XR' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                    }`}
                    onClick={() => handleButtonClick('XR', 'path-to-prime-xr-image.jpg')}
                >
                    CERAMIC
                </button>
                <button
                    type="button"
                    className={`w-full py-5 text-sm rounded font-medium ${
                        currentText === ' SD' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                    }`}
                    onClick={() => handleButtonClick('SD', 'path-to-prime-xr-image.jpg')}
                >
                    CERAMIC +
                </button>

            </div>


            <div className="flex ">
                {currentText === 'CS' && (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={imageAbout}
                        viewport={{ once: true }}
                        className=" flex justify-center brightness-75 order-1 lg:order-2 max-w-full"
                    >
                        <Image
                            className="rounded-2xl lg:rounded-2xl  max-w-full"
                            width={500}
                            height={500}
                            src={imagesTest}
                            alt="bg"
                        />
                    </motion.div>
                )}
                {currentText === 'XR' && (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={imageAbout}
                        viewport={{ once: true }}
                        className=" flex justify-center brightness-75 order-1 lg:order-2"
                    >
                        <Image
                            className="rounded-2xl lg:rounded-2xl "
                            width={500}
                            height={500}
                            src={imagesTest2}
                            alt="bg"
                        />
                    </motion.div>
                )}
                {currentText ==='SD' && (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={imageAbout}
                        viewport={{ once: true }}
                        className=" flex justify-center brightness-75 order-1 lg:order-2"
                    >
                        <Image
                            className="rounded-2xl lg:rounded-2xl "
                            width={500}
                            height={500}
                            src={imagesTest3}
                            alt="bg"
                        />
                    </motion.div>
                )}

            </div>
            <div className="flex justify-between ">
                <div className="flex flex-col">
                    {currentText === 'CS' && (
                        <h1 className="text-[60px] text-red-500 font-bold">250$</h1>
                    )}
                    {currentText === 'XR' && (
                        <h1 className="text-[60px] text-red-500 font-bold">350$</h1>
                    )}
                    {currentText === 'SD' && (
                        <h1 className="text-[60px] text-red-500 font-bold">450$</h1>
                    )}
                    <div>
                        <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                            {currentText === 'CS' && (
                                <>
                                    <ListTintPages text={textList}/>
                                </>
                            )}
                            {currentText === 'XR' && (
                                <>
                                    <ListTintPages text={textList2}/>
                                </>
                            )}
                            {currentText === 'SD' && (
                                <>
                                    <ListTintPages text={textList3}/>
                                </>
                            )}
                        </ul>

                    </div>
                </div>
            </div>
        </div>

    );
}