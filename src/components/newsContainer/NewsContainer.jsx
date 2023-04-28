import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Spinner } from "../common/spinner/Spinner";
import { Top } from "../layout/contentLayout/top/Top";
import { NewsCard } from "./newsCard/NewsCard";
import { Pagination } from "../common/pagination/Pagination";

import { getNews } from "../../core/services/api/News.api";
import { sortNews } from "../../core/utils/Sort";
import { itemsRange } from "../../core/utils/paginate";
import { filter, NewsSearchBasedFilter } from "../../core/utils/Filter";
import { useFetch } from "../../hooks/useFetch";

// This component renders news and articles.
const NewsContainer = () => {
  const { isLoading, data } = useFetch(getNews);

  /* Getting current page from pagination component */
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  /* Filter courses based on search input */
  const [searchedNews, setSearchedNews] = useState("");
  let filteredData = filter(data, searchedNews, NewsSearchBasedFilter);

  /* Calculating the first and last items of the current page */
  let [firstItem, lastItem] = itemsRange(
    currentPage,
    pageSize,
    filteredData.length
  );

  // Sort News and articles based on category.
  const history = useNavigate();
  const sortPathNameHandler = (pathName) => {
    if (pathName === "News") {
      history("/news?sort=" + pathName);
    } else if (pathName === "article") {
      history("/news?sort=" + pathName);
    }
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let isSorting = queryParams.get("sort");
  filteredData = sortNews(filteredData, isSorting);

  return (
    <div class="w-screen pb-12 ">
      <Top
        title="News"
        inputValue={searchedNews}
        handleSearch={(e) => {
          setSearchedNews(e.target.value);
        }}
        placeholder="Search by News title"
        setSortPathName={sortPathNameHandler}
        category={["News", "article"]}
        sortPlaceHolder="Sort News"
        sort={true}
      />

      {/* Displaying spinner or news information based on whether we received a response from the server or not. */}
      {isLoading ? (
        <Spinner Class="h-[43rem]" />
      ) : (
        <div class="grid-col grid h-auto w-auto ">
          <ToastContainer />
          <div class="w=4/5 m-auto grid h-auto grid-cols-2 sm:w-11/12 lg:grid-cols-3">
            {filteredData.slice(firstItem, lastItem).map((news, index) => (
              <NewsCard news={news} key={index} />
            ))}
          </div>

          <Pagination
            pageSize={pageSize}
            info={filteredData}
            setPage={(page) => {
              setCurrentPage(page);
            }}
          />
        </div>
      )}
    </div>
  );
};

export { NewsContainer };
