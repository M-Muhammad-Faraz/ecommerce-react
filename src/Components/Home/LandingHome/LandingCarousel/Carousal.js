import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import classes from "./Carousal.module.css";

// import required modules
import { Pagination } from "swiper";
import { urlFor } from "../../../../lib/client";
const Carousal = ({ carousalItems }) => {
  const [view, setView] = useState(false);
  const carousalData = carousalItems.landcarousal;
  // const Autoplay = null;
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className={"mySwiper " + classes.mh50 + " " + classes.oh}
      >
        {carousalData.map((data) => {
          return (
            <SwiperSlide className={classes.carouItem + " "}>
              <div
                onMouseEnter={() => {
                  setView(true);
                }}
                onMouseLeave={() => {
                  setView(false);
                }}
                className={classes.imgContainer}
              >
                <div
                  className={
                    view
                      ? classes.viewOnMarket
                      : classes.viewOnMarket + " " + classes.hidden
                  }
                >
                  <span className={classes.btn}>
                    <a href="#"></a>
                  </span>
                </div>

                <img src={urlFor(data)} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousal;
