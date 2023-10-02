import { FC, ReactNode } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface IImagePage {
  children?: ReactNode;
  cn?: string;
  img: StaticImageData;
}

export const ImagePage: FC<IImagePage> = ({ children, cn, img }) => {
  return (
    <div className="h-[450px] flex max-h-full rounded-md w-auto justify-center lg:justify-end rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[220px] overflow-hidden shadow-lg shadow-slate-700 hover:shadow-lg hover:shadow-yellow-500 transition duration-300">
      <Image
        src={img}
        width={700}
        height={500}
        alt="Our Services"
        className="rounded-md hover:scale-105 transition duration-300 brightness-75 hover:brightness-95  w-full h-full object-cover max-h-full bg-[#111827]"
      />
    </div>
  );
};
