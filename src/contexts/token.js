import React, { useState } from "react";

const TokenContext = React.createContext({});

export const TokenProvider = props => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {props.children}
    </TokenContext.Provider>
  );
};

export default TokenContext;
