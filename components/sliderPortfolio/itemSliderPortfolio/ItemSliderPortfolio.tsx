import Image from "next/image";
import { FC } from "react";
import { IPortfolioList } from "@/interfaces/portfolio";

export interface IItemSliderPortfolio {
  item: IPortfolioList;
  openImage: boolean;
  handleOpenImage: (statusImage: boolean) => void;
  handleActiveImage: (image: IPortfolioList) => void;
}

export const ItemSliderPortfolio: FC<IItemSliderPortfolio> = ({
  item,
  openImage,
  handleOpenImage,
  handleActiveImage,
}) => {
  return (
    <div
      className={`max-w-[400px] w-full ${openImage ? "z-[-1]" : "z-0"}`}
      onClick={() => {
        handleActiveImage(item);
        handleOpenImage(!openImage);
      }}
    >
      <Image
        className="max-w-full w-full transition-all duration-500 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 h-[300px] object-cover object-center"
        src={item.image}
        alt={item.title}
        width={400}
        height={400}
      />
    </div>
  );
};
