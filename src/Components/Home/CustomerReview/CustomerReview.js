import React from "react";
import CustomerCard from "./CustomerCard/CustomerCard";
import Stars from "../../Utility/Stars";
import StarsStatic from "./StarsStatic";

const CustomerReview = () => {
  const reviews = [
    {
      name: "M faraz",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo saepe consequatur quasi natus cupiditate incidunt officia voluptate dolore. Quae, quia. Voluptatum reprehenderit dolore omnis tempore eos eveniet iusto delectus quidem.",
      rate: 5,
    },
    {
      name: "M Daraz",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo saepe consequatur quasi natus cupiditate incidunt officia voluptate dolore. Quae, quia. Voluptatum reprehenderit dolore omnis tempore eos eveniet iusto delectus quidem.",
      rate: 4,
    },
    {
      name: "M Saraz",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo saepe consequatur quasi natus cupiditate incidunt officia voluptate dolore. Quae, quia. Voluptatum reprehenderit dolore omnis tempore eos eveniet iusto delectus quidem.",
      rate: 5,
    },
  ];
  return (
    <div className="container">
      <div className="d-flex justify-content-center m-3 ">
        <h2
          style={{
            fontSize: "2.5em",
            margin: "20px 0",
          }}
        >
          Customer{" "}
          <span
            style={{
              color: "#b79b6c",
            }}
          >
            Reviews
          </span>
        </h2>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        {reviews.map((data, index) => {
          return (
            <CustomerCard
              key={index}
              pname={data.name}
              desc={data.desc}
              rate={data.rate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CustomerReview;
