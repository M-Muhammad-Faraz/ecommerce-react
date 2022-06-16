import React, { useState } from "react";
import classes from "./Products.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import StarsStatic from "../../Home/CustomerReview/StarsStatic";
import { Link } from "react-router-dom";
import { urlFor } from "../../../lib/client";
const Products = ({ product }) => {
  const [heart, setHeart] = useState(false);
  console.log(product);
  return (
    <div className={classes.Product}>
      <Link to={`${product.slug.current}`} style={{ textDecoration: "none" }}>
        <div className={classes.imgHolder}>
          {product.sale ? <div>-{product.sale}%</div> : <></>}
          <img src={product.image ? urlFor(product.image[0]) : ""} alt="" />
        </div>
      </Link>
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
        <div className={classes.category}>{product.category.categoryName}</div>
        <div className={classes.prodName}>{product.name.toUpperCase()}</div>
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

export default Products;
