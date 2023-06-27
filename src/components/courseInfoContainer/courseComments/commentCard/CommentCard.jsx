import { useState } from "react";
import dateFormat from "dateformat";

import { ReplyForm } from "../../replyForm/ReplyForm";
import { VerifyModal } from "../../modal/VerifyModal";

import { useAuth } from "../../../../context/AuthContext";

import {
  UserImage,
  AdminImage,
  CommentReplyImage,
  ThreeDotMenuImage,
} from "../../../../assets/svg/Svg";

// This component renders user comment and admin response/answer to user comment.
const CommentCard = ({ Class, comment, answer, setComments, allComments }) => {
  const [openAnswerForm, setOpenAnswerForm] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openVerifyModal, setOpenVerifyModal] = useState(false);
  const [isVerified, setIsverified] = useState(comment.verified);

  const user = useAuth();

  return (
    <>
      <article
        class={`mb-6 h-auto rounded-lg border bg-white p-6 text-base ${Class} drop-shadow-md`}
      >
        {/* Post header. It includes student name, the date that comment posted and the option for admin to verify comment.  */}
        <div class="relative mb-6 flex flex-wrap items-center justify-between">
          <div class="flex flex-wrap items-center justify-start">
            <div class="mr-3 inline-flex items-center text-sm text-gray-900 ">
              {answer ? <AdminImage /> : <UserImage />}

              {answer ? "Admin" : comment.username}
            </div>
            <p class="text-sm text-gray-600">
              <time>{dateFormat(comment.createDate, "mm/dd/yyyy")}</time>
            </p>
          </div>

          {/* Menu. Validation option and its modal. */}
          {!answer && user.isAdmin && (
            <>
              <button
                id="dropdownComment1Button"
                data-dropdown-toggle="dropdownComment1"
                class="inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 "
                type="button"
                onClick={() => setOpenMenu((prev) => !prev)}
              >
                <ThreeDotMenuImage />
                <span class="sr-only">Comment settings</span>
              </button>
              <div
                id="dropdownComment1"
                class={`shadow z-10 w-36 divide-y divide-gray-100 rounded border bg-white ${
                  openMenu
                    ? "absolute right-0 top-11 overflow-hidden transition-transform duration-200"
                    : "hidden"
                }`}
              >
                <ul
                  class="py-1 text-sm text-gray-700"
                  aria-labelledby="dropdownMenuIconHorizontalButton"
                >
                  <li>
                    <button
                      class={`block w-full py-2 px-4 hover:bg-gray-100 hover:text-[#747bff] ${
                        isVerified && "cursor-not-allowed"
                      }`}
                      onClick={() => setOpenVerifyModal(true)}
                      disabled={isVerified}
                    >
                      Verify
                    </button>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
        {/* Reply option for admin */}
        <p class="whitespace-wrap h-auto overflow-y-auto text-gray-500">
          {answer ? `Reply: ${comment.answer}` : comment.comment}
        </p>
        {!answer && user.isAdmin && (
          <div class="mt-4 flex items-center space-x-4">
            {openAnswerForm ? (
              <ReplyForm
                allComments={allComments}
                setComments={setComments}
                studentComment={comment}
              />
            ) : (
              <button
                type="button"
                class={`flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 ${
                  !isVerified && "cursor-not-allowed"
                }`}
                onClick={() => setOpenAnswerForm(true)}
                disabled={!isVerified}
              >
                <CommentReplyImage />
                Reply
              </button>
            )}
          </div>
        )}
      </article>
      {openVerifyModal && (
        <VerifyModal
          setOpenVerifyModal={setOpenVerifyModal}
          commentId={comment._id}
          setIsverified={setIsverified}
        />
      )}{" "}
    </>
  );
};

export { CommentCard };
