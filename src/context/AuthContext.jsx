import { createContext, useState, useContext } from "react";
import { getItem } from "../core/services/storage/Storage";

const AuthContext = createContext(false);
export const AuthProvider = ({ children }) => {
  const [isStudent, setIsStudent] = useState(Boolean(getItem("user")) === true);

  const [isAdmin, setIsAdmin] = useState(Boolean(getItem("admin")) === true);
  const loginAsStudent = (isStudent) => {
    setIsStudent(isStudent);
  };

  const logout = (isStudent) => {
    setIsStudent(isStudent);
  };

  const loginAsAdmin = (isEmployee) => {
    setIsAdmin(isEmployee);
  };

  const logoutAdmin = (isEmployee) => {
    setIsAdmin(isEmployee);
  };

  return (
    <AuthContext.Provider
      value={{
        loginAsStudent,
        logout,
        isStudent,
        loginAsAdmin,
        logoutAdmin,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
