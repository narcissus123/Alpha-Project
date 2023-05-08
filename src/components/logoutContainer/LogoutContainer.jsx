import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignOutStudent } from "../../core/services/api/Student-authentication.api";
import { useAuth } from "../../context/AuthContext";
import { getItem } from "../../core/services/storage/Storage";

// Users will lead to this component when they click on the logout button.
// The local storage will be cleared and the public routes will be rendered instead of private routes.
const LogoutContainer = () => {
  const history = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    SignOutStudent();
    auth.login(Boolean(getItem("user")) === true);
    history("/home");
  });

  return null;
};

export { LogoutContainer };
