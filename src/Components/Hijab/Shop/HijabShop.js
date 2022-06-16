import React, { useContext, useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import Products from "../Products/Products";
import classes from "./HijabShop.module.css";
// import imag from "./300x350.png";
import Select from "../Select/Select";
import { ProductsContext } from "../ProductsContext";
const HijabShop = ({ products, allprods }) => {
  const getprops = useContext(ProductsContext);
  const sortingOptions = [
    { value: 0, label: "Sort in Alphabetical Order(a-z)" },
    { value: 1, label: "Sort in Alphabetical Order(z-a)" },
    { value: 2, label: "Sort by rating" },
    { value: 3, label: "Sort by price" },
  ];
  const showElemOptions = [
    { value: 0, label: "4" },
    { value: 1, label: "5" },
    { value: 2, label: "6" },
  ];
  return (
    <div className="col">
      <div className={"d-flex justify-content-between " + classes.viewBar}>
        <div>
          <Select
            func={getprops.sort}
            options={sortingOptions}
            head={"Sort by"}
          />
        </div>
        <div className="d-flex">
          <div>
            <div className="d-flex align-items-center">
              <div>show</div>
              <div>
                <Select func={() => {}} options={showElemOptions} head={6} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.productsGrid}>
        {products.map((product, index) => {
          return (
            <Products
              key={index}
              product={product}
              // img={imag}
              allprods={allprods}
            />
          );
        })}
      </div>
      <div style={{ height: "10vh" }}></div>
      <div className={classes.pagination}>
        <Pagination
          paginate={getprops.paginate}
          totalProducts={getprops.filteredProducts.length}
          productsPerPage={6}
        />
      </div>
    </div>
  );
};

export default HijabShop;
