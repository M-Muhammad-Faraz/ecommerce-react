import React, { useEffect, useContext, useState } from "react";
import { client } from "../../lib/client";

const ProductsDataContext = React.createContext();
export const ProductsContext = React.createContext();

export const useProductData = () => {
  return useContext(ProductsDataContext);
};
export const useProduct = () => {};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState();
  useEffect(() => {
    setLoader(false);
    client
      .fetch(
        `*[_type=="product"]{
          details,image,name,price,sale,
          slug,
          category->
          
      }`
      )
      .then((res) => {
        setProducts(res);
        setLoader(true);
      });
  }, []);
  return (
    <>
      <ProductsDataContext.Provider
        value={{ products: products, loading: loader }}
      >
        {children}
      </ProductsDataContext.Provider>
    </>
  );
};
