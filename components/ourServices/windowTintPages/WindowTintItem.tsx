import React, {useState} from "react";
import {WindowTintCar} from "@/components/ourServices/windowTintPages/WindowTintCar";
import {WindowTintTruck} from "@/components/ourServices/windowTintPages/WindowTintTruck";
import {WindowTintSUV} from "@/components/ourServices/windowTintPages/WindowTintSUV";
import {WindowTintFront} from "@/components/ourServices/windowTintPages/WindowTintFront";
import {WindowTintWindshield} from "@/components/ourServices/windowTintPages/WindowTintWindshield";

export function WindowTintItem (){

    const [currentText, setCurrentText] = useState('CS');
    const [currentImage, setCurrentImage] = useState('path-to-prime-cs-image');

    const handleButtonClick = (text: string, image: string) => {
        setCurrentText(text);
        setCurrentImage(image);
    };

    return(
        <div >
            <div className="flex justify-center ">
                <button
                    type="button"
                    className={` py-2 px-4 font-medium rounded ${
                        currentText === 'CS' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                    }`}
                    onClick={() => handleButtonClick('CS', 'path-to-prime-cs-image.jpg')}
                >
                    Car
                </button>
                <button
                    type="button"
                    className={`py-2 px-4 font-medium rounded ${
                        currentText === 'XR' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                    }`}
                    onClick={() => handleButtonClick('XR', 'path-to-prime-xr-image.jpg')}
                >
                    Truck
                </button>
                <button
                    type="button"
                    className={`py-2 px-4 font-medium rounded ${
                        currentText === 'SD' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                    }`}
                    onClick={() => handleButtonClick('SD', 'path-to-prime-xr-image.jpg')}
                >
                    SUV
                </button>
                <button
                    type="button"
                    className={`py-2 px-4 font-medium rounded ${
                        currentText === 'CSS' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                    }`}
                    onClick={() => handleButtonClick('CSS', 'path-to-prime-cs-image.jpg')}
                >
                    2 Front
                </button>
                <button
                    type="button"
                    className={`py-2 px-4 font-medium rounded ${
                        currentText === 'XRR' ? 'text-white bg-gray-900' : 'text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white'
                    }`}
                    onClick={() => handleButtonClick('XRR', 'path-to-prime-xr-image.jpg')}
                >
                    Windshield
                </button>
            </div>

            <div>
                {currentText === 'CS' && <WindowTintCar />}
                {currentText === 'XR' && <WindowTintTruck />}
                {currentText === 'SD' && <WindowTintSUV />}
                {currentText === 'CSS' && <WindowTintFront />}
                {currentText === 'XRR' && <WindowTintWindshield />}
            </div>
        </div>


    );
}