import React from "react";
import classes from "./SpotlightItem.module.css";
import { urlFor } from "../../../../lib/client";
import { IoIosArrowForward } from "react-icons/io";
const SpotlightItem = ({ spotlight }) => {
  //
  return (
    <div className="col-10 d-flex flex-column justify-content-center align-items-start position-relative">
      <div className={classes.ItemDetails}>
        <div className={" " + classes.ShortDesc}>{spotlight.itemShortDesc}</div>
        <div className={" " + classes.Name}>{spotlight.itemName}</div>
        <div className={"d-flex align-items-center " + classes.cateGoto}>
          Go to category{" "}
          <div>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <div className={classes.ItemImg}>
        <div className={classes.imgcover}></div>
        <img
          src={
            // ""
            urlFor(spotlight.itemImage)
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default SpotlightItem;
