import React from "react";
import classes from "./Select.module.css";

const Select = ({ func, options, head }) => {
  return (
    <select
      onChange={(e) => {
        func(e.target.value);
        // console.log(e.target.value);
      }}
      className={"form-select " + classes.select}
      aria-label="Default select example"
    >
      <option value={999}>{head}</option>
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        );
      })}
      ;
    </select>
  );
};

export default Select;
