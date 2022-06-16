import React from "react";

import StarsStatic from "../../Home/CustomerReview/StarsStatic";
import classes from "./Product.module.css";

const ProductDetail = (product) => {
  return (
    <>
      <div className={classes.productHead}>{product.name}</div>
      <div className={classes.rating + " mb-3"}>
        <StarsStatic color="#b4cd21" rate={2} />{" "}
        <span>(There are currently no reviews)</span>
      </div>
      <div className={classes.price}>
        <div>Price:</div>
        {product.sale ? <div>{product.price}rs/-</div> : <div></div>}
        <div>{product.price - (product.sale / 100) * product.price}rs/-</div>
      </div>
      <div className={classes.desript}>
        <h4>Product Description</h4>
        {product.details}
      </div>
    </>
  );
};

export default ProductDetail;
