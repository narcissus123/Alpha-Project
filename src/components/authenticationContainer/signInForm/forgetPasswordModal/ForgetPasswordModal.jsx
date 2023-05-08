import React from "react";
import { useForm } from "react-hook-form";

import { Input } from "../../../common/inputs/profileInput/ProfileInput";

import { CrossImage } from "../../../../assets/svg/Svg";

const ForgetPasswordModal = ({
  setPasswordModalOpen,
  buttonText = "reset password",
  buttonClass,
  isSubmitting = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {};

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
              onClick={() => setPasswordModalOpen(false)}
              class="border-none bg-white outline-none hover:border-none hover:outline-none hover:ring-0 focus:ring-0"
            >
              <CrossImage />
            </button>
          </div>
          {/* Content */}
          <div class="shadow-xl relative transform  overflow-hidden rounded-b-lg border bg-white text-left transition-all sm:w-full sm:max-w-lg">
            <form
              class="mx-auto mt-16 w-9/12 md:w-8/12 lg:w-7/12"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                frameClass="mb-6 w-full"
                inputClass="linear-tight focus:shadow-outline w-full appearance-none rounded border border-customGreen py-1 px-1 text-gray-700 focus:outline-none"
                labelClass="mb-2 text-xs font-bold uppercase tracking-wide text-gray-700"
                index="1"
                children="Email"
                placeholder="Email"
                type="email"
                errors={errors}
                name="email"
                {...(register &&
                  register("email", {
                    required: "This is required.",
                  }))}
              />
            </form>
          </div>
          {/* Call to action. add and cancel buttons. */}
          <div class="bg-gray-50 px-4 py-2 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="submit"
              class={`shadow-sm inline-flex w-full justify-center rounded-md bg-green-400  px-3 py-2 text-sm font-semibold text-white  sm:ml-3 sm:w-auto ${
                isSubmitting
                  ? "disabled:cursor-not-allowed disabled:bg-slate-500"
                  : `${buttonClass}`
              }`}
              disabled={isSubmitting === true}
            >
              {buttonText}
            </button>
            <button
              type="button"
              class="shadow-sm mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              onClick={() => setPasswordModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ForgetPasswordModal };
//<div class="relative m-auto mt-16 h-3/4 max-w-md overflow-hidden rounded-md border bg-white sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
