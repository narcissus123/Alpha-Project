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

// This component renders users comments about the news in the news page and displays the admin responses to users comments.
const NewsComments = ({ param }) => {
  const admin = useAuth();

  /* Getting  user comments*/
  const { data } = useFetch(getAllComments);

  /* Saving  user comments*/
  const [comments, setComments] = useState([]);

  /* Sending request to get news comments */
  useEffect(() => {
    const filteredComments = admin.isAdmin
      ? FilterUnrelatedComments(data, param.newsId)
      : FilterValidComments(data, param.newsId); //Filtering unverified comments
    setComments(filteredComments);
  }, [data]);

  return (
    <section class="opacity-3 w-screen bg-white py-8 lg:py-16">
      <ToastContainer />
      {comments != [] ? (
        <div class="ml-8 flex max-w-6xl flex-col border-t border-customGreen2 px-4 text-slate-800">
          <>
            {/* Title */}
            <div class="mb-6">
              <h2 class="py-4 text-lg font-bold text-customGreen2 dark:text-white lg:text-2xl">
                Discussion ({comments.length})
              </h2>
            </div>
            {/* This section displays verified commnets and admit response to those comments if there is any. */}
            {comments.map((comm, index) => (
              <>
                <CommentCard
                  Class={"w-2/3"}
                  comment={comm}
                  answer={false}
                  key={comm._id}
                  setComments={setComments}
                  allComments={comments}
                />
                {comm.answer && (
                  <CommentCard
                    key={index}
                    Class={"ml-[6.5%] w-3/5 "}
                    comment={comm}
                    answer={true}
                    setComments={setComments}
                    allComments={comments}
                  />
                )}
              </>
            ))}
          </>
        </div>
      ) : (
        // This message is displayed if no one has left a comment or there are no verified comments.
        <AlertMessage
          message="No comments available for this news."
          Class={" text-slate-800 pt-2 pb-2 text-lg border w-screen"}
        />
      )}
    </section>
  );
};

export { NewsComments };
