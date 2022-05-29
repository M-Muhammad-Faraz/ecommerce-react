import React, { useState } from "react";
import classes from "./Product.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import StarsStatic from "../../Home/CustomerReview/StarsStatic";
const Product = ({ product, img }) => {
  const [heart, setHeart] = useState(false);
  return (
    <div className={classes.Product}>
      <div className={classes.imgHolder}>
        {product.sale ? <div>-{product.sale}%</div> : <></>}
        <img src={img} alt="" />
      </div>
      <div className={classes.ProductDetails}>
        <div
          className={classes.heart}
          onClick={() => {
            setHeart(!heart);
          }}
        >
          {heart ? (
            <AiFillHeart fill="#b79b6c" />
          ) : (
            <AiOutlineHeart fill="#b79b6c" />
          )}
        </div>
        <div className={classes.category}>{product.category}</div>
        <div className={classes.prodName}>{product.prodName.toUpperCase()}</div>
        <div className="mb-1">
          <StarsStatic color="#b79b6c" rate={product.rating} />
        </div>
        <div className={classes.price}>
          {product.sale ? (
            <div className={classes.saleExist}>
              <span>Rs {product.price}</span>
              <div>
                Rs {product.price - (product.price * product.sale) / 100}
              </div>
            </div>
          ) : (
            <>
              <div>Rs {product.price}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
