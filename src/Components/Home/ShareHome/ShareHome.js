import React from "react";
import { BsInstagram } from "react-icons/bs";
import classes from "./ShareHome.module.css";

const ShareHome = () => {
  return (
    <div
      className={
        "container d-flex justify-content-center align-items-center flex-column " +
        classes.sharehome
      }
    >
      <h3>Share your home with #hijabworld.</h3>
      <div className="d-flex align-items-center ">
        <BsInstagram /> <span>Follow @Hijab_World for inspiration.</span>
      </div>
    </div>
  );
};

export default ShareHome;
