import { instance } from "../interceptor/Interceptor";

const getUserComment = async (comment) => {
  try {
    const response = await instance.get("/api/contactUs", comment);
    return response.data;
  } catch (error) {
    return error;
  }
};

export { getUserComment };
