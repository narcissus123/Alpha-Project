import { DeleteCourse } from "./tableCells/DeleteCourse";
import { CourseImage } from "./tableCells/CourseImage";
import dateFormat from "dateformat";
import { ColumnFilter } from "./ColumnFilter";

// This file includes the columns of table that shows user registered courses.
const Columns = [
  {
    Header: "Image",
    accessor: "lesson.image",
    Cell: (tableProps) => (
      <CourseImage imageLink={tableProps.row.original.lesson.image} />
    ),
    Filter: false,
  },
  {
    Header: "Course",
    accessor: "title",
    Filter: ColumnFilter,
  },
  {
    Header: "Instructor",
    accessor: "teacher.fullName",
    Filter: ColumnFilter,
  },
  {
    Header: "Start Date",
    accessor: "startDate",
    Cell: (props) => {
      return <span>{dateFormat(props.value.startDate, "mm/dd/yyyy")}</span>;
    },
    Filter: ColumnFilter,
  },
  {
    Header: "End Date",
    accessor: "endDate",
    Cell: (props) => {
      return <span>{dateFormat(props.value.endDate, "mm/dd/yyyy")}</span>;
    },
    Filter: ColumnFilter,
  },
  {
    Header: "Capacity",
    accessor: "capacity",
    Cell: (props) => {
      return <span>{props.value - props.row.original.students.length}</span>;
    },
    Filter: false,
  },
  {
    Header: "Tuition",
    accessor: "cost",
    Cell: (props) => {
      return <span>{`${props.value} $`}</span>;
    },
    Filter: false,
  },
  {
    Header: "Courses",
    accessor: "",
    Cell: (tableProps) => (
      <DeleteCourse selectedCourse={tableProps.row.original} />
    ),
    Filter: false,
  },
];

export { Columns };
