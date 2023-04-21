import { Fragment, useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import { Table } from "../table/Table";
import { Columns } from "./Columns";
import { ColumnFilter } from "./ColumnFilter";

import { getCourses } from "../../../core/services/api/Courses.api";
import { getItem } from "../../../core/services/storage/Storage";

// This component gets all user registered courses from backend and renders it in react table.
const EnrolledCourses = () => {
  /* Saving courses information sent from backend. */
  const [data, setCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //  console.log("getItem:", getItem("user"));
  const getAllCourses = async () => {
    try {
      const data = await getCourses();

      if (data.success) {
        const enrolledCourses = data.result.filter((item) =>
          item.students.find(
            (student) => student._id === JSON.parse(getItem("user"))._id
          )
        );

        if (enrolledCourses == []) {
          setCourseData([]);
          setIsLoading(false);
        } else {
          setCourseData(enrolledCourses);
          setIsLoading(false);
        }
      }
    } catch (error) {
      toast.error("Sorry! There is a problem loading courses.");
      setIsLoading(true);
    }
  };

  /* Call API to get all courses. */
  useEffect(() => {
    getAllCourses();
  }, []);
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

export { EnrolledCourses };
