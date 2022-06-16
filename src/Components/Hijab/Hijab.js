import React, { useState, useReducer, useCallback, useEffect } from "react";
import HijabShop from "./Shop/HijabShop";
import Sidebar from "./Sidebar/Sidebar.js";
import { ProductsContext, useProductData } from "./ProductsContext";
const Hijab = () => {
  const data = useProductData();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    setProducts(data.products);
    setFilteredProducts(data.products);
  }, [data]);

  const [_, forceUpdate] = useReducer((x) => x + 1, 0); //update state
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  const sort = (option) => {
    if (option == 0) {
      const sortinAZ = products.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setFilteredProducts(sortinAZ);
      forceUpdate();
    } else if (option == 1) {
      const sortinZA = products.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
      setFilteredProducts(sortinZA);

      forceUpdate();
    } else if (option == 2) {
      const sortByRating = products.sort((a, b) => {
        return a.rating - b.rating;
      });
      setFilteredProducts(sortByRating);
      forceUpdate();
    } else if (option == 3) {
      const sortByPrice = products.sort((itema, itemb) => {
        return (
          itema.price -
          itema.price * (itema.sale / 100) -
          (itemb.price - itemb.price * (itemb.sale / 100))
        );
      });
      setFilteredProducts(sortByPrice);
      forceUpdate();
    }
  };
  const filter = (produvt) => {
    setFilteredProducts(produvt);
    forceUpdate();
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //get current posts
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  // console.log(data);
  return (
    <>
      {data.loading ? (
        <div>
          <div className="container">
            <div style={{ height: "15vh" }}></div>
            <div className="row">
              <ProductsContext.Provider
                value={{
                  paginate: paginate,
                  productsPerPage: productsPerPage,
                  products: products,
                  filteredProducts: filteredProducts,
                  sort: sort,
                  setProducts: filter,
                }}
              >
                <Sidebar />
                <HijabShop
                  products={[...currentProducts]}
                  allprods={products}
                />
              </ProductsContext.Provider>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{ height: "100vh" }}
            className="d-flex align-items-center justify-content-center"
          >
            Loading
          </div>
        </div>
      )}
    </>
  );
};

export default Hijab;
