import React, { useEffect, useState, useReducer } from "react";
import data from "./MOCKDATA";
import HijabShop from "./Shop/HijabShop";
import Sidebar from "./Sidebar/Sidebar.js";

const Hijab = () => {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0); //update state
  const [products, setProducts] = useState(data);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const PostPerPage = (v) => {
    console.log("ok");
    setProductsPerPage(v);
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //get current posts
  const getCurrentProducts = () => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
    return currentProducts;
  };
  const sort = (option) => {
    if (option == 0) {
      const sortinAZ = products.sort((a, b) => {
        return a.prodName.localeCompare(b.prodName);
      });
      setProducts(sortinAZ);
      forceUpdate();
    } else if (option == 1) {
      const sortinZA = products.sort((a, b) => {
        if (a.prodName > b.prodName) {
          return -1;
        }
        if (a.prodName < b.prodName) {
          return 1;
        }
        return 0;
      });
      setProducts(sortinZA);
      forceUpdate();
    } else if (option == 2) {
      const sortByRating = products.sort((a, b) => {
        return a.rating - b.rating;
      });
      setProducts(sortByRating);
      forceUpdate();
    } else if (option == 3) {
      const sortByPrice = products.sort((itema, itemb) => {
        return (
          itema.price -
          itema.price * (itema.sale / 100) -
          (itemb.price - itemb.price * (itemb.sale / 100))
        );
      });
      setProducts(sortByPrice);
      forceUpdate();
    }
  };
  const filter = (produvt) => {
    setFilteredProducts(produvt);
    forceUpdate();
  };

  return (
    <div>
      <div className="container">
        <div style={{ width: "100vw", height: "15vh" }}></div>
        <div className="row">
          <Sidebar allprods={products} setProducts={filter} />
          <HijabShop
            paginate={paginate}
            products={[...getCurrentProducts()]}
            productsPerPage={productsPerPage}
            productsSize={filteredProducts.length}
            sorting={sort}
            setPostPerPage={PostPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Hijab;
