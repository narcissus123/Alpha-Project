import { useMemo, Fragment } from "react";

import { usePagination, useTable, useSortBy, useFilters } from "react-table";

import {
  RightArrowImage,
  LeftArrowImage,
  SortingDownArrowImage,
  SortingUpArrowImage,
} from "../../../assets/svg/Svg";

// This component renders table. It includes pagination, sort and filter options.
const Table = ({ Columns, isLoading, data, ColumnFilter }) => {
  const columns = useMemo(() => Columns, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    prepareRow,
  } = useTable({ columns, data }, useFilters, useSortBy, usePagination);

  const { pageIndex } = state;

  return (
    <Fragment>
      <div class="mx-auto mt-24 w-[97%] overflow-hidden rounded-lg border-2 border-customGreen2 text-neutral-500">
        <table
          {...getTableProps()}
          class="text-screen relative h-2 w-full table-auto rounded-lg"
        >
          <thead class="table-auto border-b-2 border-customGreen2 bg-neutral-300 text-left text-xs sm:text-sm md:text-base">
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                class=" h-14 table-auto text-left text-neutral-600"
              >
                {headerGroup.headers.map((column) => (
                  // Table header.
                  <th>
                    <tr
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <div class="flex flex-row items-start text-left">
                        {/* Table column title. */}
                        {column.render("Header")}

                        {/* Column sort. */}

                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <SortingDownArrowImage Class="ml-2 inline self-center" />
                          ) : (
                            <SortingUpArrowImage Class="ml-2 inline self-center" />
                          )
                        ) : (
                          ""
                        )}
                      </div>
                    </tr>

                    {/* Column filter. */}
                    <tr>{column.canFilter ? column.render("Filter") : null}</tr>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {/* Displaying table body when the data loads. Course not found will be displayed in a case that empty list of courses received. */}
          {isLoading ? (
            <div class="mt-20 h-32 text-right text-xl font-bold">
              Loading...
            </div>
          ) : data.length === 0 ? (
            <div class="mt-20 h-32 text-right text-xl font-bold">
              No Course Found!
            </div>
          ) : (
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    class="border-b border-customGreen2 px-4 text-xs last:border-b-0 sm:text-sm md:text-base"
                  >
                    {row.cells.map((cell, index) => {
                      return (
                        <td {...cell.getCellProps()} class="pl-2 first:pl-4">
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
        {/* Table footer */}
        <div class="flex h-10 justify-between border-t border-customGreen2  bg-neutral-300 px-6 text-neutral-500 ">
          
          {/* Displaying current page number */}
          <p class="mt-2 flex justify-center -space-x-px text-sm ">
            Page{"   "}
            <strong>
              {" "}
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </p>

          {/* Pagination section. */}
          <div class="flex justify-center">
            <button
              class={`shadow-sm leading-tigh bg-transparent px-3 py-2 hover:text-gray-700
              ${!canNextPage ? "pointer-events-none" : "cursor-pointer"}`}
              onClick={() => previousPage()}
            >
              <LeftArrowImage
                Class={`w-4 ${
                  !canPreviousPage ? " text-gray-500" : " text-customGreen"
                }`}
              />
            </button>
            <button
              class={`shadow-sm bg-transparent px-3 leading-tight  hover:text-gray-700 ${
                !canNextPage ? "pointer-events-none " : "cursor-pointer "
              }`}
              onClick={() => nextPage()}
            >
              <RightArrowImage
                Class={`w-4 ${
                  !canNextPage ? " text-gray-500" : " text-customGreen"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { Table };
