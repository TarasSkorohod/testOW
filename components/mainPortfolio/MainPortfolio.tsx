import Image from "next/image";
import Link from "next/link";
import patriotLiner from "@/public/portfolio/patriot-liner/main.jpg";
import wheelsTires from "@/public/portfolio/wheels-tires/wt1.jpg";
import ceramicCoatings from "@/public/portfolio/ceramic-coatings/cc7.jpg";
import fleet from "@/public/portfolio/fleet/f1.jpg";
import hitches from "@/public/portfolio/hitches/h1.jpg";
import undercoating from "@/public/portfolio/undercoating/u4.jpg";

import { v4 as uuidv4 } from "uuid";

const portfolioList = [
  {
    link: "/portfolio/patriot-liner",
    image: patriotLiner,
    title: "Patriot Liner",
  },
  {
    link: "/portfolio/wheels-tires",
    image: wheelsTires,
    title: "Wheels & tires",
  },
  {
    link: "/portfolio/ceramic-coatings",
    image: ceramicCoatings,
    title: "Ceramic Coatings",
  },
  {
    link: "/portfolio/fleet",
    image: fleet,
    title: "Fleet",
  },
  {
    link: "/portfolio/hitches",
    image: hitches,
    title: "Hitches",
  },
  {
    link: "/portfolio/undercoating",
    image: undercoating,
    title: "Undercoating",
  },
];

export const MainPortfolio = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center mb-[120px]">
      {portfolioList.map(({ link, image, title }) => {
        return (
          <div
            key={uuidv4()}
            className="relative cursor-pointer overflow-hidden rounded-xl "
          >
            <Link href={link} className="z-30">
              <figure className="relative h-72 w-full brightness-[.4] hover:brightness-75 transition duration-500 hover:scale-110 rounded-xl">
                <Image
                  className="h-full w-full rounded-xl object-cover"
                  src={image}
                  alt={title}
                  width={500}
                  height={500}
                />
              </figure>
              <div className=" absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-[4px]">
                <div>
                  <h5 className="text-lg text-[#111827] font-medium">
                    {title}
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
