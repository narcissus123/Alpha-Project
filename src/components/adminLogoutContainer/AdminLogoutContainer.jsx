import { useEffect } from "react";

import { SignOutAdmin } from "../../core/services/api/admin-authentication.api";
import { useAuth } from "../../context/AuthContext";
import { getItem } from "../../core/services/storage/Storage";

// Users will lead to this component when they click on the logout button.
// The local storage will be cleared and the public routes will be rendered instead of private routes.
const AdminLogoutContainer = () => {
  const user = useAuth();

  console.log(user.isAdmin);
  useEffect(() => {
    if (Boolean(getItem("admin")) === true) {
      SignOutAdmin();

      user.loginAsAdmin(Boolean(getItem("admin")) === true);

      window.location.href = "http://localhost:5174/";
    }
  });

  return null;
};

export { AdminLogoutContainer };
