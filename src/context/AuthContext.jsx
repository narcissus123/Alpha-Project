import { createContext, useState, useContext } from "react";
import { getItem } from "../core/services/storage/Storage";

const AuthContext = createContext(false);
export const AuthProvider = ({ children }) => {
  const [isUser, setIsEmployee] = useState(Boolean(getItem("user")) === true);

  const login = (isUser) => {
    setIsEmployee(isUser);
  };

  const logout = (isUser) => {
    setIsEmployee(isUser);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
