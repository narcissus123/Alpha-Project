import React, { Fragment, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { Modal } from "../../../common/modal/Modal";

import { deleteCourse } from "../../../../core/services/api/Courses.api";
import { getItem } from "../../../../core/services/storage/Storage";

// This component shows the modal. Users should verify that they want to drop the course they selected.
const DeleteCourseModal = ({ setOpen, selectedCourse }) => {
  const [isSubmitting, seIsSubmitting] = useState(false);

  const handleCourseRegistration = async () => {
    try {
      const userInfo = JSON.parse(getItem("user"));

      seIsSubmitting(true);
      const response = await deleteCourse(selectedCourse._id, userInfo._id);
      if (response.success) {
        toast.success("Course successfully has been deleted.");
        seIsSubmitting(false);
      }

      if (response.status === 401) {
        toast.error("you are logged out of your account. Please log in again.");
        seIsSubmitting(false);
      }
    } catch (error) {}
  };

  return (
    <Fragment>
      <ToastContainer />
      <Modal
        setOpen={setOpen}
        buttonText="Delete"
        buttonClass="hover:bg-red-500 bg-red-600"
        title="Delete Course"
        message="Are you sure you want to delete this course?"
        handleCourseRegistration={handleCourseRegistration}
        isSubmitting={isSubmitting}
      />
    </Fragment>
  );
};

export { DeleteCourseModal };
