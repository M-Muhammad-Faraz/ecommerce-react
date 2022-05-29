import React from "react";
import classes from "./MainAccordionItem.module.css";

const MainAccordionItem = ({ children, title }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          //
          const target = e.currentTarget;
          target.classList.toggle(classes.active);
          var panel = target.nextElementSibling;

          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = "100%";
          }
        }}
        className={classes.accordion}
      >
        {title}
      </button>
      <div className={classes.panel} style={{ display: "none" }}>
        {children}
      </div>
    </div>
  );
};

export default MainAccordionItem;
