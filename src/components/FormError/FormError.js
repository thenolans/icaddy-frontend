import cx from "classnames";
import React from "react";

import "./formError.scss";

const FormError = ({ className, ...props }) => {
  return <div className={cx("form-error", className)} {...props} />;
};

export default FormError;
