import React from "react";

import { Navbar, Footer } from "../components/core/Navigation";

import "./styles/Default.scss";

const Default = (props) => {
  return (
    <div className="default-layout container m-auto">
      <Navbar drawerSize="small" />
      {props.children}
      <Footer />
    </div>
  );
};

export default Default;
