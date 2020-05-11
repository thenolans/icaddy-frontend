import React, { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";

import TokenContext from "../../contexts/token";
import Urls from "../../constants/urls";

const Logout = () => {
  const { setToken } = useContext(TokenContext);

  useEffect(() => {
    localStorage.clear();
    setToken(null);
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return <Redirect to={Urls.routes.login} />;
};

export default Logout;
