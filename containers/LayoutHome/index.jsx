import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const LayoutHome = ({ children }) => {
  return (
    <Fragment>
      <Header></Header>
      <main> {children}</main>
      <Footer></Footer>
    </Fragment>
  );
};

export default LayoutHome;
