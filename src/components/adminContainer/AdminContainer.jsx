import React from "react";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { SignOutStudent } from "../../core/services/api/Student-authentication.api";
import { useAuth } from "../../context/AuthContext";
import { getItem, setItem } from "../../core/services/storage/Storage";
import { getAdminById } from "../../core/services/api/Employee.api";

// Users will lead to this component when they click on the logout button.
// The local storage will be cleared and the public routes will be rendered instead of private routes.
const AdminContainer = () => {
  const history = useNavigate();
  const user = useAuth();
  const location = useLocation();

  const getadmin = async (adminId) => {
    const response = await getAdminById(adminId);

    if (response.success) {
      setItem("admin", JSON.stringify(response.result));

      user.loginAsAdmin(Boolean(getItem("admin")) === true);
    }
  };
  useEffect(() => {
    SignOutStudent();

    user.loginAsStudent(Boolean(getItem("user")) === true);
    const queryParams = new URLSearchParams(location.search);

    let token = queryParams.get("adminToken");

    let decoded = jwt_decode(token);
    console.log(decoded);
    if (decoded) {
      setItem("token", token.slice(4));
      getadmin(decoded._id);
      history("/home");
    }
  });

  return (
    <p>
      <strong>Location Props: </strong>
      {JSON.stringify(location, null, 2)}
    </p>
  );
};

export { AdminContainer };
