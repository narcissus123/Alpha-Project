import { instance } from "../interceptor/Interceptor";

const updateStudentInfo = async (userId, obj) => {
  try {
    const response = await instance.put(`/api/student/${userId}`, obj);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

const getStudentById = async (studentId) => {
  try {
    const response = await instance.get(`/api/student/${studentId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export { updateStudentInfo, getStudentById };
