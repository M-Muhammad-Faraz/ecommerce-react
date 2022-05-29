import React from "react";
import classes from "./PrimaryBtn.module.css";
const PrimaryBtn = ({ onClick, children }) => {
  return (
    <button className={classes.btn + " " + classes.effect01} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default PrimaryBtn;
