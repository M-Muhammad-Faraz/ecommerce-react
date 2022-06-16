import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AllProdsProvider } from "../Utility/AllProdsProvider";

const Layout = () => {
  return (
    <AllProdsProvider>
      <Header />
      <Footer />
    </AllProdsProvider>
  );
};

export default Layout;
