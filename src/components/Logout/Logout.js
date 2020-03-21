import React, { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";

import TokenContext from "../../contexts/token";

const Logout = () => {
  const { setToken } = useContext(TokenContext);

  useEffect(() => {
    localStorage.clear();
    setToken(null);
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return <Redirect to="/login" />;
};

export default Logout;
