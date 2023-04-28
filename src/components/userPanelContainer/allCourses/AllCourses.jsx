import { Fragment } from "react";
import { ToastContainer } from "react-toastify";

import { Table } from "../table/Table";
import { Columns } from "./Columns";
import { ColumnFilter } from "./ColumnFilter";

import { getCourses } from "../../../core/services/api/Courses.api";
import { useFetch } from "../../../hooks/useFetch";

// This component gets all institute courses from backend and renders it in react table.
const AllCourses = (props) => {
  /* Call API to get courses.*/
  const { isLoading, data } = useFetch(getCourses);

  return (
    <Fragment>
      <ToastContainer />
      <Table
        Columns={Columns}
        isLoading={isLoading}
        data={data}
        ColumnFilter={ColumnFilter}
      />
    </Fragment>
  );
};

export { AllCourses };
