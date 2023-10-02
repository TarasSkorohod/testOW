import efficiency from "@/public/aboutIcons/efficiency.png";
import good from "@/public/aboutIcons/good.png";
import innovation from "@/public/aboutIcons/Innovation.png";
import warranty from "@/public/aboutIcons/warranty.png";
import Image from "next/image";
import { Title } from "../title/Title";

const items = [
  {
    img: efficiency,
    text: "Efficiency",
  },
  {
    img: innovation,
    text: "Innovation",
  },
  {
    img: warranty,
    text: "Quality",
  },
  {
    img: good,
    text: "Ceviews",
  },
];
export const AboutIcons = () => {
  return (
    <div>
      <Title cn="mb-8" tag="h6">
        Our qualities
      </Title>
      <ul className="grid grid-cols-2 gap-6">
        {items.map((item) => {
          return (
            <li
              key={item.text}
              className="flex items-center justify-center lg:justify-start py-4 flex-col md:flex-row"
            >
              <Image
                src={item.img}
                alt="innovation"
                width={60}
                height={60}
                className="mr-0 md:mr-4"
              />
              <span className="text-[#111827] font-bold text-[16px]">
                {item.text}
              </span>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
