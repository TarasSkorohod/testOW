"use client";
import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { IPortfolioList, ISliderPortfolio } from "@/interfaces/portfolio";
import { ItemSliderPortfolio } from "./itemSliderPortfolio/ItemSliderPortfolio";
import { BigImagePortfolio } from "./bigImagePortfolio/BigImagePortfolio";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const SliderPortfolio: FC<ISliderPortfolio> = ({ portfolioList }) => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(2);
  const [[page, direction], setPage] = useState([0, 0]);
  const [openImage, setOpenImage] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState<IPortfolioList>(
    {} as IPortfolioList
  );

  const portfolioChunks: IPortfolioList[][] = [];
  for (let i = 0; i < portfolioList.length; i += itemsPerPage) {
    portfolioChunks.push(portfolioList.slice(i, i + itemsPerPage));
  }

  const paginate = (newDirection: number) => {
    const nextPage = page + newDirection;

    if (nextPage >= 0 && nextPage < portfolioChunks.length) {
      setPage([nextPage, newDirection]);
    } else {
      const wrappedPage = nextPage < 0 ? portfolioChunks.length - 1 : 0;
      setPage([wrappedPage, newDirection]);
    }
  };
  const handleActiveImage = (image: IPortfolioList) => {
    setActiveImage(image);
  };
  const handleOpenImage = (statusImage: boolean) => {
    setOpenImage(statusImage);
  };

  useEffect(() => {
    setItemsPerPage(window.innerWidth > 1023 ? 4 : 2);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth > 1023 ? 4 : 2);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center mb-32 overflow-x-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center max-w-full"
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {portfolioChunks[page] &&
            portfolioChunks[page].map((item) => {
              return (
                <ItemSliderPortfolio
                  handleActiveImage={handleActiveImage}
                  openImage={openImage}
                  handleOpenImage={handleOpenImage}
                  item={item}
                  key={uuidv4()}
                />
              );
            })}
        </motion.div>
      </AnimatePresence>
      <div
        className="right-5 top-[calc(50%_-_20px)] absolute bg-[white] w-10 h-10 flex justify-center items-center select-none cursor-pointer font-[bold] text-lg z-10  rounded-[30px]"
        onClick={() => {
          paginate(1);
        }}
      >
        {"‣"}
      </div>
      <div
        className="-scale-100 left-5 top-[calc(50%_-_20px)] absolute bg-[white] w-10 h-10 flex justify-center items-center select-none cursor-pointer font-[bold] text-lg z-10 rounded-[30px]"
        onClick={() => {
          paginate(-1);
        }}
      >
        {"‣"}
      </div>
      {openImage ? (
        <BigImagePortfolio
          item={activeImage}
          openImage={openImage}
          handleOpenImage={handleOpenImage}
        />
      ) : null}
    </div>
  );
};
