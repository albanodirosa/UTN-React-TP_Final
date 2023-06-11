import React from "react";
import { useState } from "react";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(
    localStorage.getItem("login") ? true : false
  );
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  );

  const handleLogin = (user) => {
    setLogin(true);
    localStorage.setItem("login", true);
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleLogout = () => {
    setLogin(false);
    localStorage.removeItem("login");
    setUser({});
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ login, handleLogin, handleLogout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
