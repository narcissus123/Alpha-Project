import { useState } from "react";

import _ from "lodash";

// This component allows users to navigate between different pages.
const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  /* Calculating total number of pages */
  const numberOfPages = Math.ceil(props.info.length / props.pageSize);

  if (numberOfPages === 1) return null;
  const numberOfPagesArr = _.range(1, numberOfPages + 1);

  /* Sending back the target page number */
  props.setPage(currentPage);

  return (
    <nav aria-label="Pagination" class="mx-auto h-20 pt-20 pb-16">
      <ul class="inline-flex justify-between -space-x-px border">
        {/* Previous button */}
        <li>
          <a
            class={`shadow-sm ml-0 rounded-l-md border border-gray-300 bg-white px-3 py-2 leading-tight hover:bg-gray-100 hover:text-gray-700 ${
              currentPage == 1
                ? "pointer-events-none text-gray-400"
                : "cursor-pointer text-gray-600"
            } cursor-pointer`}
            onClick={() => {
              currentPage > 1 && setCurrentPage(parseInt(currentPage) - 1);
            }}
          >
            Previous
          </a>
        </li>

        {/* Middle buttons */}
        {numberOfPagesArr.map((number, index) => (
          <li key={index}>
            <a
              class="shadow-sm cursor-pointer border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              onClick={(input) => {
                setCurrentPage(input.target.innerText);
              }}
            >
              {number}
            </a>
          </li>
        ))}

        {/* Next button */}
        <li>
          <a
            class={`shadow-sm rounded-r-md border border-gray-300 bg-white px-3 py-2 leading-tight hover:bg-gray-100 hover:text-gray-700 ${
              currentPage == numberOfPages
                ? "pointer-events-none text-gray-400"
                : "cursor-pointer text-gray-600"
            }`}
            onClick={() => {
              currentPage < numberOfPages &&
                setCurrentPage(parseInt(currentPage) + 1);
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { Pagination };
