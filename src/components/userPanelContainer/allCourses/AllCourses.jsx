import { Fragment, useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import { Table } from "../table/Table";
import { Columns } from "./Columns";
import { ColumnFilter } from "./ColumnFilter";

import { getItem } from "../../../core/services/storage/Storage";
import { getStudentById } from "../../../core/services/api/ManageStudent.api";
import { getCourses } from "../../../core/services/api/Courses.api";
import { useFetch } from "../../../hooks/useFetch";

// This component gets all institute courses from backend and renders it in react table.
const AllCourses = (props) => {
  /* Call API to get courses.*/
  const [rows, setRows] = useState([]);
  const { isLoading, data } = useFetch(getCourses);

  const filterData = async () => {
    try {
      const userInfo = JSON.parse(getItem("user"));

      const student = await getStudentById(userInfo._id);
      if (student.success) {
        const studentCourses = student.result.courses.map((course) => {
          return course._id;
        });

        const newRows = data.filter((course) => {
          return !studentCourses.includes(course._id);
        });

        setRows(newRows);
      }
    } catch (error) {
      toast.error("Sorry. Something went wrong.");
      console.error(error);
    }
  };
  useEffect(() => {
    filterData();
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

export { AllCourses };
