import React from "react";
import classes from "./SidebarAccordionCategoryItem.module.css";
const SidebarAccordionItem = ({ types }) => {
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
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        }}
        className={classes.accordion}
      >
        {types.title}
      </button>
      <div className={classes.panel}>
        <ul>
          {types.dropdown.map((type, index) => {
            return <li key={index}> {type}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default SidebarAccordionItem;
