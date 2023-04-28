import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

import { ErrorMessages } from "../../common/messages/errorMessage/ErrorMessages";
import { Button } from "../../common/button/Button";

import { useAuth } from "../../../context/AuthContext";
import { getUserComment } from "../../../core/services/api/ContactUs.api";
import { getItem } from "../../../core/services/storage/Storage";

// This component renders a form for user to send an email to institute.
const ContactForm = () => {
  const auth = useAuth();

  /* Rendering spinner while we are waiting for backend response. */
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let commentObj = {
      email: JSON.parse(getItem("user")).email,
      name: JSON.parse(getItem("user")).fullName,
      text: data.text,
    };
    try {
      setIsLoading(true);
      const response = await getUserComment(commentObj);
      if (response.success) {
        toast.success("You are successfully signed in!");
      } else {
        toast.error("Something went wrong! Please try again.");
      }
    } catch (error) {
      toast.error(error);
    }
    setIsLoading(false);
  };
  return (
    <Fragment>
      <ToastContainer />
      <div class="h-[24rem] bg-white opacity-70 md:h-[31rem] md:w-1/2">
        <div class="m-auto mt-12  flex max-w-lg flex-col rounded-lg border border-customGreen px-4 md:mt-[2.7rem] md:max-w-sm lg:max-w-xl">
          {/* Contact us form */}
          <form
            class="my-4 mb-6"
            onSubmit={
              auth.isUser
                ? handleSubmit(onSubmit)
                : toast.error("You should sign in to submit form.")
            }
          >
            <label class="my-2 ml-1 block" forhtml="email">
              Email
            </label>
            <input
              id="email"
              class="mb-2 block w-1/2 rounded-lg border border-gray-200 py-1.5 px-2 text-gray-900 focus:outline-none focus:ring-0"
              placeholder="example@domain.com"
              {...register("email", { required: "This is required." })}
            />
            <ErrorMessages name="email" errors={errors} />

            <label class="my-2 mt-4 ml-1 block" forhtml="comment">
              Comment
            </label>
            <div class="mb-4 max-w-lg rounded-lg rounded-t-lg border border-gray-200 bg-white py-2 px-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl ">
              <textarea
                id="text"
                rows="6"
                class="-mb-2 w-full border-0 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0"
                placeholder="Write a comment..."
                {...register("text", {
                  required: "This is required.",
                  max: {
                    value: 200,
                    message: "Comment cannot be more than 200 words long.",
                  },
                })}
              ></textarea>
            </div>
            <ErrorMessages name="text" errors={errors} />

            {/* Submit button. */}
            <Button
              type="submit"
              isLoading={isLoading}
              text="Send"
              Class="mt-4 block items-center rounded-lg border border-customGreen py-2.5 px-4 text-center text-sm font-medium text-customGreen focus:border-customGreen focus:outline-none"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export { ContactForm };
