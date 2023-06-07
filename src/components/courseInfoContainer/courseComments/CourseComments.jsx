import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import { AlertMessage } from "../../common/messages/alertMessage/AlertMessage";
import { CommentCard } from "./commentCard/CommentCard";

import {
  FilterValidComments,
  FilterUnrelatedComments,
} from "../../../core/utils/Filter";
import { getAllComments } from "../../../core/services/api/comments.api";
import { useFetch } from "../../../hooks/useFetch";
import { useAuth } from "../../../context/AuthContext";

// This component renders users comments about the course in the course page and displays the admin responses to users comments.
const CourseComments = ({ param }) => {
  const admin = useAuth();
  console.log(admin.isAdmin);
  const { data } = useFetch(getAllComments);

  const [comments, setComments] = useState([]);
  useEffect(() => {
    const filteredComments = admin.isAdmin
      ? FilterUnrelatedComments(data, param.programId)
      : FilterValidComments(data, param.programId); //Filtering unverified comments
    setComments(filteredComments);
  }, [data]);

  return (
    <section class="opacity-3 flex w-screen justify-center bg-white py-8 lg:py-8">
      <ToastContainer />
      {comments != [] ? (
        <div class="flex max-w-4xl flex-col justify-center px-4">
          <>
            {/* Title */}
            <div class="mb-6">
              <h2 class="border-b border-customGreen2 py-4 text-lg font-bold text-customGreen2 dark:text-white lg:text-2xl">
                Discussion ({comments.length})
              </h2>
            </div>
            {/* This section displays verified commnets and admit response to those comments if there is any. */}
            {comments.map((comm, index) => (
              <>
                <CommentCard
                  comment={comm}
                  answer={false}
                  key={comm._id}
                  setComments={setComments}
                />
                {comm.answer && (
                  <CommentCard
                    key={index}
                    Class={"ml-[6.5%] "}
                    comment={comm}
                    answer={true}
                  />
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
