import React from "react";
import { CrossImage, NotifyImage } from "../../../assets/svg/Svg";

// This component shows the modal.
const Modal = ({
  setOpen,
  buttonText,
  buttonClass,
  title,
  message,
  handleCourseRegistration,
  isSubmitting,
}) => {
  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full flex-col items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/* Header */}
          <div class="relative flex transform justify-start overflow-hidden rounded-t-lg bg-white py-2 pl-4 transition-all sm:w-full sm:max-w-lg">
            <button
              onClick={() => setOpen(false)}
              class="border-none bg-white outline-none hover:border-none hover:outline-none hover:ring-0 focus:ring-0"
            >
              <CrossImage />
            </button>
          </div>
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
                    {title}
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">{message}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Call to action. add and cancel buttons. */}
            <div class="bg-gray-50 px-4 py-2 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                class={`shadow-sm inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold text-white  sm:ml-3 sm:w-auto ${
                  isSubmitting
                    ? "disabled:cursor-not-allowed disabled:bg-slate-500"
                    : `${buttonClass}`
                }`}
                disabled={isSubmitting === true}
                onClick={handleCourseRegistration}
              >
                {buttonText}
              </button>
              <button
                type="button"
                class="shadow-sm mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
