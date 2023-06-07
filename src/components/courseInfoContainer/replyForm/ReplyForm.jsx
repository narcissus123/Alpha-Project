import { SendImage, AdminImage } from "../../../assets/svg/Svg";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

import { ErrorMessages } from "../../common/messages/errorMessage/ErrorMessages";
import { FilterUnrelatedComments } from "../../../core/utils/Filter";

import { sendCommentAnswer } from "../../../core/services/api/User-comments.api";
import { getAllComments } from "../../../core/services/api/comments.api";
import { useFetch } from "../../../hooks/useFetch";
import { useAuth } from "../../../context/AuthContext";

// This component renders the form on the target course page for the user to comment on that course.
const ReplyForm = ({ commentId, setComments }) => {
  const auth = useAuth();

  /* Rendering spinner while we are waiting for backend response. */
  const [isLoading, setIsLoading] = useState(false);

  const commentsData = useFetch(getAllComments);
  console.log("commentsData", commentsData);
  const param = useParams();
  console.log("param", param);
  console.log("commentId", commentId);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      /* Prevent users from commenting if they are not admin. */
      if (!auth.isAdmin) {
        toast.error("Only admins can post a comment.");
      } else {
        setIsLoading(true);
        const response = await sendCommentAnswer(commentId, data.answer);
        console.log("response", response);
        if (response.status === 200) {
          toast.success("Your reply successfully submitted.");

          console.log("data", commentsData.data);
          const filteredComments = FilterUnrelatedComments(
            commentsData.data,
            param.programId
          );
          console.log("filteredComments", filteredComments);
          setComments(filteredComments);

          console.log("response", response);
        }
      }
    } catch (error) {
      toast.error("Sorry! Something went wrong.");
    }
    setIsLoading(false);
  };

  return (
    <Fragment>
      <section class="w-screen bg-white ">
        <ToastContainer />

        {/* Comment form */}
        <form class="my-4 mb-6" onSubmit={handleSubmit(onSubmit)}>
          <div class="flex">
            <AdminImage />
            <div class="mb-4 w-full max-w-lg rounded-lg rounded-t-lg border border-gray-200 bg-white sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
              <textarea
                id="answer"
                rows="6"
                class="-mb-2 w-full rounded-md border-t bg-white py-2 px-4 text-sm text-gray-900 focus:outline-none focus:ring-0"
                placeholder="Reply to the comment..."
                {...register("answer", {
                  required: "This is required.",
                  max: {
                    value: 200,
                    message: "Your reply cannot be more than 200 words long.",
                  },
                })}
              />
              <ErrorMessages name="answer" errors={errors} />

              {/* Call to action. */}
              <div class="flex h-12 justify-end rounded-md border-b bg-slate-100">
                <button
                  class="my-1 mx-2 inline-flex items-center rounded-full border border-customGreen px-[0.45rem] text-center text-sm font-medium text-customGreen hover:bg-customGreen hover:text-white focus:outline-none focus:ring-4 focus:ring-customGreen"
                  type="submit"
                >
                  <SendImage />
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export { ReplyForm };
