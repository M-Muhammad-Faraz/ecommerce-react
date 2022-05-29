import React, { useState } from "react";
import PrimaryBtn from "../../../../Utility/PrimaryBtn";
import SaleBadge from "../../../../Utility/SaleBadge";
import { urlFor } from "../../../../../lib/client";
import img from "./Model1.png";
import classes from "./SecondaryItem.module.css";

const SecondaryItem = ({ item }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <>
      <div
        className={
          classes.holder +
          " d-flex flex-column justify-content-center align-items-center"
        }
      >
        <div
          onMouseLeave={() => {
            setHovering(false);
          }}
          onMouseEnter={() => {
            setHovering(true);
          }}
          className={classes.imgHolder}
        >
          <div
            className={
              hovering
                ? classes.overlay
                : classes.hidden + " " + classes.overlay
            }
          >
            <div className="d-flex ">
              <div className="mx-1"></div>
              <PrimaryBtn onClick={() => {}}>Save</PrimaryBtn>
              <div className="mx-2"></div>
              <PrimaryBtn onClick={() => {}}>Quick Preview</PrimaryBtn>
              <div className="mx-1"></div>
            </div>
          </div>

          <SaleBadge saleVal={"SALE"} />
          <img src={urlFor(item.image[0])} alt="" />
        </div>
        <div className={classes.details + " align-self-start"}>
          <div className={classes.categories}>{item.category.categoryName}</div>
          <div className={classes.title}>{item.name}</div>
          <div className={classes.price + " d-flex"}>
            <div className={classes.oldPrice}>{item.price} rs/-</div>
            <div className={classes.newPrice}>
              {Number(item.price) - Number(item.price) * 0.3} rs/-
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondaryItem;
