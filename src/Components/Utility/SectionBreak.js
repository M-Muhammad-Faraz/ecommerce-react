import React from "react";
import { Fade } from "react-reveal";
const SectionBreak = () => {
  return (
    <Fade>
      <div
        style={{
          maxWidth: "90vw",
          backgroundColor: "#666",
          height: "1px",
          margin: "80px auto",
          borderRadius: "15%",
        }}
      ></div>
    </Fade>
  );
};

export default SectionBreak;
