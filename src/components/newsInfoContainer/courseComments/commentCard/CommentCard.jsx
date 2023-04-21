import dateFormat from "dateformat";

import { UserImage } from "../../../../assets/svg/Svg";

// This component renders user comment and admin response/answer to user comment.
const CommentCard = ({ Class, comment, answer }) => {
  return (
    <article
      class={`mb-6 h-auto rounded-lg border bg-white p-6 text-base ${Class}`}
    >
      {/* Post header */}

      <div class="mb-6 flex flex-wrap items-center justify-start ">
        <div class="mr-3 inline-flex items-center text-sm text-gray-900 ">
          {answer ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="3rem"
              width="3rem"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-4 rounded-full border border-slate-800 p-1"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM12 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-4.473 5h8.946a4.5 4.5 0 0 0-8.946 0z"></path>
              </g>
            </svg>
          ) : (
            <UserImage />
          )}

          {answer ? "Admin" : comment.username}
        </div>
        <p class="text-sm text-gray-600">
          <time>{dateFormat(comment.createDate, "mm/dd/yyyy")}</time>
        </p>
      </div>
      {/* Post content */}
      <p class="whitespace-wrap h-auto overflow-y-auto text-gray-500">
        {answer ? `Reply: ${comment.answer}` : comment.comment}
      </p>
    </article>
  );
};

export { CommentCard };
