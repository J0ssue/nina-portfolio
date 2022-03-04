import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Drawer } from "antd";
import { Burger } from "../../common/Icons";
import { renderNavigationLinks } from "./helpers";

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
    <nav className="w-full flex flex-row items-center justify-between p-8">
      <p className="font-ninaBrandRegular text-brand tracking-tight m-0">
        Nina's Photos
      </p>

      <button onClick={() => triggerDrawer(true)}>
        <Burger />
      </button>

      <Drawer
        bodyStyle={{
          color: "white",
          backgroundColor: "#33323d",
        }}
        width={drawerSizeCalc(props.drawerSize)}
        closable={false}
        onClose={() => triggerDrawer(false)}
        visible={showDrawer}
      >
        <ul className="uppercase text-body-1-sm flex flex-column justify-center">
          {renderNavigationLinks(navigate, triggerDrawer, false)}
        </ul>
      </Drawer>
    </nav>
  );
};

export default Navbar;
