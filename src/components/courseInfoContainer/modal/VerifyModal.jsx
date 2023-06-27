import React, { Fragment, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { Modal } from "../../common/modal/Modal";

import { sendCommentVerification } from "../../../core/services/api/User-comments.api";

import { NotifyImage } from "../../../assets/svg/Svg";

const VerifyModal = ({ commentId, setOpenVerifyModal, setIsverified }) => {
  const [isSubmitting, seIsSubmitting] = useState(false);

  const handleCommentVerification = async () => {
    try {
      seIsSubmitting(true);
      const response = await sendCommentVerification(commentId);

      if (response.status === 200) {
        toast.success("Comment successfully verified.");
        setIsverified(true);
      } else {
        toast.error("Sorry, something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
    }
    seIsSubmitting(false);
  };
  return (
    <Fragment>
      <ToastContainer />
      <Modal
        setOpen={setOpenVerifyModal}
        buttonText="Verify"
        buttonClass="bg-green-600 hover:bg-green-500"
        handleCourseRegistration={handleCommentVerification}
        isSubmitting={isSubmitting}
      >
        {/* Content */}
        <div class="shadow-xl relative transform  overflow-hidden border bg-white text-left transition-all sm:w-full sm:max-w-lg">
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
                  "Verify Comment"
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    "Are you sure that you want to verify this comment?"
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

export { VerifyModal };
