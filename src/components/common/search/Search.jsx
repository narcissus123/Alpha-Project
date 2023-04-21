import React from "react";

import { SearchIcon } from "../../../assets/svg/Svg";

// This component allows users to search for target item (news, courses).
const Search = ({ placeholder, inputValue, handleSearch }) => {
  return (
    <div class="flex w-auto flex-row items-center rounded-lg border bg-white py-2">
      <SearchIcon />
      <input
        class="border-l-2 px-1 text-gray-600 focus:outline-none"
        placeholder={placeholder}
        type="text"
        value={inputValue}
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

export { Search };
