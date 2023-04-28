import React, { useState } from "react";
import { LogoImage, MenuImage } from "../../../assets/svg/Svg";
import { getItem } from "../../../core/services/storage/Storage";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import {
  dropdown,
  navbarItems,
} from "../../../configs/data/headerNavbarData/HeaderNavbar";
// This component renders the header of our application.
const Header = () => {
  // Check to see if user signed in or not. The menu differs based on user authentication status.
  const user = JSON.parse(getItem("user"));
  const auth = useAuth();

  // For dropdown menu.
  const [open, setOpen] = useState(false);
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

        {/* Dropdown menu for small screen size and for authenticated users to access their dashboard and sign out button. */}
        <div
          class={`${!auth.isUser && "md:hidden"} order-2  flex items-center`}
        >
          <button
            type="button"
            class="relative mr-3 rounded-full bg-gray-800 focus:ring-2 focus:ring-customGreen2 md:mr-0"
            onClick={() => setOpen((prev) => !prev)}
          >
            {auth.isUser ? (
              <span class="block h-10 w-10 text-center text-xl font-bold leading-9 text-white">
                {user.fullName.charAt(0).toUpperCase()}
              </span>
            ) : (
              <MenuImage Class="bg-white" />
            )}
          </button>
          {/**!-- Dropdown menu --*/}

          <div
            class={`${
              open ? "absolute" : "hidden"
            } top-11  right-10 z-50 my-4 list-none divide-y divide-customGreen2 overflow-hidden rounded-lg border border-slate-100 bg-white text-base`}
          >
            {auth.isUser && (
              <div class="m-2 rounded-md border px-4 py-4">
                <span class="mb-2 block text-base text-gray-900">{`Welcome ${user.fullName}`}</span>
                <span class="block truncate text-xs font-medium text-gray-500">
                  {user.email}
                </span>
              </div>
            )}

            <ul class="text-sm text-gray-700 last:bottom-0">
              {dropdown.map((navItem, index) =>
                navItem.title === "Dashboard" ||
                navItem.title === "Sign out" ? (
                  <li
                    key={index}
                    class={`${
                      !auth.isUser ? "hidden" : "block"
                    } border-b px-4 py-2 hover:cursor-pointer hover:bg-gray-100 hover:text-[#747bff]`}
                  >
                    <Link to={navItem.link} class="block w-full">
                      {navItem.title}
                    </Link>
                  </li>
                ) : navItem.title === "Sign in" ? (
                  <li
                    key={index}
                    class={`${
                      auth.isUser ? "hidden" : "block"
                    } border-b px-4 py-2 hover:cursor-pointer hover:bg-gray-100 hover:text-[#747bff]`}
                  >
                    <Link to={navItem.link} class="block w-full">
                      {navItem.title}
                    </Link>
                  </li>
                ) : (
                  <li
                    key={index}
                    class="block border-b px-4 py-2 hover:cursor-pointer hover:bg-gray-100 hover:text-[#747bff] md:hidden"
                  >
                    <Link to={navItem.link} class="block w-full">
                      {navItem.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Menu for medium and large screen sizes. */}
        <div class="hidden items-end justify-between md:order-1 md:mr-3 md:flex md:w-auto md:items-center">
          <ul class="flex flex-row space-x-8 py-2 text-base font-bold text-gray-700">
            {navbarItems.map((navItem, index) =>
              navItem.title === "Sign in" ? (
                !auth.isUser && (
                  <li>
                    <Link
                      to="/login"
                      class="block p-0 text-gray-700 hover:text-blue-700 focus:text-blue-700"
                    >
                      Sign in
                    </Link>
                  </li>
                )
              ) : (
                <li key={index}>
                  <Link
                    to={navItem.link}
                    class="block p-0 text-gray-700 hover:text-blue-700 focus:text-blue-700"
                    aria-current="page"
                  >
                    {navItem.title}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Header };
