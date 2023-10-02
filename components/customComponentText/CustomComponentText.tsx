import React, {FC} from 'react';

interface CustomComponentProps {
    paragraph1: string;
    paragraph2: string;
}

const CustomComponentText: FC<CustomComponentProps> = ({paragraph1, paragraph2}) => {
    return (
        <div
            className=" z-10 p-5 flex order-2 lg:order-1    justify-center px-10 md:px-10  transition-transform duration-300">
            <div className=" relative z-20">
                <h1 className=" relative z-20">
                    <p className="leading-5 py-7 text-[16px]  mb-2  "
                       style={{color: '#616161', display: 'inline-block', width: '100%'}}>
                        {paragraph1}
                    </p>
                    <p className="leading-5 py-7 text-[16px]  mb-2  rounded-full "
                       style={{color: '#616161', display: 'inline-block', width: '100%',}}>
                        {paragraph2}
                    </p>
                </h1>
            </div>
        </div>
    );
};

export default CustomComponentText;