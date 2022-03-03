import React from "react";
import "./styles/Default.scss";

const Default = (props) => {
  return <div className="default-layout">{props.children}</div>;
};

export default Default;
