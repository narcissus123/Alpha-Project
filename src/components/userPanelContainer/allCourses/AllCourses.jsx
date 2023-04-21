import { Fragment, useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import { Table } from "../table/Table";
import { Columns } from "./Columns";
import { ColumnFilter } from "./ColumnFilter";

import { getCourses } from "../../../core/services/api/Courses.api";

// This component gets all institute courses from backend and renders it in react table.
const AllCourses = (props) => {

  /* Saving courses information sent from backend. */
  const [data, setCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllCourses = async () => {
    try {
      const data = await getCourses();
      if (data.success) {
        if (data.result == []) {
          setCourseData([]);
          setIsLoading(false);
        } else {
          setCourseData(data.result);
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

export { AllCourses };
