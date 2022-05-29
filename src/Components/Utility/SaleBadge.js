import React from "react";
import classes from "./SaleBadge.module.css";
const SaleBadge = ({ saleVal }) => {
  return <div className={classes.badge}>{saleVal}</div>;
};

export default SaleBadge;
