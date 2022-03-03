import React from "react";
import classnames from "classnames";
import "./styles/ButtonPrimary.scss";

import { TrippleChevronDown } from "../Icons";

const ButtonSecondary = (props) => {
  const { onClick, isDisabled, children, isSecondary } = props;

  const secondaryClassnames = classnames(
    "bg-white border p-5 transition-all capitalize",
    { "border-black text-black hover:bg-black hover:text-white": !isDisabled },
    { "border-n-gray-500 text-gray-500": isDisabled }
  );

  const primaryClassnames = classnames(
    "primary-button text-white pr-5 transition-all flex flex-row items-center uppercase",
    {
      "bg-n-dark-blue hover:bg-n-cyan": !isDisabled,
      "bg-n-gray": isDisabled,
    }
  );

  const buttonClassNames = isSecondary
    ? secondaryClassnames
    : primaryClassnames;

  const ButtonChevron = (
    <div className="p-5 mr-2">
      <TrippleChevronDown disabled={isDisabled} />
    </div>
  );

  return (
    <button
      disabled={isDisabled}
      className={buttonClassNames}
      onClick={onClick}
    >
      {!isSecondary && ButtonChevron}
      {children || "default text"}
    </button>
  );
};

ButtonSecondary.defaultProps = {
  isDabled: false,
  isSecondary: false,
};

export default ButtonSecondary;
