import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

import { AlertMessage } from "../../common/messages/alertMessage/AlertMessage";
import { CommentCard } from "./commentCard/CommentCard";

import { FilterValidComments } from "../../../core/utils/Filter";
import { getAllComments } from "../../../core/services/api/comments.api";

// This component renders users comments about the course in the course page and displays the admin responses to users comments. 
const CourseComments = ({ param }) => {
  /* Saving  user comments*/
  const [comment, setComments] = useState([]);

  /* Sending request to get course comments */
  const courseComments = async () => {
    try {
      const response = await getAllComments();
      const filteredComments = FilterValidComments(response, param.programId); //Filtering unverified comments

      setComments(filteredComments);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    courseComments();
  }, []);

  return (
    <section class="opacity-3 w-screen bg-white py-8 lg:py-16">
      <ToastContainer />
      {comment != [] ? (
        <div class="ml-8 flex max-w-6xl flex-col border-t border-customGreen2 px-4">
          <>
            {/* Title */}
            <div class="mb-6">
              <h2 class="py-4 text-lg font-bold text-customGreen2 dark:text-white lg:text-2xl">
                Discussion ({comment.length})
              </h2>
            </div>
            {/* This section displays verified commnets and admit response to those comments if there is any. */}
            {comment.map((comm) => (
              <>
                <CommentCard Class={"w-2/3"} comment={comm} answer={false} />
                {comm.answer ? (
                  <CommentCard
                    Class={"ml-[6.5%] w-3/5"}
                    comment={comm}
                    answer={true}
                  />
                ) : (
                  comm.answer === undefined && (
                    <AlertMessage
                      message="No replies."
                      Class={
                        " py-2 text-base border ml-[6.5%] w-3/5 rounded-lg mb-8 text-gray-600 text-left"
                      }
                    />
                  )
                )}
              </>
            ))}
          </>
        </div>
      ) : (
        // This message is displayed if no one has left a comment or there are no verified comments.
        <AlertMessage
          message="No comments available for this course."
          Class={" text-gray-600 pt-2 pb-2 text-lg border w-screen "}
        />
      )}
    </section>
  );
};

export { CourseComments };
