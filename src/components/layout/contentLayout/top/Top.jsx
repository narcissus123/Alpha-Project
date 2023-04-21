import React from "react";
import { Sort } from "../../../common/sort/Sort";
import { Search } from "../../../common/search/Search";

const Top = ({
  placeholder,
  handleSearch,
  inputValue,
  title,
  setSortPathName,
  category,
  sort,
  sortPlaceHolder,
}) => {
  return (
    <div class="w- mx-auto h-40 w-4/5 p-0 text-left sm:w-11/12">
      <h2 class="w-auto pt-6 text-2xl font-semibold text-white sm:pt-10 sm:text-3xl">
        {title}
      </h2>
      <hr class="mb-6 mt-2 w-auto border-2 border-customGreen"></hr>
      <div class="flex h-auto w-auto flex-wrap justify-between px-1">
        {sort && (
          <Sort
            setSortPathName={setSortPathName}
            category={category}
            sortPlaceHolder={sortPlaceHolder}
          ></Sort>
        )}
        <Search
          inputValue={inputValue}
          handleSearch={handleSearch}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export { Top };
