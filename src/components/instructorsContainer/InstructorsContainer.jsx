import { useEffect, useState, Fragment } from "react";
import { ToastContainer } from "react-toastify";

import { Spinner } from "../common/spinner/Spinner";
import { Top } from "../layout/contentLayout/top/Top";
import { InstructorCard } from "./instructorCard/InstructorCard";

import { getInstructors } from "../../core/services/api/Employee.api";
import { filter, InstructorSearchBasedFilter } from "../../core/utils/Filter";
import { useFetch } from "../../hooks/useFetch";

// This component renders information about instructors.
const InstructorsContainer = () => {
  /* Call API to get instructors info.*/
  const { isLoading, data } = useFetch(getInstructors);

  /* Filter courses based on search input */
  const [searchedInstructor, setSearchedInstructor] = useState("");
  let filteredData = filter(
    data,
    searchedInstructor,
    InstructorSearchBasedFilter
  );

  return (
    <div class="w-screen">
      <Top
        title="Instructors"
        inputValue={searchedInstructor}
        handleSearch={(e) => {
          setSearchedInstructor(e.target.value);
        }}
        sort={false}
        placeholder="Search by teacher name"
      />

      {isLoading ? (
        <Spinner Class="h-[43rem]" />
      ) : (
        <div class="h-auto overflow-hidden">
          <ToastContainer />

          <div class="relative mt-12 h-auto">
            {filteredData.map((instructor, index) => (
              <InstructorCard instructor={instructor} key={index} id={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { InstructorsContainer };
