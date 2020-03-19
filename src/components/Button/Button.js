import cx from "classnames";
import React from "react";

import "./button.scss";

const Button = ({
  as: T = "button",
  className,
  fluid,
  type = "button",
  ...props
}) => {
  return (
    <T
      className={cx("button", { "button--fluid": fluid }, className)}
      type={type}
      {...props}
    />
  );
};

export default Button;
