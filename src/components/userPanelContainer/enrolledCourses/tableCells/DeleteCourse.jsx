import { Fragment, useState } from "react";

import { DeleteCourseModal } from "../modal/DeleteCourseModal";

// This component renders delete button in the table. This button opens the delete course modal.
const DeleteCourse = ({ selectedCourse }) => {
  const [open, setOpen] = useState(false);

  //modal
  return (
    <Fragment>
      <button
        onClick={() => setOpen(true)}
        class="h-8 w-16 rounded-lg border border-yellow-600 bg-white py-1 text-sm text-customGreen hover:border-customGreen hover:bg-customGreen hover:text-white"
      >
        Delete
      </button>
      {open && (
        <DeleteCourseModal setOpen={setOpen} selectedCourse={selectedCourse} />
      )}
    </Fragment>
  );
};
export { DeleteCourse };
