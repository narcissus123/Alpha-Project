import React, { useState, useEffect } from "react";
import ReactTimeAgo from "react-time-ago";
import en from "javascript-time-ago/locale/en.json";
import TimeAgo from "javascript-time-ago";

import { useFetch } from "../../../../hooks/useFetch";
import { getAllComments } from "../../../../core/services/api/comments.api";
import { useChat } from "../../../../context/ChatContext";

import { UserChatImage } from "../../../../assets/svg/Svg";

const NotificationModal = () => {
  TimeAgo.addDefaultLocale(en);

  //   chat context
  const chat = useChat();

  // Getting students messages and save it in "messages".
  const { data } = useFetch(getAllComments);
  const [messages, setMessages] = useState([]);

  // Only students' messages from today will be shown.
  useEffect(() => {
    // Getting students messages from today.
    const userChatFromToday = chat.getStudentChatFromToday(data);

    // Getting id of posts.
    let postIds = userChatFromToday.map((chat) => chat.postId);
    const usersList = [...new Set(postIds)];

    // Getting last message that each student sent.
    let lastMessages = usersList.map((c) => {
      let last = postIds.lastIndexOf(c);
      return userChatFromToday[last];
    });

    setMessages(lastMessages);
  }, [data]);

  return (
    <div
      class="
           shadow absolute
           top-14 right-20 z-20 w-full max-w-sm divide-y divide-gray-100 overflow-hidden rounded-lg bg-white dark:divide-gray-700 dark:bg-gray-800"
    >
      <div class="block rounded-t-lg bg-gray-50 px-4 py-2 text-center font-medium text-gray-700 dark:bg-gray-800 dark:text-white">
        Notifications
      </div>
      {messages === [] ? (
        <div class="divide-y divide-gray-100 dark:divide-gray-700">
          {" "}
          <a
            href="#"
            class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            No messages
          </a>
        </div>
      ) : (
        messages.map((message) => {
          console.log(message.username.split(" "));
          return (
            <div class="divide-y divide-gray-100 dark:divide-gray-700">
              <a
                href="#"
                class="flex px-4 py-3 text-sm font-medium  hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => chat.handleMessanger(message.postId)}
              >
                <div class="flex-shrink-0">
                  <UserChatImage Class={`order-1 h-10 w-10 rounded-full`} />
                  <div class="absolute ml-6 -mt-5 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-green-400 dark:border-gray-800">
                    <svg
                      class="h-3 w-3 text-white"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="w-full pl-3">
                  <div class="mb-1.5 text-sm text-gray-500">
                    New message from{" "}
                    <span class="font-semibold text-gray-900">
                      {message.username.split(" ").length === 1
                        ? " user"
                        : message.username.split(" ").slice(1)}
                    </span>
                    : {message.comment}
                  </div>
                  <div class="text-xs text-blue-600">
                    <ReactTimeAgo date={message.createDate} locale="en-US" />
                  </div>
                </div>
              </a>
            </div>
          );
        })
      )}
    </div>
  );
};

export { NotificationModal };
