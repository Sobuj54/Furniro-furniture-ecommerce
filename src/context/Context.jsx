import { createContext } from "react";

export const AuthProvider = createContext("");

const Context = ({ children }) => {
  const authInfo = {};

  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

export default Context;
