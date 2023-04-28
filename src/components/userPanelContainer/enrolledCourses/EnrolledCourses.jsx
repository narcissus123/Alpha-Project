import { Fragment } from "react";
import { ToastContainer } from "react-toastify";

import { Table } from "../table/Table";
import { Columns } from "./Columns";
import { ColumnFilter } from "./ColumnFilter";

import { getCourses } from "../../../core/services/api/Courses.api";
import { getItem } from "../../../core/services/storage/Storage";
import { useFetch } from "../../../hooks/useFetch";

// This component gets all user registered courses from backend and renders it in react table.
const EnrolledCourses = () => {
  /* Call API to get courses.*/
  const { isLoading, data } = useFetch(getCourses);

  // Filter courses that user is not enrolled.
  const enrolledCourses = data.filter((item) =>
    item.students.find(
      (student) => student._id === JSON.parse(getItem("user"))._id
    )
  );

  return (
    <Fragment>
      <ToastContainer />
      <Table
        Columns={Columns}
        isLoading={isLoading}
        data={enrolledCourses}
        ColumnFilter={ColumnFilter}
      />
    </Fragment>
  );
};

export { EnrolledCourses };
