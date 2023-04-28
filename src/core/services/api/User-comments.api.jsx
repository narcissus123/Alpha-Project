import { instance } from "../interceptor/Interceptor";

const GetUserComments = async () => {
  try {
    const response = await instance.get("/api/comments/");

    return response.data;
  } catch (error) {
    return error;
  }
};

const SendUserComments = async (obj) => {
  try {
    const response = await instance.post("/api/comments/send", obj);
    return response;
  } catch (error) {
    return error;
  }
};

export { GetUserComments, SendUserComments };
