import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import dateFormat from "dateformat";

import { ImageFrame } from "../../common/imageFrame/ImageFrame";

import { getCourseById } from "../../../core/services/api/Courses.api";
import { useFetch } from "../../../hooks/useFetch";
import { UseComponentIntoView } from "../../../hooks/UseComponentIntoView";

import { EmailImage } from "../../../assets/svg/Svg";

// This component renders the information about the target course.
const AboutCourse = ({ param }) => {
  /* Call API to get related courses.*/
  const { isLoading, data } = useFetch(getCourseById, param.programId);

  /* Animating image based on scroll position */
  const { picRef, show } = UseComponentIntoView(isLoading);

  return (
    <Fragment>
      <ToastContainer />
      {isLoading ? (
        <p class="h-[40rem] bg-white pt-48 text-center text-3xl font-semibold transition-all duration-700">
          Loading...
        </p>
      ) : (
        <div class="flex h-[40rem] w-auto flex-row justify-center overflow-hidden border-t bg-white transition-all duration-700">
          <ul class="flex h-full w-1/2  flex-col justify-center pl-10 text-base md:text-lg">
            <li>
              <span class="block text-4xl md:text-[2.75rem]">{data.title}</span>
            </li>
            <li>
              <hr class="my-5 w-1/2 border border-slate-400"></hr>
            </li>
            <li>
              <span>Instructor: </span>
              <span class="text-slate-500">{data.teacher.fullName}</span>
            </li>
            <li class="mb-3 flex flex-row items-center gap-2">
              <EmailImage />
              <span class="text-sm text-customGreen md:text-base">
                {data.teacher.email}
              </span>
            </li>
            <li class="mb-3">
              <span>Start date: </span>
              <span class="text-slate-500">
                {dateFormat(data.startDate, "mm/dd/yyyy")}
              </span>
            </li>
            <li class="mb-3">
              <span>End date: </span>
              <span class="text-slate-500">
                {dateFormat(data.endDate, "mm/dd/yyyy")}
              </span>
            </li>
            <li class="mb-3">
              <span>Capacity: </span>
              <span class="text-slate-500">{data.capacity}</span>
            </li>
            <li class="mb-3">
              <span>About course: </span>
              <p class="text-slate-500">{data.lesson.description}</p>
            </li>
          </ul>
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
              firstOrbitClass="absolute ml-8 mt-8 h-6/7 w-6/7 rounded-full border border-slate-400 lg:ml-10 lg:mt-10 "
              secondOrbitClass="absolute h-full w-full rounded-full border border-slate-400"
              thirdOrbitClass="absolute ml-16 mt-16 h-5/7 w-5/7 overflow-hidden rounded-full border bg-enrollImg bg-cover bg-no-repeat lg:ml-20 lg:mt-20 lg:border-slate-400"
              image={data.lesson.image}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export { AboutCourse };
