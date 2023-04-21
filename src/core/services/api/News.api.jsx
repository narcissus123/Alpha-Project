import { instance } from "../interceptor/Interceptor";

const getNews = async () => {
  try {
    const response = await instance.get("/api/news");
    return response.data;
  } catch (error) {
    return error;
  }
};

const getNewsByPage = async (pagenumber, pagesize) => {
  try {
    const response = await instance.get(
      `/api/news/list?pagenumber=${pagenumber}&pagesize=${pagesize}&category=news`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

const getNewsById = async (newsId) => {
  try {
    const response = await instance.get(`/api/news/${newsId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export { getNews, getNewsByPage, getNewsById };
