import { instance } from "../interceptor/Interceptor";

const getInstructors = async () => {
  try {
    const response = await instance.get("/api/employee/getallteachers");
    return response.data;
  } catch (error) {
    return error;
  }
};

export { getInstructors };
