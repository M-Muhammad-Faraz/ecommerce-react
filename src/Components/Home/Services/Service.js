import React, { useState, useEffect } from "react";
import classes from "./Service.module.css";
import { AiOutlineUndo } from "react-icons/ai";
import anime from "animejs";

const Service = ({ id, title, icon, subtitle, bl }) => {
  const animate = () => {
    const elems = document.querySelectorAll(".text-01 path");
    anime({
      targets: elems,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function (el, i) {
        return i * 250;
      },
      direction: "alternate",
      loop: true,
      // loopComplete: () => {
      //   const arry = document.querySelectorAll(".text-01");
      //   arry.forEach((element) => {
      //     element.style.fill = "#000";
      //   });
      // },
      // loopBegin: () => {
      //   const arry = document.querySelectorAll(".text-01");
      //   arry.forEach((element) => {
      //     element.style.fill = "none";
      //   });
      // },
      // begin: () => {
      //   document.getElementsByClassName("text-01").style.fill = "none";
      // },
    });
  };
  const [Svg, setSvg] = useState();
  const [show, setShow] = useState(false);
  useEffect(() => {
    animate();
  });
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-3">
      <div
        className={classes.icon}
        // onMouseEnter={() => {
        //   setShow(true);
        // }}
        // onMouseLeave={() => {
        //   setShow(false);
        // }}
      >
        {icon}
        {/* {icon} */}
      </div>
      <div className={classes.title}>{title}</div>
      <div className={classes.subtitle}>{subtitle}</div>
    </div>
  );
};

export default Service;
