import { Fragment, useState } from "react";

import { AddCourseModal } from "../modal/AddCourseModal";

// This component renders add button in the table. This button opens the add course modal. shows the modal. Users should verify that they want to enroll into the course they selected.
const AddCourse = ({ selectedCourse, setRows, rows }) => {
  const [open, setOpen] = useState(false);

  //modal
  return (
    <Fragment>
      <button
        onClick={() => setOpen(true)}
        class="h-8 w-16 rounded-lg border border-yellow-600 bg-white py-1 text-sm text-customGreen hover:border-customGreen hover:bg-customGreen hover:text-white"
      >
        Add
      </button>
      {open && (
        <AddCourseModal
          setOpen={setOpen}
          selectedCourse={selectedCourse}
          setRows={setRows}
          rows={rows}
        />
      )}
    </Fragment>
  );
};
export { AddCourse };
