import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { NotificationModal } from "./notificationModal/NotificationModal";

import { getItem } from "../../../core/services/storage/Storage";
import { getAllComments } from "../../../core/services/api/comments.api";
import { useFetch } from "../../../hooks/useFetch";
import { useAuth } from "../../../context/AuthContext";
import { useChat } from "../../../context/ChatContext";
import {
  dropdown,
  navbarItems,
} from "../../../configs/data/headerNavbarData/HeaderNavbar";

import { LogoImage, MenuImage } from "../../../assets/svg/Svg";

// This component renders the header of our application.
const Header = () => {
  // Check to see if user signed in or not. The menu differs based on user authentication status.

  const user = useAuth();
  const userInfo = user.isStudent
    ? JSON.parse(getItem("user"))
    : user.isAdmin && JSON.parse(getItem("admin"));
  // For dropdown menu.
  const [open, setOpen] = useState(false);

  // For notification dropdown. It shows list of students who sent message.
  const [openNotification, setOpenNotification] = useState(false);

  // Chack if there is any notification from students today.
  const [hasNotification, setHasNotifications] = useState(false);

  // Getting students messages and save it in "messages".
  const { data } = useFetch(getAllComments);
  const chat = useChat();

  // Only students' messages from today will be shown.
  useEffect(() => {
    const userChatFromToday = chat.getStudentChatFromToday(data);

    // If there is a chat, set "hasNotification" to true.
    userChatFromToday.length !== 0
      ? setHasNotifications(true)
      : setHasNotifications(false);
  }, [data, setHasNotifications]);

  return (
    <nav class="relative z-50 h-16 bg-white px-2 drop-shadow-md sm:px-4">
      <div class="flex h-16 items-center justify-between ">
        {/* Logo */}
        <div class="flex items-center text-slate-800 hover:text-[#747bff]">
          <span class="self-center whitespace-nowrap border border-customGreen2 p-1 text-2xl font-extrabold">
            <Link to="/home">
              <LogoImage Class="border-2 border-customGreen2" />
            </Link>
          </span>
        </div>

        {/* Dropdown menu for small screen size and for authenticated users (students and admins) to access their dashboard and sign out button. */}
        <div
          class={`${
            !user.isStudent && !user.isAdmin && "md:hidden"
          } order-2  flex  items-center gap-5`}
        >
          <button
            type="button"
            class="relative order-2 mr-3 rounded-full bg-gray-800 focus:ring-2 focus:ring-customGreen2 md:mr-0"
            onClick={() => setOpen((prev) => !prev)}
          >
            {user.isStudent || user.isAdmin ? (
              <span class="block h-10 w-10 text-center text-xl font-bold leading-9 text-white">
                {userInfo.fullName.charAt(0).toUpperCase()}
              </span>
            ) : (
              <MenuImage Class="bg-white" />
            )}
          </button>
          {/**!-- Dropdown menu --*/}

          <div
            class={`${
              open ? "absolute" : "hidden"
            } top-11 right-6 z-50 my-4 w-60 list-none divide-y divide-customGreen2 overflow-hidden rounded-lg border border-slate-100 bg-white text-base`}
          >
            {(user.isStudent || user.isAdmin) && (
              <div class="m-2 rounded-md border px-4 py-4">
                <span class="mb-2 block text-sm text-gray-900">{`Welcome ${userInfo.fullName}`}</span>
                <span class="block truncate text-xs font-medium text-gray-500">
                  {userInfo.email}
                </span>
              </div>
            )}

            <ul class="text-sm text-gray-700 last:bottom-0">
              {dropdown.map((navItem, index) =>
                navItem.title === "Dashboard" ? (
                  <li
                    key={index}
                    class={`${
                      !user.isStudent ? "hidden" : "block"
                    } border-b px-4 py-3 hover:cursor-pointer hover:bg-gray-100 hover:text-[#747bff]`}
                  >
                    <Link to={navItem.link} class="block w-full">
                      {navItem.title}
                    </Link>
                  </li>
                ) : navItem.title === "Sign out" ? (
                  <li
                    key={index}
                    class={`${
                      !user.isStudent && !user.isAdmin ? "hidden" : "block"
                    } border-b px-4 py-3 hover:cursor-pointer hover:bg-gray-100 hover:text-[#747bff]`}
                  >
                    {user.isStudent && (
                      <Link to="/logout" class="block w-full">
                        {navItem.title}
                      </Link>
                    )}
                    {user.isAdmin && (
                      <Link to="/adminLogout" class="block w-full">
                        {navItem.title}
                      </Link>
                    )}
                  </li>
                ) : navItem.title === "Sign in" ? (
                  <li
                    key={index}
                    class={`${
                      user.isStudent || user.isAdmin ? "hidden" : "block"
                    } border-b px-4 py-3 hover:cursor-pointer hover:bg-gray-100 hover:text-[#747bff]`}
                  >
                    <Link to={navItem.link} class="block w-full">
                      {navItem.title}
                    </Link>
                  </li>
                ) : (
                  <li
                    key={index}
                    class="block border-b px-4 py-3 hover:cursor-pointer hover:bg-gray-100 hover:text-[#747bff] md:hidden"
                  >
                    <Link to={navItem.link} class="block w-full">
                      {navItem.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Notifications */}
          <button
            class={`${
              user.isAdmin ? "relative" : "hidden"
            } order-1 inline-flex items-center rounded-full border p-1 text-center text-sm font-medium text-gray-500 hover:text-gray-900 focus:outline-none`}
            type="button"
            onClick={() => setOpenNotification(!openNotification)}
          >
            <svg
              class="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
            </svg>
            <div class={` ${hasNotification ? "relative flex" : "hidden"} `}>
              <div class="relative -top-2 right-3 inline-flex h-3 w-3 rounded-full border-2 border-white bg-red-500"></div>
            </div>
          </button>
          {/* Notification dropdown */}
          {openNotification && (
            <NotificationModal hasNotification={hasNotification} />
          )}
        </div>

        {/* Menu for medium and large screen sizes for users who are not signed in. */}
        {!user.isStudent && !user.isAdmin && (
          <ul class="order-2 mr-2 py-2 text-base font-bold text-gray-700">
            <Link
              to="/login"
              class="block p-0 text-gray-700 hover:text-blue-700 focus:text-blue-700"
            >
              Sign in
            </Link>
          </ul>
        )}
        <div class="hidden items-center justify-center md:order-1 md:mr-3 md:flex md:flex-1 md:items-center">
          {/* Only someone who is not authenticated should be able to login. */}

          <ul class="flex flex-row space-x-8 py-2 text-base font-bold text-gray-700">
            {navbarItems.map((navItem, index) => (
              <li key={index}>
                <Link
                  to={navItem.link}
                  class="block p-0 text-gray-700 hover:text-blue-700 focus:text-blue-700"
                  aria-current="page"
                >
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Header };
