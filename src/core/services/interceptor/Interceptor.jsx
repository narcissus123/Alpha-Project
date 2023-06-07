import axios from "axios";
import { getItem } from "../storage/Storage";
import { Config } from "../../../configs/Config";
import { useAuth } from "../../../context/AuthContext";

const baseURL = Config.baseUrl;

const instance = axios.create({
  baseURL,
  // timeout: 10000,
});

//Response interceptor
instance.interceptors.response.use(
  (response) => {
    //Handling 2xx status code, successful responses.
    return response;
  },
  (error) => {
    //Handling status codes outside the range of 2xx, client error responses.
    const expectedError =
      error.response &&
      error.response.state >= 400 &&
      error.response.status < 500;
    if (!expectedError) {
      return error.response;
    }

    //Handling server error responses.
    return Promise.reject(error);
  }
);
//const user = useAuth();
//Request interceptor
instance.interceptors.request.use(
  (config) => {
    //

    //Setting token before request is sent
    const token = getItem("token");
    console.log("token:", token);
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    return config;
  },
  (error) => {
    //Handling request error
    return Promise.reject(error);
  }
);

export { instance };

// const user = useAuth();

//     //Setting token before request is sent
//     const token = user.isAdmin ? getItem("adminToken") : getItem("token");
