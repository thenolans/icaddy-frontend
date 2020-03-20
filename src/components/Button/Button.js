import cx from "classnames";
import React from "react";

import "./button.scss";

const Button = ({
  as: T = "button",
  className,
  fluid,
  shadow,
  type = "button",
  ...props
}) => {
  return (
    <T
      className={cx(
        "button",
        { "button--fluid": fluid },
        { "button--shadow": shadow },
        className
      )}
      type={type}
      {...props}
    />
  );
};

export default Button;
