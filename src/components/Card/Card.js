import cx from "classnames";
import React from "react";

import "./card.scss";

const Card = ({ className, ...props }) => {
  return <div className={cx("card border-0", className)} {...props} />;
};

export default Card;
