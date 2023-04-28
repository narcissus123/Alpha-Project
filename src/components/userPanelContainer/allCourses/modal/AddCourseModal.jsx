import React, { Fragment, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { Modal } from "../../../common/modal/Modal";

import { addCourse } from "../../../../core/services/api/Courses.api";
import { getItem } from "../../../../core/services/storage/Storage";

// This component shows the modal. Users should verify that they want to enroll into the course they selected.
const AddCourseModal = ({ setOpen, selectedCourse }) => {
  const [isSubmitting, seIsSubmitting] = useState(false);

  const handleCourseRegistration = async () => {
    try {
      const userInfo = JSON.parse(getItem("user"));

      seIsSubmitting(true);
      const response = await addCourse(selectedCourse._id, userInfo._id);
      if (response.success) {
        toast.success("Course successfully has been added.");
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
        buttonText="Add"
        buttonClass="bg-green-600 hover:bg-green-500"
        title="Add Course"
        message="Are you sure you want to register into this course?"
        handleCourseRegistration={handleCourseRegistration}
        isSubmitting={isSubmitting}
      />
    </Fragment>
  );
};

export { AddCourseModal };
