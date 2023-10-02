"use client";
import { FC, useState } from "react";
import { IPartner } from "@/interfaces/partners";
import Image from "next/image";

interface IItemPartnersSliderProps {
  partner: IPartner;
}

export const ItemPartnersSlider: FC<IItemPartnersSliderProps> = ({
  partner,
}) => {
  const [statusHover, setStatusHover] = useState<boolean>(false);
  return (
    <div className="mx-auto my-4  min-w-[100px] max-w-[220px] w-full bg-slate-50 shadow-[5px_5px_5px_0px_rgba(0,0,0,0.10)] rounded-[10px] h-[220px]">
      <a
        href={partner.link}
        className="flex items-center justify-center h-full w-full"
        target="_blanck"
        onMouseEnter={() => {
          setStatusHover(true);
        }}
        onMouseLeave={() => {
          setStatusHover(false);
        }}
      >
        <Image
          src={partner.image}
          alt={partner.title}
          width={300}
          height={300}
          className={`w-full max-w-[150px] h-full max-h-[150px] ${
            statusHover ? "grayscale-0" : "grayscale"
          } transition duration-500`}
        />
      </a>
    </div>
  );
};
