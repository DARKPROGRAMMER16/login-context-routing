import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [myname, setMyname] = useState("");

  const setLoginTrue = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setLoginTrue, myname, setMyname }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
