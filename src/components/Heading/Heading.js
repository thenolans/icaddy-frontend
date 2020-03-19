import React from "react";

const Heading = ({ as: H = "h1", ...props }) => {
  return <H {...props} />;
};

export default Heading;
