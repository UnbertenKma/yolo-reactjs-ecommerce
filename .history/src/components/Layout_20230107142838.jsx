import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import logo1 from "../assets/images/simsodeptuc36.vn.png";

import Header from "./Header";
import Footer from "./Footer";
import ProductViewModal from "./ProductViewModal";

import Routes from "../routes/Routes";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <div style={{ marginTop: "40px" }}>
              <img src={logo1} alt="" />
            </div>
            <Header {...props} />
            <div className="container" style={{marginTop: '-50px'}}>
              <div className="main">
                <Routes />
              </div>
            </div>
            <Footer />
            <ProductViewModal />
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;