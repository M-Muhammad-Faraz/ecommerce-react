import React from "react";
import { ProductsProvider } from "./ProductsContext";
import Hijab from "./Hijab";
const Store = () => {
  return (
    <ProductsProvider>
      <Hijab />
    </ProductsProvider>
  );
};

export default Store;
