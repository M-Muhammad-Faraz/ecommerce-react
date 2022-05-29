import React from "react";
import OurInfo from "./OurInfo/OurInfo";
import Question from "./Questions/Question";
const Contact = () => {
  return (
    <div style={{ height: "100vh" }} className="container">
      <div className="row" style={{ height: "inherit" }}>
        <Question />
        <OurInfo />
      </div>
    </div>
  );
};

export default Contact;
