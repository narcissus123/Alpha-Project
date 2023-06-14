import { Fragment, useState, useEffect } from "react";
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
  const [rows, setRows] = useState([]);
  const { isLoading, data } = useFetch(getCourses);

  useEffect(() => {
    setRows(data);
    // Filter courses that user is not enrolled.
    const enrolledCourses = data.filter((item) =>
      item.students.find(
        (student) => student._id === JSON.parse(getItem("user"))._id
      )
    );
    setRows(enrolledCourses);
  }, [data]);

  return (
    <Fragment>
      <ToastContainer />
      <Table
        Columns={Columns(setRows)}
        isLoading={isLoading}
        data={rows}
        ColumnFilter={ColumnFilter}
      />
    </Fragment>
  );
};

export { EnrolledCourses };
