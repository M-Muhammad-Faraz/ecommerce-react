import React from "react";
import MainAccordion from "./MainAccordion/MainAccordion";

const Sidebar = ({ allprods, setProducts }) => {
  return (
    <div className="col-3">
      <MainAccordion allprods={allprods} setProducts={setProducts} />
    </div>
  );
};

export default Sidebar;
