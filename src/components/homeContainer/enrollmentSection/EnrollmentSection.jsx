import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../../context/AuthContext";

import { EnrollmentImage } from "./enrollmentImage/EnrollmentImage";

// This section leads the user to the login page.
const EnrollmentSection = () => {
  const user = useAuth();
  console.log("user:", user.isUser);
  const [show, doShow] = useState({ itemOne: false });

  /* Animating image based on scroll position */
  const picRef = useRef(null);

  useLayoutEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;
    //added to reduce redundancy
    const divPos = topPos(picRef.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (divPos < scrollPos) {
        doShow((state) => ({ ...state, itemOne: true }));
      } else if (divPos > scrollPos) {
        doShow((state) => ({ ...state, itemOne: false }));
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div class="flex h-[47rem] w-auto flex-row overflow-hidden bg-white text-center opacity-70">
      <div class="flex h-full w-1/2 flex-col justify-center space-y-10 self-center text-lg md:space-y-16">
        <h1 class="text-3xl font-medium text-customGreen2 md:text-4xl">
          Our Reputation
        </h1>
        <ul class="flex flex-row justify-around text-base text-slate-600  md:text-lg">
          <li>
            <span class="block  text-customGreen2">30</span>
            <span class="block"> Instructors </span>
          </li>
          <li>
            <span class="block text-customGreen2">10</span>
            <span class="block"> Programs </span>
          </li>
          <li>
            <span class="block text-customGreen2">40</span>
            <span class="block"> Students </span>
          </li>
        </ul>
        <span class=" mx-auto w-4/5 lg:w-3/5">
          By registering into our site, make access to services faster and
          easier for yourself.{" "}
        </span>
        <button
          class={`w-30 mx-auto rounded-full border  bg-white py-1 text-customGreen2 hover:border-transparent  hover:text-white lg:w-40 ${
            user.isUser
              ? "cursor-none border-gray-500 hover:bg-gray-500"
              : "cursor-pointer border-customGreen2 hover:bg-customGreen2"
          }`}
          disabled={user.isUser}
        >
          <Link
            class={`block h-full w-full hover:text-white  ${
              user.isUser ? "text-gray-500 " : "text-customGreen2 "
            }`}
            to={user.isUser ? "#" : "/login"}
          >
            Register
          </Link>
        </button>
      </div>

      {/* Image section */}
      <div
        class={`mx-auto h-auto w-1/2 opacity-100 ${
          show.itemOne
            ? "translate-x-0 transform duration-[4s]"
            : "translate-x-[100%] transform duration-[4s]"
        }`}
        ref={picRef}
      >
        <EnrollmentImage />
      </div>
    </div>
  );
};

export { EnrollmentSection };
