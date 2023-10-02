import Image from "next/image";
import { FC } from "react";
import { StaticImageData } from "next/image";

export interface IDoubleSidedCard {
  image: StaticImageData;
  title: string;
  text?: string;
  additionalText?: string;
  list?: string[];
}

interface IDoubleSidedCardItemProps {
  item: IDoubleSidedCard;
}
export const DoubleSidedCardItem: FC<IDoubleSidedCardItemProps> = ({ item }) => {
  return (
    <div className="card min-h-[320px] relative cursor-pointer ">
      <div className="bg-[#111827] front absolute w-full h-full left-0 top-0 flex justify-center items-center trnsition duration-1000 rounded-md py-1 shadow-md shadow-slate-400">
        <Image src={item.image} alt={item.title} width={700} height={700} className="max-h-full max-w-full w-auto h-full" />
      </div>
      <div className="back bg-[#111827]  w-full h-full left-0 top-0 transition duration-1000 rounded-md py-2 px-4 flex flex-col gap-2">
        <h6 className="text-center text-slate-50 font-semibold text-lg py-1 px-1">{item.title}</h6>
        <p className="text-sm text-slate-300 leading-2">{item.text}</p>
        <ul>
          {item.list &&
            item.list.map((itemList, index) => (
              <li className="text-slate-50 leading-0 font-normal text-[13px]" key={index}>
                • {itemList}
              </li>
            ))}
        </ul>
        <p className="text-sm text-slate-300 leading-2">{item.additionalText}</p>
      </div>
    </div>
  );
};
