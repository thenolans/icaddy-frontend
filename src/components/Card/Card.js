import cx from "classnames";
import React from "react";

import "./card.scss";

const Card = ({ className, ...props }) => {
  return <div className={cx("card", className)} {...props} />;
};

export default Card;
