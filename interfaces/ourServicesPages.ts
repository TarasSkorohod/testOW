import {StaticImageData} from "next/image";

export interface IListTintPagesProps {
    text: string[];
}
export interface IImagesTintPagesProps {
    image: StaticImageData;
}

export interface ITitleTintPagesProps {
    value:string;
    title:string;
    paragraph?:string;
}