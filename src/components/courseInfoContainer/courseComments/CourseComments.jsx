import { ToastContainer } from "react-toastify";

import { AlertMessage } from "../../common/messages/alertMessage/AlertMessage";
import { CommentCard } from "./commentCard/CommentCard";

import { FilterValidComments } from "../../../core/utils/Filter";
import { getAllComments } from "../../../core/services/api/comments.api";
import { useFetch } from "../../../hooks/useFetch";

// This component renders users comments about the course in the course page and displays the admin responses to users comments.
const CourseComments = ({ param }) => {
  const { data } = useFetch(getAllComments);

  const filteredComments = data; //FilterValidComments(data, param.programId); //Filtering unverified comments

  return (
    <section class="opacity-3 w-screen bg-white py-8 lg:py-16">
      <ToastContainer />
      {filteredComments != [] ? (
        <div class="ml-8 flex max-w-6xl flex-col border-t border-customGreen2 px-4">
          <>
            {/* Title */}
            <div class="mb-6">
              <h2 class="py-4 text-lg font-bold text-customGreen2 dark:text-white lg:text-2xl">
                Discussion ({filteredComments.length})
              </h2>
            </div>
            {/* This section displays verified commnets and admit response to those comments if there is any. */}
            {filteredComments.map((comm, index) => (
              <>
                <CommentCard
                  Class={"w-2/3"}
                  comment={comm}
                  answer={false}
                  key={comm._id}
                />
                {comm.answer ? (
                  <CommentCard
                    key={index}
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
