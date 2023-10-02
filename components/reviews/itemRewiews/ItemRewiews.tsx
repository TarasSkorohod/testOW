"use client";

import { FC, useState, useRef } from "react";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import { Google } from "../google/Google";

import { IReview } from "../reviewsList/ReviewsList";
import { convertUnixTimestampToDate } from "@/utils/dateFormat";

interface IItemRewiewsProps {
  review: IReview;
}

export const ItemRewiews: FC<IItemRewiewsProps> = ({ review }) => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { author_title, review_timestamp, review_text, rating } = review;

  const ratingToNumber = Math.ceil(Number(rating));

  const starIcons = Array.from({ length: ratingToNumber }, (_, index) => (
    <AiFillStar size={20} color="#FBBC04" key={index} />
  ));

  const maxLength = 200;
  const variants = {
    open: { height: "auto" },
    closed: { height: "120px" },
  };

  return (
    <div className="mx-auto my-2 py-2 px-4 min-w-[100px] max-w-[260px] w-full bg-slate-50 shadow-[5px_5px_5px_0px_rgba(0,0,0,0.10)] rounded-[10px]">
      <h6 className="font-bold text-lg text-center text-black">
        {author_title}
      </h6>
      <p className="text-center text-xs text-slate-600 mb-2">
        {convertUnixTimestampToDate(Number(review_timestamp))}
      </p>
      <div className="flex items-center justify-center mb-2">{starIcons}</div>
      <motion.div
        ref={ref}
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={variants}
        style={{ overflow: "hidden" }}
        transition={{ duration: 0.5 }}
        className="text-start mb-2"
      >
        {review_text}
      </motion.div>

      {review_text.length > maxLength ? (
        <div className="flex items-center justify-start">
          <button
            onClick={() => setOpen(!open)}
            className="text-center text-xs text-slate-600"
          >
            {open ? (
              <motion.span>Hide</motion.span>
            ) : (
              <motion.span>Read more</motion.span>
            )}
          </button>
        </div>
      ) : (
        <div className="text-center text-xs">&nbsp;</div>
      )}
      <Google />
    </div>
  );
};
