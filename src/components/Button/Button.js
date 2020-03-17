import cx from "classnames";
import React from "react";

import "./button.scss";

const Button = ({ className, type = "button", ...props }) => {
  return <button className={cx("button", className)} type={type} {...props} />;
};

export default Button;
