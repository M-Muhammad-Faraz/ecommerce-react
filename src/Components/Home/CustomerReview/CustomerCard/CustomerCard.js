import React from "react";
import StarsStatic from "../StarsStatic";
import classes from "./CustomerCard.module.css";

const CustomerCard = ({ pname, desc, rate }) => {
  const PersonName = pname;
  const Desc = desc;
  const rating = rate;
  return (
    <div className={classes.card}>
      <div className={classes.holder}>
        <img
          src={"https://via.placeholder.com/150x150.png?text=faraz"}
          alt="Person Image"
        />
      </div>
      <h3>{PersonName}</h3>
      <p>{Desc}</p>
      <div className={classes.stars}>
        <StarsStatic rate={rating} />
      </div>
    </div>
  );
};

export default CustomerCard;
