import React, { useContext, useEffect, useState } from "react";
import { client } from "../../lib/client";
const AllProds = React.createContext();
export const useData = () => {
  return useContext(AllProds);
};
const AllProdsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState();
  useEffect(() => {
    setLoader(true);
    client
      .fetch(
        `*[_type=="product"]{
          details,image,name,price,sale,
          slug,
          category->
          
      }`
      )
      .then((res) => {
        setData(res);
        setLoader(true);
      });
  }, []);
  return (
    <AllProds.Provider value={{ data: data, loading: loader }}>
      {children}
    </AllProds.Provider>
  );
};

export { AllProdsProvider };
