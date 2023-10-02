import { FC } from "react";
import { DoubleSidedCardItem } from "./doubleSidedCardItem/DoubleSidedCardItem";
import { Title } from "../title/Title";
import { IDoubleSidedCard } from "@/components/doubleSidedCard/doubleSidedCardItem/DoubleSidedCardItem";
interface IDoubleSidedCardProps {
  list: IDoubleSidedCard[];
  title: string;
}
import { v4 as uuidv4 } from "uuid";

export const DoubleSidedCard: FC<IDoubleSidedCardProps> = ({ list, title }) => {
  return (
    <div className="mb-16">
      <Title tag="h4" cn="mb-10">
        {title}
      </Title>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center">
        {list.map((item) => {
          return <DoubleSidedCardItem key={uuidv4()} item={item} />;
        })}
      </ul>
    </div>
  );
};
