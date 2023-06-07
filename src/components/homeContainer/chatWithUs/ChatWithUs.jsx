import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { getItem } from "../../../core/services/storage/Storage";
import { getAllComments } from "../../../core/services/api/comments.api";
import { SendUserComments } from "../../../core/services/api/User-comments.api";
import { sendCommentVerification } from "../../../core/services/api/User-comments.api";
import { useFetch } from "../../../hooks/useFetch";
import { useAuth } from "../../../context/AuthContext";
import { useChat } from "../../../context/ChatContext";

import {
  SendImage,
  LogoImage,
  AdminChatImage,
  UserChatImage,
  ChatImage,
} from "../../../assets/svg/Svg";

const ChatWithUs = () => {
  const chat = useChat();
  const [id, setId] = useState("");

  useEffect(() => {
    setId(chat.messageId);
  }, [chat.messageId]);

  const [open, setOpen] = React.useState(false);

  const [comments, setComments] = useState([]);
  const user = useAuth();

  // Getting user chats from server.
  const { data } = useFetch(getAllComments);

  // Only user messages from today will be shown.
  useEffect(() => {
    const userChatFromToday = chat.getAllChatsFromToday(data);

    setComments(userChatFromToday);
  }, [data, id]);

  // useForm hook from react hook form. User can send message using this form.
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: { answer: "" },
  });

  // Reseting form if message sent successfully.
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset("");
    }
  }, [formState, reset, isSubmitSuccessful]);

  // Submitting user and admin messages. //!auth.isAdmin
  const onSubmit = async (input) => {
    try {
      // Getting user message received from form and send it to server.
      let userMessage;

      if (user.isStudent) {
        const user = JSON.parse(getItem("user"));
        userMessage = {
          postId: user._id,
          email: user.email,
          username: `userChat ${user.fullName}`,
          comment: input.answer,
        };
      } else if (user.isAdmin) {
        const admin = JSON.parse(getItem("admin"));

        userMessage = {
          postId: id,
          email: admin.email,
          username: `adminChat ${admin.fullName}`,
          comment: input.answer,
        };
      }

      const response = await SendUserComments(userMessage);

      // updating chat.
      setComments((prev) => [...prev, JSON.parse(response.config.data)]);
      if (response.status === 200) {
        const commentId = comments[comments.length - 1]._id;

        // Messages will be validated immediately after we send user messsage to server successfully using "SendUserComments" API.
        const response = await sendCommentVerification(commentId);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button
        id="dropdownTopButton"
        data-dropdown-toggle="dropdownTop"
        data-dropdown-placement="top"
        class="absolute right-2 top-[41.5rem] mr-3 mb-3 inline-flex items-center rounded-full border-2 border-white px-3 py-2 text-center text-sm font-medium text-white focus:outline-none   "
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        <ChatImage Class="text-white" />
      </button>

      {open && (
        <div
          id="dropdownTop"
          class="shadow absolute top-[14rem] right-6 z-10  overflow-hidden rounded-xl border bg-white dark:bg-gray-700"
        >
          {/* Header */}
          <div class=" flex flex-1 flex-col justify-between border-b-2 pb-1 pt-3 ">
            {/* Header logo */}
            <div class="ml-2 flex items-center rounded-full text-slate-800 hover:text-[#747bff]">
              <span class="rounded-full border border-customGreen2 p-[0.4rem]">
                <LogoImage />
              </span>
              {/* Header Title */}
              <div class="flex flex-col px-2 leading-tight">
                <div class="text-md mt-1 font-medium text-gray-700">
                  Alpha Institute Support
                </div>
                <span class="text-sm text-gray-600">
                  Admin: {JSON.parse(getItem("admin")).fullName}
                </span>
              </div>
            </div>
          </div>
          {/* Chatting area */}
          <div
            id="messages"
            class="scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch flex h-80 flex-col space-y-4 overflow-y-auto border p-3"
          >
            <div class="flex items-end justify-end">
              <div class="order-1 mx-2 flex max-w-xs flex-col items-end space-y-2 text-xs">
                <span class="inline-block rounded-lg rounded-br-none bg-blue-600 px-4 py-2 text-white ">
                  Hi, We have 24 hour support! How can we help you today?
                </span>
              </div>
              <AdminChatImage Class="order-2 h-8 w-8 rounded-full border border-slate-800 p-1 " />
            </div>

            {comments.map((comm, index) => {
              console.log("comm", comm);

              return (
                <>
                  {comm.username.split(" ")[0] === "userChat" && (
                    <div class="flex items-start">
                      <UserChatImage
                        Class={`order-1 h-7 w-7 rounded-full ${comm.answer}`}
                      />

                      <div class="order-2 mx-2 flex max-w-xs flex-col items-start space-y-2 text-xs">
                        <span class="inline-block rounded-lg rounded-bl-none bg-gray-300 px-4 py-2 text-gray-600">
                          {comm.comment}
                        </span>
                      </div>
                    </div>
                  )}
                  {comm.username.split(" ")[0] === "adminChat" && (
                    <div class="flex items-end justify-end">
                      <AdminChatImage Class="order-2 h-8 w-8 rounded-full border border-slate-800 p-1" />
                      <div class="order-1 mx-2 flex max-w-xs flex-col items-end space-y-2 text-xs">
                        <span class="inline-block rounded-lg rounded-br-none bg-blue-600 px-4 py-2 text-white ">
                          {comm.comment}
                        </span>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
          {/* Footer. Texting area. */}
          <div>
            {/* Comment form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="flex">
                <div class="w-full rounded-t-lg bg-white ">
                  {/* Call to action. */}
                  <div class="flex h-12 justify-end ">
                    <textarea
                      id="answer"
                      rows="6"
                      class="-mb-2 w-full border-r bg-white py-2 px-4 text-sm text-gray-900 focus:outline-none focus:ring-0"
                      placeholder="Reply to the comment..."
                      {...register("answer", {
                        required: "This is required.",
                      })}
                    />

                    <button
                      class="focus:ring-bg-blue-600 my-[0.4rem] mr-2 inline-flex items-center rounded-full bg-blue-600 px-[0.45rem] text-center text-sm font-normal text-white hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2"
                      type="submit"
                    >
                      <SendImage Class="w-5 h-full" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export { ChatWithUs };
