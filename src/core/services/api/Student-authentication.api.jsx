import { setItem, clearStorage } from "../storage/Storage";
import { instance } from "../interceptor/Interceptor";

const SignInStudent = async (obj) => {
  try {
    const response = await instance.post("/api/auth/login", obj);
    const token = response.data.result.jwtToken;
    const user = JSON.stringify(response.data.result.studentModel);
    setItem("token", token);
    setItem("user", user);

    return response.data;
  } catch (error) {
    return error;
  }
};

const SignUpStudent = async (obj) => {
  try {
    const response = await instance.post("/api/auth/register", obj);
    return response.data;
  } catch (error) {
    return error;
  }
};

const SignOutStudent = async () => {
  try {
    clearStorage();
  } catch (error) {
    return error;
  }
};

export { SignInStudent, SignUpStudent, SignOutStudent };
