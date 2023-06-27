import { Link } from "react-router-dom";

import { ImageFrame } from "../../common/imageFrame/ImageFrame";

import { useAuth } from "../../../context/AuthContext";
import { UseComponentIntoView } from "../../../hooks/UseComponentIntoView";

// This section leads the user to the login page. There are also some information about institute.
const EnrollmentSection = () => {
  const user = useAuth();

  /* Animating image based on scroll position */
  const { picRef, show } = UseComponentIntoView();

  return (
    <div class="z-20 flex h-[47rem] w-auto flex-row overflow-hidden bg-white text-center opacity-70">
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
        <span class=" mx-auto w-4/5 text-gray-600 lg:w-3/5">
          By registering into our site, make access to services faster and
          easier for yourself.{" "}
        </span>
        <button
          class={`mx-auto w-32 rounded-full border  bg-white py-1 text-customGreen2 hover:border-transparent  hover:text-white lg:w-40 ${
            user.isStudent || user.isAdmin
              ? "cursor-none border-gray-500 hover:bg-gray-500"
              : "cursor-pointer border-customGreen2 hover:bg-customGreen2"
          }`}
          disabled={user.isStudent || user.isAdmin}
        >
          <Link
            class={`block h-full w-full hover:text-white  ${
              user.isStudent ? "text-customGreen2 " : "text-gray-500 "
            }`}
            to={user.isStudent || user.isAdmin ? "#" : "/login"}
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
        <ImageFrame
          frameClass="relative right-0 top-28 h-[30rem] w-[30rem] rounded-full border lg:top-20 lg:h-[35rem] lg:w-[35rem]"
          firstOrbitClass="absolute ml-8 mt-8 h-6/7 w-6/7 rounded-full border border-slate-400 lg:ml-10 lg:mt-10"
          secondOrbitClass="absolute h-full w-full rounded-full border border-slate-400"
          thirdOrbitClass="absolute ml-16 mt-16 h-5/7 w-5/7 rounded-full border bg-enrollImg bg-cover bg-no-repeat lg:ml-20 lg:mt-20 lg:border-slate-400"
        />
      </div>
    </div>
  );
};

export { EnrollmentSection };
