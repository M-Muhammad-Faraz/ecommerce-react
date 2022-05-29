import React, { useState, useEffect } from "react";
import PrimaryBtn from "../../../Utility/PrimaryBtn";
import { IoIosArrowForward } from "react-icons/io";
import classes from "./TopHijab.module.css";
import SecondaryItem from "./Post1/SecondaryItem";
import PrimaryItem from "./Post2/PrimaryItem";
import img from "./shutterstock_1245718864.jpg";
import Rotate from "react-reveal/Rotate";
const TopHijab = ({ item }) => {
  return (
    <div className="position-relative" style={{ height: "100vh" }}>
      <img src={img} alt="" className={classes.topHijab} />
      <div className={" container "} style={{ height: "inherit" }}>
        <div
          className="row justify-content-between align-item-center"
          style={{ height: "inherit" }}
        >
          <Rotate bottom left delay={500}>
            <div className="col-4 d-flex justify-content-center">
              <PrimaryItem item={item.primaryProduct} />
            </div>
          </Rotate>
          <Rotate bottom right delay={250}>
            <div className="col-4 d-flex justify-content-center">
              <SecondaryItem item={item.secondaryProduct} />
            </div>
          </Rotate>
          <Rotate bottom right>
            <div
              className={
                "col-4 d-flex justify-content-center flex-column " +
                classes.details
              }
            >
              <div className={classes.collection}>{item.collection}</div>
              <div className={"" + classes.head}>{item.shortDesc}</div>
              <div>
                <PrimaryBtn onClick={() => {}}>
                  Go Shopping <IoIosArrowForward />
                </PrimaryBtn>
              </div>
            </div>
          </Rotate>
        </div>
      </div>
    </div>
  );
};

export default TopHijab;
