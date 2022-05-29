import React from "react";
import MainAccordionItem from "./MainAccordionItem";
import SidebarAccordionCategory from "../CategoriesAccordion/SidebarAccordionCategory";
import MultiRangeSlider from "../Slider/MultiRangeSlider";

const MainAccordion = ({ allprods, setProducts }) => {
  return (
    <>
      <MainAccordionItem title="CATEGORIES">
        <SidebarAccordionCategory />
      </MainAccordionItem>
      <MainAccordionItem title="PRICE">
        <MultiRangeSlider
          min={0}
          max={12000}
          onChange={(minmax) => {
            setTimeout(() => {
              const filteredproducts = allprods.filter((item) => {
                return (
                  item.price - item.price * (item.sale / 100) < minmax.max &&
                  item.price - item.price * (item.sale / 100) > minmax.min
                );
              });
              setProducts(filteredproducts);
            }, 2000);
          }}
        />
      </MainAccordionItem>
    </>
  );
};

export default MainAccordion;
