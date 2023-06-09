import React, { Fragment, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { Modal } from "../../../common/modal/Modal";

import { deleteCourse } from "../../../../core/services/api/Courses.api";
import { getItem } from "../../../../core/services/storage/Storage";

import { NotifyImage } from "../../../../assets/svg/Svg";

// This component shows the modal. Users should verify that they want to drop the course they selected.
const DeleteCourseModal = ({ setOpen, selectedCourse, setRows, rows }) => {
  const [isSubmitting, seIsSubmitting] = useState(false);

  const handleCourseRegistration = async () => {
    try {
      const userInfo = JSON.parse(getItem("user"));

      seIsSubmitting(true);
      const response = await deleteCourse(selectedCourse._id, userInfo._id);

      if (response.status === 200) {
        const removeDeletedCourse = rows.filter((course) => {
          return response.data.result.course._id !== course.original._id;
        });

        const updatedCourseList = removeDeletedCourse.map((course) => {
          return course.original;
        });
        setRows(updatedCourseList);
        toast.success("Course deleted successfully.");
      }

      if (response.status === 401) {
        toast.error("you are logged out of your account. Please log in again.");
      }
    } catch (error) {}
    seIsSubmitting(false);
  };

  return (
    <Fragment>
      <ToastContainer />
      <Modal
        setOpen={setOpen}
        buttonText="Delete"
        buttonClass="hover:bg-red-500 bg-red-600"
        handleCourseRegistration={handleCourseRegistration}
        isSubmitting={isSubmitting}
      >
        {/* Content */}
        <div class="shadow-xl relative transform  overflow-hidden  border bg-white text-left transition-all sm:w-full sm:max-w-lg">
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
                  "Delete Course"
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    "Are you sure you want to delete this course?"
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

export { DeleteCourseModal };
