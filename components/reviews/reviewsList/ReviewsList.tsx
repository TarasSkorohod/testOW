"use client";
import { FC } from "react";
import { ItemRewiews } from "../itemRewiews/ItemRewiews";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface IReview {
  query: string;
  name: string;
  google_id: string;
  place_id: string;
  location_link: string;
  reviews_link: string;
  reviews_per_score: string;
  reviews: string;
  rating: string;
  review_id: string;
  author_link: string;
  author_title: string;
  author_id: string;
  author_image: string;
  review_text: string;
  review_img_url: string;
  review_img_urls: string;
  owner_answer: string;
  owner_answer_timestamp: string;
  owner_answer_timestamp_datetime_utc: string;
  review_link: string;
  review_rating: string;
  review_timestamp: string;
  review_datetime_utc: string;
  review_likes: string;
  reviews_id: string;
}

interface IReviewsListProps {
  reviews: IReview[];
}

export const ReviewsList: FC<IReviewsListProps> = ({ reviews }) => {
  const reviewsListAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 4,
    speed: 500,
    dots: false,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={reviewsListAnimation}
      viewport={{ once: true }}
      className="py-4 z-30 sm:px-8 lg:px-0"
    >
      <Slider className="py-6" {...settings}>
        {reviews !== undefined
          ? reviews.map((review) => (
              <ItemRewiews review={review} key={uuidv4()} />
            ))
          : null}
      </Slider>
    </motion.div>
  );
};
