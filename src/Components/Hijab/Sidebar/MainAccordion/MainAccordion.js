import React, { useCallback, useContext, useState } from "react";
import MainAccordionItem from "./MainAccordionItem";
import SidebarAccordionCategory from "../CategoriesAccordion/SidebarAccordionCategory";
import MultiRangeSlider from "../Slider/MultiRangeSlider";
import { ProductsContext } from "../../ProductsContext";

const MainAccordion = () => {
  // const [runner, setRunner] = useState(false);
  const getprops = useContext(ProductsContext);
  const changer = useCallback(
    (minmax) => {
      const minmx = minmax;
      const filteredproducts = getprops.products.filter((item) => {
        return (
          item.price - item.price * (item.sale / 100) < minmx.max &&
          item.price - item.price * (item.sale / 100) > minmx.min
        );
      });
      getprops.setProducts(filteredproducts);
    },
    [getprops.filteredproducts]
  );

  console.log(getprops);
  return (
    <>
      <MainAccordionItem title="CATEGORIES">
        <SidebarAccordionCategory />
      </MainAccordionItem>
      <MainAccordionItem title="PRICE">
        <MultiRangeSlider min={0} max={12000} onChange={changer} />
      </MainAccordionItem>
      <div></div>
    </>
  );
};

export default MainAccordion;
