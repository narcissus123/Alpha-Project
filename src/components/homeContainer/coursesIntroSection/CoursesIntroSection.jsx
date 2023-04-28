import { useState, useEffect, Fragment } from "react";

import { CourseCart } from "./courseCart/CourseCart";
import { Spinner } from "../../common/spinner/Spinner";

import { getCourses } from "../../../core/services/api/Courses.api";
import { useFetch } from "../../../hooks/useFetch";

import { LeftArrowImage, RightArrowImage } from "../../../assets/svg/Svg";

// This component renders a carousel. Each item of carousel renders a course detail and leads user to that course page for more information.
const CoursesIntroSection = () => {
  /* Call API to get courses.*/
  const { isLoading, data } = useFetch(getCourses);

  const [curr, setCurr] = useState(0);
  const prev = () => setCurr((curr) => (curr <= 0 ? 0 : curr - 1 / 5));
  const next = () => setCurr((curr) => (curr >= 0.8 ? 0 : curr + 1 / 5));

  return (
    <Fragment>
      {/* Slider. */}
      <div class="group relative h-[47rem] overflow-hidden">
        {isLoading ? (
          <Spinner Class="h-[43rem] pt-24" />
        ) : (
          // Gallery.
          <div
            style={{ transform: `translateX(-${curr * 100}%)` }}
            class={`relative left-0 flex h-screen w-5screen flex-row transition-transform duration-[3s] ease-out`}
          >
            {/* Items inside the gallery. */}
            {data.slice(0, 5).map((program, index) => (
              <div class="relative h-screen w-screen text-white" key={index}>
                <CourseCart program={program} />
              </div>
            ))}
          </div>
        )}
        {/* Left button. */}
        <button
          class="absolute left-0 top-1/2 ml-6 h-10 w-10 cursor-pointer rounded-full bg-white/30 hover:bg-white/50 "
          onClick={prev}
        >
          <LeftArrowImage Class="mx-auto text-center text-white" />
        </button>
        {/* Right button. */}
        <button
          class="absolute right-0 top-1/2 mr-6  h-10 w-10 cursor-pointer rounded-full bg-white/30 hover:bg-white/50  "
          onClick={next}
        >
          <RightArrowImage Class="mx-auto text-center text-white" />
        </button>
      </div>
    </Fragment>
  );
};

export { CoursesIntroSection };
