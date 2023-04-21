import { instance } from "../interceptor/Interceptor";

const getCourses = async () => {
  try {
    const response = await instance.get("/api/course/getall");
    return response.data;
  } catch (error) {
    return error;
  }
};

const getCourseById = async (courseId) => {
  try {
    const response = await instance.get(`/api/course/${courseId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

const getCoursesByPage = async (pagenumber, pagesize) => {
  try {
    const response = await instance.get(
      `/api/course/list?pagenumber=${pagenumber}&pagesize=${pagesize}`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

const addCourse = async (userId) => {
  try {
    const response = await instance.post(
      `/api/course/addStudentToCourse/643a0e20bfbd6ee8cde99bea`,
      {
        courseId: "63540459ca5b756ac5d89fa4",
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

const deleteCourse = async (courseId, userId) => {
  try {
    const response = await instance.post(
      `/api/course/removeStudentFromCourse/${userId}`,
      {
        courseId,
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export { getCourses, getCoursesByPage, addCourse, getCourseById, deleteCourse };
