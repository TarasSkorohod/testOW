import { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IPortfolioList } from "@/interfaces/portfolio";
import { CgClose } from "react-icons/cg";
import { Spinner } from "@/components/spinner/Spinner";

interface IBigImagePortfolioProps {
  item: IPortfolioList;
  openImage: boolean;
  handleOpenImage: (statusImage: boolean) => void;
}

export const BigImagePortfolio: FC<IBigImagePortfolioProps> = ({
  item,
  openImage,
  handleOpenImage,
}) => {
  useEffect(() => {
    if (openImage) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [openImage]);

  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      {loading && <Spinner />}
      <div className=" z-50 w-[95%] lg:w-[70%] h-auto lg:h-[80%] fixed mx-auto -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 inline rounded-lg">
        <Image
          onLoad={handleImageLoad}
          src={item.image}
          alt={item.title}
          width={1000}
          height={600}
          className="max-w-full w-auto max-h-[500px] lg:max-h-full h-full  rounded-lg z-[100] lg:-translate-x-2/4 lg:-translate-y-2/4 lg:left-2/4 lg:top-2/4 lg:absolute mx-auto"
        />
      </div>
      <AnimatePresence>
        {openImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
            }}
            className={`fixed top-0 left-0 w-full  backdrop-blur-[2px] bg-[rgba(0,0,0,0.6)] overflow-y-hidden max-h-screen h-screen z-40`}
            onClick={() => {
              handleOpenImage(false);
            }}
          >
            <CgClose
              color="white"
              size={40}
              className="absolute top-4 right-4  cursor-pointer z-[100]"
              onClick={() => handleOpenImage(false)}
            />{" "}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
