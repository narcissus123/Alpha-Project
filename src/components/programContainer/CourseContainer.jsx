import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

import { Spinner } from "../common/spinner/Spinner";
import { Top } from "../layout/contentLayout/top/Top";
import { CourseCard } from "./courseCard/CourseCard";
import { Pagination } from "../common/pagination/Pagination";

import { getCourses } from "../../core/services/api/Courses.api";
import { sortCourses } from "../../core/utils/Sort";
import { itemsRange } from "../../core/utils/paginate";
import { CourseSearchBasedFilter, filter } from "../../core/utils/Filter";
import { useFetch } from "../../hooks/useFetch";

// This component renders courses.
const CourseContainer = () => {
  /* Call API to get courses.*/
  const { isLoading, data } = useFetch(getCourses);

  /* Getting current page from pagination component */
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  /* Filter courses based on search input */
  const [searchedCourse, setSearchedCourse] = useState("");
  let filteredData = filter(data, searchedCourse, CourseSearchBasedFilter);

  /* Calculating the first and last items of the current page */
  let [firstItem, lastItem] = itemsRange(
    currentPage,
    pageSize,
    filteredData.length
  );

  // Sort courses based on course name or course start date.
  const history = useNavigate();

  const sortPathNameHandler = (pathName) => {
    if (pathName === "course name") {
      history("/programs?sort=" + pathName);
    } else if (pathName === "start date") {
      history("/programs?sort=" + pathName);
    }
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let isSorting = queryParams.get("sort");
  filteredData = sortCourses(filteredData, isSorting);

  return (
    <div class="w-screen pb-12">
      <Top
        title="Programs"
        inputValue={searchedCourse}
        handleSearch={(e) => {
          setSearchedCourse(e.target.value);
        }}
        placeholder="Search by course title"
        setSortPathName={sortPathNameHandler}
        category={["course name", "start date"]}
        sortPlaceHolder="Sort Courses"
        sort={true}
      />
      {isLoading ? (
        <Spinner Class="h-[43rem]" />
      ) : (
        <div class="grid-col grid h-auto transition-all duration-1000 ease-linear ">
          <ToastContainer />

          <div class="w=4/5 m-auto grid h-auto grid-cols-2 sm:w-11/12 lg:grid-cols-3">
            {filteredData
              .slice(firstItem, lastItem)
              .map((courseItem, index) => (
                <CourseCard key={index} courseItem={courseItem} />
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

export { CourseContainer };
