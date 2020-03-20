import cx from "classnames";
import React from "react";

import "./container.scss";

const Container = ({ className, ...props }) => {
  return <div className={cx("container", className)} {...props} />;
};
export default Container;
