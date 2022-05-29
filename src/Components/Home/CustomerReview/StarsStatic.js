import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const StarsStatic = ({ rate, color = "#32353c" }) => {
  const totalRating = 5;
  const rating = rate;
  const filled = [];
  const unfilled = [];
  for (let index = 0; index < rating; index++) {
    filled.push(<AiFillStar fill={color} />);
  }
  for (let index = 0; index < totalRating - rating; index++) {
    unfilled.push(<AiOutlineStar fill={color} />);
  }
  const total = [...filled, ...unfilled];

  return (
    <>
      {total.map((val, index) => {
        return <span key={index}>{val}</span>;
      })}
    </>
  );
};

export default StarsStatic;
