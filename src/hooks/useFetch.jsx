import { useState, useEffect } from "react";

export const useFetch = (request, ...rest) => {
  /* Rendering spinner while we are waiting for backend response. */
  const [isLoading, setIsLoading] = useState(true);

  /* Saving news information sent from backend. */
  const [data, setData] = useState([]);

  const getAllNews = async (ignore) => {
    try {
      const response = await request(rest);

      if (response.success && !ignore) {
        setData(response.result);
        setIsLoading(false);
      } else if (response.status === 200 && !ignore) {
        setData(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      //toast.error(errorMessage);
    }
  };

  /* Call API to get all data.*/
  useEffect(() => {
    let ignore = false;
    getAllNews(ignore);

    return () => {
      ignore = true;
    };
  }, []);

  return { isLoading, data };
};
