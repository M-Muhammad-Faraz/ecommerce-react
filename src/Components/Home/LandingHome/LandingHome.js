import React from "react";

import Side from "./Side/Side";

import classes from "./LandingHome.module.css";
import SpotlightItem from "./SpotlightItem/SpotlightItem";
import Carousal from "./LandingCarousel/Carousal";

const LandingHome = ({ spotlightdata, carousalData }) => {
  return (
    <div className="position-relative">
      <div className={"row no-gutters " + classes.landingHome}>
        <div className="col-6 " style={{ height: "inherit" }}>
          <div className="row no-gutters " style={{ height: "inherit" }}>
            <Side />
            <SpotlightItem spotlight={spotlightdata} />
          </div>
        </div>
        <div className="col-6 ">
          <Carousal carousalItems={carousalData} />
        </div>
      </div>
      <div className={" " + classes.btnPos}>
        <button
          className={classes.nextbtn}
          onClick={() => {
            var element = document.getElementById("topAbaya");
            element.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest",
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LandingHome;
