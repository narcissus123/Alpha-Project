import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import { EnrolledCourses } from "./enrolledCourses/EnrolledCourses";
import { AllCourses } from "./allCourses/AllCourses";
import { EditProfile } from "./editProfile/EditProfile";

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

  const [currentPage, setCurrentPage] = useState("0");
  
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
          <div class="ml-1/12 mt-12 flex w-10/12 items-center gap-4 rounded-xl border bg-white p-2 lg:mx-auto lg:mt-14 lg:w-11/12 lg:p-3">
            <div class="rounded-full border border-customGreen ">
              <UserImage3 />
            </div>
            <span class="sm:text-sm md:text-base lg:text-lg">
              {user.fullName}
            </span>
            <div class="ml-2 hidden h-14 border-l border-customGreen pt-[0.9rem] pl-2 text-center lg:block">
              <Link to="/logout">
                <LogoutImage Class="pointer-cursor h-6 w-6 " />
              </Link>
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
            <li class="group flex flex-wrap items-center gap-3 py-3 pl-2 pr-2 hover:bg-slate-200 active:text-customYellow sm:gap-5 sm:pl-4 lg:py-4">
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
            <li class="group static flex flex-wrap items-center gap-5 py-3 pl-2 pr-2 hover:bg-slate-200 sm:pl-4 lg:hidden lg:py-4">
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
        {active === 1 && <EditProfile programInfo={props.programInfo} />}
        {active === 2 && <EnrolledCourses programInfo={props.programInfo} />}
        {active === 3 && <AllCourses programInfo={props.programInfo} />}
      </div>
    </div>
  );
};

export { UserPanelContainer };
