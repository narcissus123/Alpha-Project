import { instance } from "../interceptor/Interceptor";

const updateStudentInfo = async (userId, obj) => {
  try {
    const response = await instance.put(`/api/student/${userId}`, obj);
    return response;
  } catch (error) {
    return error;
  }
};

export { updateStudentInfo };
