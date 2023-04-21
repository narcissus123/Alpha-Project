import { instance } from "../interceptor/Interceptor";

const getAllComments = async () => {
  try {
    const response = await instance.get("/api/comments/");

    return response.data;
  } catch (error) {
    return error;
  }
};

export { getAllComments };
