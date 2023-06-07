import { setItem, clearStorage } from "../storage/Storage";
import { instance } from "../interceptor/Interceptor";

export const SignInAdmin = async (adminInfo) => {
  try {
    const response = await instance.post("/api/auth/employee/login", adminInfo);

    const admin = JSON.stringify(response.data.result.employeeModel);
    const token = response.data.result.jwtToken;

    setItem("token", token);
    setItem("admin", admin);

    console.log(token);
    console.log(admin);

    return response.data;
  } catch (error) {
    console.log("error sign in: ", error);
    return error;
  }
};

export const SignOutAdmin = async () => {
  try {
    clearStorage();
  } catch (error) {
    return error;
  }
};
