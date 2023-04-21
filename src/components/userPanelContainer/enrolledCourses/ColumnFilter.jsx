import React from "react";

// This file includes search input for user to filter courses in table columns.
export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <input
      class="mt-1 w-20 rounded-md border  py-1  pl-1  text-sm md:w-28 lg:w-36"
      value={filterValue || ""}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search here"
    />
  );
};
