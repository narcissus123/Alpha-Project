import { useState } from "react";
import { Link } from "react-router-dom";

import {
  InstructorImage,
  CapacityImage,
  TuitionImage,
  CommentImage,
  ArrowImage,
  ThreeLinesImage,
  LinkImage,
} from "../../../assets/svg/Svg";

const CourseCard = ({ courseItem }) => {
  const [show, setShow] = useState(true);

  const handleWidget = (event) => {
    setShow(!show);
  };

  return (
    <div class="h-[32rem] w-full">
      {/* Course image */}

      <div class="relative top-1/6 mx-auto h-36 w-36 sm:h-40 sm:w-40 md:h-44 md:w-44">
        <div class="absolute ml-3 mt-3 h-6/7 w-6/7 rounded-full border border-blue-600 md:ml-3.5 md:mt-3.5">
          <div class="relative left-1/2 bottom-2 h-3 w-3 rounded-full border bg-yellow-300"></div>
        </div>
        <div class="absolute h-full w-full rounded-full border border-blue-500">
          <div class="relative left-1/2 top-[98%] h-3 w-3 rounded-full border bg-yellow-300"></div>
        </div>
        <div class="absolute ml-5 mt-5 h-9/12 w-9/12 rounded-full bg-newsImg bg-cover bg-no-repeat md:ml-6 md:mt-6"></div>
      </div>

      {/* Course information */}
      <div
        class={`mx-auto h-4/6 w-64 overflow-hidden rounded-2xl sm:w-72 md:w-72 lg:w-80 ${
          show
            ? "transition-color bg-white duration-1000"
            : "transition-color bg-zinc-700 duration-1000"
        }`}
      >
        <div class="h-1/4 rounded-t-3xl" />
        <div class="group relative h-3/4 rounded-b-2xl pl-2 sm:text-base md:pl-6 md:text-lg lg:pl-4">
          <div class="mr-4">
            <p class="text-center text-xl font-bold leading-10">
              {courseItem.lesson.lessonName}
            </p>
          </div>
          <div class="flex items-center gap-3 text-left">
            <InstructorImage />
            <span class="whitespace-wrap">
              Instructor: {courseItem.teacher.fullName}
            </span>
          </div>
          <div class="flex flex-wrap items-center gap-3 text-left">
            <CapacityImage />
            <span class="leading-10">Capacity: {courseItem.capacity}</span>
          </div>
          <div class="flex flex-wrap items-center gap-3 text-left">
            <TuitionImage />
            <span>Tuition: {courseItem.cost}</span>
          </div>
          <div class="flex flex-wrap items-center gap-3 text-left">
            <CommentImage />
            <span>20 comments</span>
          </div>
          <div class="absolute bottom-0 mx-auto h-12 w-full text-center">
            <div
              class={`ml-[8rem] cursor-pointer p-0 group-hover:animate-bounce md:ml-28 lg:ml-32 ...${
                show
                  ? "visibile transition-all"
                  : "invisible transition-all delay-700"
              }`}
              onClick={handleWidget}
            >
              <ArrowImage />
            </div>
          </div>
        </div>

        {/* Links to shopping cart and individual course pages */}
        <ul
          id={courseItem._id}
          class={`relative h-1/3 rounded-b-2xl border bg-slate-50 ${
            show
              ? "top-1 transition-all duration-1000"
              : "-top-[6.5rem] transition-all duration-1000"
          }`}
        >
          <li
            class="... cursor-pointer bg-slate-200 p-0 group-hover:animate-bounce"
            onClick={() => {
              setShow(!show);
            }}
          >
            <ThreeLinesImage />
          </li>
          <li class="flex h-1/3 flex-row items-center justify-between border px-6 text-lg">
            <span>Learn more</span>
            <Link to={`/programs/${courseItem._id}`}>
              <LinkImage />
            </Link>
          </li>
          <li class="flex h-1/3 flex-row items-center justify-between  border px-6">
            <span>My cart</span>
            <Link to="#">
              <LinkImage />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { CourseCard };
