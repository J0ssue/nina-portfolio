import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Drawer } from "antd";
import { Burger } from "../../common/Icons";
import { renderNavigationLinks } from "./helpers";
import "./styles/Navbar.scss";

const Navbar = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const navigate = useNavigate();

  const triggerDrawer = (value) => {
    setShowDrawer(value);
  };

  const drawerSizeCalc = (size) => {
    let returnSize = null;
    switch (size) {
      case "small":
        returnSize = 300;
        break;
      case "medium":
        returnSize = 624;
        break;
      case "large":
        returnSize = 896;
        break;
    }
    return returnSize;
  };

  return (
    <nav className="navbar w-full flex flex-row items-center justify-between p-8">
      <Link
        to="/"
        className="font-ninaBrandRegular text-n-grayish text-brand tracking-tight m-0"
      >
        NK Photography
      </Link>

      <button className="md:hidden" onClick={() => triggerDrawer(true)}>
        <Burger />
      </button>

      <Drawer
        className="md:hidden"
        bodyStyle={{
          color: "white",
          backgroundColor: "#33323d",
        }}
        width={drawerSizeCalc(props.drawerSize)}
        closable={false}
        onClose={() => triggerDrawer(false)}
        visible={showDrawer}
      >
        <ul className="navbar__mobile-navigation uppercase font-ninaPublicSans text-body-1 flex flex-col justify-center items-center h-full w-full m-0">
          {renderNavigationLinks(navigate, triggerDrawer, false)}
        </ul>
      </Drawer>

      <ul className="navbar__desktop-navigation m-0 uppercase font-ninaPublicSans text-body-1-sm hidden md:flex md:text-body-2 items-center">
        {renderNavigationLinks(navigate)}
      </ul>
    </nav>
  );
};

export default Navbar;
