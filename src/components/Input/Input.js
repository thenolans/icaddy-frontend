import cx from "classnames";
import React from "react";

import "./input.scss";

const Input = ({ className, type = "text", ...props }) => {
  return <input className={cx("input", className)} type={type} {...props} />;
};

export default Input;
