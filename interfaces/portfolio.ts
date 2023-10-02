import { StaticImageData } from "next/image";

export interface IPortfolioList {
  link?: string;
  image: StaticImageData;
  title: string;
}

export interface ISliderPortfolio {
  portfolioList: IPortfolioList[];
}
