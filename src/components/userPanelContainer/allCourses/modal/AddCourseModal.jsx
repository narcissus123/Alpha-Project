import React, { Fragment, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { Modal } from "../../../common/modal/Modal";

import { addCourse } from "../../../../core/services/api/Courses.api";
import { getItem } from "../../../../core/services/storage/Storage";

import { NotifyImage } from "../../../../assets/svg/Svg";

// This component shows the modal. Users should verify that they want to enroll into the course they selected.
const AddCourseModal = ({ setOpen, selectedCourse }) => {
  const [isSubmitting, seIsSubmitting] = useState(false);

  const handleCourseRegistration = async () => {
    try {
      const userInfo = JSON.parse(getItem("user"));

      seIsSubmitting(true);
      const response = await addCourse(selectedCourse._id, userInfo._id);
      if (response.status === 200) {
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
        handleCourseRegistration={handleCourseRegistration}
        isSubmitting={isSubmitting}
      >
        {/* Content */}
        <div class="shadow-xl relative transform  overflow-hidden rounded-b-lg border bg-white text-left transition-all sm:w-full sm:max-w-lg">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="bg-white-100 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-yellow-600 sm:mx-0 sm:h-10 sm:w-10">
                <NotifyImage />
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-base font-semibold leading-6 text-gray-900"
                  id="modal-title"
                >
                  "Add Course"
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    "Are you sure you want to register into this course?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export { AddCourseModal };
