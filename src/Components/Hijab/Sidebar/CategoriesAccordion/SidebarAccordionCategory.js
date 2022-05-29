import React from "react";
import SidebarAccordionItem from "./SidebarAccordionCategoryItem";

const SidebarAccordionCategory = () => {
  return (
    <div>
      <SidebarAccordionItem
        key={0}
        types={{ title: "Type", dropdown: ["subtype1", "subtype2"] }}
      />
      <SidebarAccordionItem
        key={1}
        types={{ title: "Type", dropdown: ["subtype1", "subtype2"] }}
      />
      <SidebarAccordionItem
        key={2}
        types={{ title: "Type", dropdown: ["subtype1", "subtype2"] }}
      />
    </div>
  );
};

export default SidebarAccordionCategory;
