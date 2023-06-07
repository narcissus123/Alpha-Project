import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

import { ErrorMessages } from "../../common/messages/errorMessage/ErrorMessages";
import { Button } from "../../common/button/Button";

import { SendUserComments } from "../../../core/services/api/User-comments.api";
import { getItem } from "../../../core/services/storage/Storage";
import { useAuth } from "../../../context/AuthContext";

// This component renders the form on the target course page for the user to comment on that course.
const CommentForm = ({ param }) => {
  const user = useAuth();

  /* Rendering spinner while we are waiting for backend response. */
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const user = JSON.parse(getItem("user"));

      /* Prevent users from commenting if they are not logged in */
      if (!user.isStudent || !user.isAdmin) {
        toast.error("To post a comment, please log in to your account.");
      } else if (user.isAdmin) {
        toast.error("Only Students can leave a comment.");
      } else if (user.isStudent) {
        const userComment = {
          postId: param.programId,
          email: user.email,
          username: user.fullName,
          comment: data.comment,
        };
        setIsLoading(true);
        const response = await SendUserComments(userComment);
        if (response.status === 200) {
          toast.success("Your post successfully submitted.");
        }
      }
    } catch (error) {
      toast.error("Sorry! Something went wrong.");
    }
    setIsLoading(false);
  };

  return (
    <Fragment>
      <section class="w-screen bg-white py-10 pt-16 ">
        <ToastContainer />
        <div class="lg:ml-15 ml-0 flex max-w-lg flex-col rounded-lg border border-customGreen px-4 drop-shadow-sm sm:ml-6 sm:max-w-xl md:ml-10 md:max-w-2xl lg:max-w-4xl">
          {/* Title */}
          <div class="mb-2 mt-6">
            <h2 class="text-2xl font-bold text-gray-900 lg:text-2xl">
              Comment
            </h2>
          </div>

          {/* Comment form */}
          <form class="my-4 mb-6" onSubmit={handleSubmit(onSubmit)}>
            <input
              class="mb-2 w-1/3 rounded-lg border border-gray-200 bg-white py-1.5 px-2 text-gray-900 focus:outline-none focus:ring-0"
              placeholder="Username"
              {...register("userName", { required: "This is required." })}
            />
            <ErrorMessages name="userName" errors={errors} />

            <div class="mb-4 max-w-lg rounded-lg rounded-t-lg border border-gray-200 bg-white py-2 px-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl ">
              <textarea
                id="comment"
                rows="6"
                class="-mb-2 w-full border-0 bg-white px-0 text-sm text-gray-900 focus:outline-none focus:ring-0"
                placeholder="Write a comment..."
                {...register("comment", {
                  required: "This is required.",
                  max: {
                    value: 200,
                    message: "Comment cannot be more than 200 words long.",
                  },
                })}
              ></textarea>
            </div>
            <ErrorMessages name="comment" errors={errors} />

            {/* Call to action. */}
            <Button
              type="submit"
              isLoading={isLoading}
              text="Post comment"
              Class="mt-4 block items-center rounded-lg border border-customGreen py-2.5 px-4 text-center text-sm font-medium text-customGreen focus:border-customGreen focus:outline-none"
            />
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export { CommentForm };
