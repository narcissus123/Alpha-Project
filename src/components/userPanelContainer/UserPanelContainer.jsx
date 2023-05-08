import { Link } from "react-router-dom";
import { useState } from "react";

import { EnrolledCourses } from "./enrolledCourses/EnrolledCourses";
import { AllCourses } from "./allCourses/AllCourses";
import { EditProfile } from "./editProfile/EditProfile";
import { UploadImageModal } from "./uploadImageModal/UploadImageModal";

import { getItem } from "../../core/services/storage/Storage";

import {
  UserImage3,
  LogoutImage,
  AllCoursesImage,
  EditProfileImage,
  RegisteredCoursesImage,
} from "../../assets/svg/Svg";

// This component includes the sidebar of user dashboard and the content. Content renders edit form, user registered courses table
// and all institute courses table.
const UserPanelContainer = (props) => {
  const user = JSON.parse(getItem("user"));

  const [active, setActive] = useState(1);
  const toggle = (tab) => {
    if (active !== tab) setActive(tab);
  };

  const [show, setShow] = useState(false);

  const [openImgModal, setOpenImgModal] = useState(false);
  return (
    <div class="flex h-[43rem]">
      {/* User panel sidebar */}
      <div
        class={`absolute ${
          show
            ? "left-0 transition-all duration-1000"
            : "-left-40 transition-all duration-1000 sm:-left-60 md:-left-72"
        } z-20 flex h-[43rem] justify-between bg-black bg-opacity-80 sm:w-[36%] md:w-[32%] lg:static lg:w-[20%] lg:bg-transparent`}
      >
        <div class="h-full w-full">
          <div class="ml-1/12 mt-12 flex w-10/12 items-center gap-4 rounded-xl border bg-white p-2 text-slate-800 lg:mx-auto lg:mt-14 lg:w-11/12 lg:p-3">
            <div class="h-14 w-14 overflow-hidden rounded-full border border-customGreen ">
              {user.profile ? (
                <img src={user.profile} class="h-14 w-14 object-cover " />
              ) : (
                <UserImage3 />
              )}
            </div>
            <span class="sm:text-sm md:text-base lg:text-lg">
              {user.fullName}
            </span>
            <div class="ml-2 hidden h-14 justify-center gap-3 border-l border-customGreen pl-2 text-center lg:flex lg:flex-col">
              <Link to="/logout">
                <LogoutImage Class="pointer-cursor h-5 w-5 " />
              </Link>
              <button onClick={() => setOpenImgModal(true)}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  height="1.3rem"
                  width="1.3rem"
                  xmlns="http://www.w3.org/2000/svg"
                  class="bg-white hover:text-[#747bff]"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Sidebar tabs */}
          <ul class="min-w-sm md:min-w-md mt-16 text-sm font-medium md:text-base md:font-semibold lg:min-w-full ">
            <li class="group flex flex-wrap items-center gap-3 py-3 pl-2 pr-2 hover:bg-slate-200 sm:gap-5 sm:pl-4 lg:py-4">
              <EditProfileImage Class="w-4 text-white group-hover:text-customYellow sm:w-5 lg:w-6" />

              <Link
                class={`flex-1 text-white active:text-customYellow group-hover:text-customYellow ${
                  active && "text-customYellow"
                }`}
                onClick={() => {
                  toggle(1);
                }}
              >
                Edit profile
              </Link>
            </li>
            <li class="group flex flex-wrap items-center gap-3 py-3 pl-2 pr-2 hover:bg-slate-200 sm:gap-5 sm:pl-4 lg:py-4">
              <RegisteredCoursesImage Class="w-4 text-white group-hover:text-customYellow sm:w-5 lg:w-6" />

              <Link
                class="flex-1 text-white group-hover:text-customYellow"
                onClick={() => {
                  toggle(2);
                }}
              >
                Registered courses
              </Link>
            </li>
            <li class="group flex flex-wrap items-center gap-3 py-3 pl-2 pr-2 hover:bg-slate-200 sm:gap-5 sm:pl-4 lg:py-4">
              <AllCoursesImage />
              <Link
                class="flex-1 text-white group-hover:text-customYellow"
                onClick={() => {
                  toggle(3);
                }}
              >
                All courses
              </Link>
            </li>
            <li class="group flex flex-wrap items-center gap-5 py-3 pl-2 pr-2 hover:bg-slate-200 sm:pl-4 lg:hidden lg:py-4">
              <LogoutImage Class="w-4 text-white group-hover:text-customYellow sm:w-5 lg:w-6" />
              <Link
                class="text-white group-hover:text-customYellow"
                to="/logout"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
        <div
          class="inline-block h-full w-5 cursor-pointer bg-customYellow pt-60 text-center text-white lg:hidden"
          onClick={() => {
            setShow(!show);
          }}
        >
          <span class="break-all"> m e n u e</span>
        </div>
      </div>
      {/* User panel content area */}

      <div class="w-full bg-white lg:w-8/10">
        {openImgModal && <UploadImageModal setOpenImgModal={setOpenImgModal} />}
        {active === 1 && <EditProfile programInfo={props.programInfo} />}
        {active === 2 && <EnrolledCourses programInfo={props.programInfo} />}
        {active === 3 && <AllCourses programInfo={props.programInfo} />}
      </div>
    </div>
  );
};

export { UserPanelContainer };
