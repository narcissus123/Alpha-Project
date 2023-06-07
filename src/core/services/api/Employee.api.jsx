import { instance } from "../interceptor/Interceptor";

const getInstructors = async () => {
  try {
    const response = await instance.get("/api/employee/getallteachers");
    return response.data;
  } catch (error) {
    return error;
  }
};

const getAdminById = async (adminId) => {
  try {
    const response = await instance.get(`/api/employee/${adminId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export { getInstructors, getAdminById };
