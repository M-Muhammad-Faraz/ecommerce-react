import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./SHCarousal.module.css";
// import img from "https://via.placeholder.com/150x150.png?text=Insta1";
// Import Swiper styles
import "swiper/css";

import React from "react";

const SHCarousal = () => {
  return (
    <Swiper
      className={classes.carousal}
      spaceBetween={50}
      slidesPerView={6}
      onSlideChange={() => {}}
      // onSwiper={}}
    >
      <SwiperSlide className={classes.carouItem}>
        <img
          src={"https://via.placeholder.com/150x150.png?text=Insta1"}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className={classes.carouItem}>
        <img
          src={"https://via.placeholder.com/150x150.png?text=Insta1"}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className={classes.carouItem}>
        <img
          src={"https://via.placeholder.com/150x150.png?text=Insta1"}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className={classes.carouItem}>
        <img
          src={"https://via.placeholder.com/150x150.png?text=Insta1"}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className={classes.carouItem}>
        <img
          src={"https://via.placeholder.com/150x150.png?text=Insta1"}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className={classes.carouItem}>
        <img
          src={"https://via.placeholder.com/150x150.png?text=Insta1"}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className={classes.carouItem}>
        <img
          src={"https://via.placeholder.com/150x150.png?text=Insta1"}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className={classes.carouItem}>
        <img
          src={"https://via.placeholder.com/150x150.png?text=Insta1"}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className={classes.carouItem}>
        <img
          src={"https://via.placeholder.com/150x150.png?text=Insta1"}
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SHCarousal;
