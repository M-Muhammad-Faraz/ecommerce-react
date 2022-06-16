import React, { useContext, useEffect, useState } from "react";
import classes from "./Product.module.css";
import { urlFor } from "../../../lib/client";
import { useParams } from "react-router-dom";
import { useData } from "../../Utility/AllProdsProvider";
import ProductDetail from "./ProductDetail";

const Product = () => {
  const [loader, setLoader] = useState(true);
  const { slug } = useParams();
  const [imgs, setImgs] = useState("");
  const getprops = useData();
  const data = getprops.data;
  const [product, setProduct] = useState({});
  useEffect(() => {
    data.forEach((element) => {
      if (element.slug.current == slug) {
        setProduct(element);
        setImgs(element.image ? urlFor(element.image[0]) : "");
      }
      setLoader(false);
    });
  }, [data, product]);
  return (
    <>
      {loader ? (
        <div
          style={{ height: "100vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          loading
        </div>
      ) : (
        <>
          <div style={{ height: "15vh" }}></div>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div>
                  <img
                    src={imgs}
                    width="300px"
                    height={"400px"}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div></div>
              </div>
              <div className="col-8">
                <ProductDetail
                  name={product.name}
                  sale={product.sale}
                  price={product.price}
                  details={product.details}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Product;
