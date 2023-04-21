import { AddCourse } from "./tableCells/AddCourse";
import { CourseImage } from "./tableCells/CourseImage";
import dateFormat from "dateformat";
import { ColumnFilter } from "./ColumnFilter";

// This file includes the columns of table that shows all institute courses.
const Columns = [
  {
    Header: "Image",
    Footer: "Image",
    accessor: "lesson.image",
    Cell: (tableProps) => (
      <CourseImage imageLink={tableProps.row.original.lesson.image} />
    ),
    Filter: false,
  },
  {
    Header: "Course",
    Footer: "Course",
    accessor: "title",
    Filter: ColumnFilter,
  },
  {
    Header: "Instructor",
    Footer: "Instructor",
    accessor: "teacher.fullName",
    Filter: ColumnFilter,
  },
  {
    Header: "Start Date",
    Footer: "Start Date",
    accessor: "startDate",
    Cell: (props) => {
      return <span>{dateFormat(props.value.startDate, "mm/dd/yyyy")}</span>;
    },
    Filter: ColumnFilter,
  },
  {
    Header: "End Date",
    Footer: "End Date",
    accessor: "endDate",
    Cell: (props) => {
      return <span>{dateFormat(props.value.endDate, "mm/dd/yyyy")}</span>;
    },
    Filter: ColumnFilter,
  },
  {
    Header: "Capacity",
    Footer: "Capacity",
    accessor: "capacity",
    Cell: (props) => {
      return <span>{props.value - props.row.original.students.length}</span>;
    },
    Filter: false,
  },
  {
    Header: "Tuition",
    Footer: "Tuition",
    accessor: "cost",
    Cell: (props) => {
      return <span>{`${props.value} $`}</span>;
    },
    Filter: false,
  },
  {
    Header: "Courses",
    Footer: "Courses",
    accessor: "",
    Cell: (tableProps) => (
      <AddCourse selectedCourse={tableProps.row.original} />
    ),
    Filter: false,
  },
];

export { Columns };
