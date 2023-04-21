import { useState, useRef, useEffect, useLayoutEffect, Fragment } from "react";
import { toast, ToastContainer } from "react-toastify";
import dateFormat from "dateformat";

import { getCourseById } from "../../../core/services/api/Courses.api";

import { CourseImage } from "./courseImage/CourseImage";
import { EmailImage } from "../../../assets/svg/Svg";

// This component renders the information about the target course.
const AboutCourse = ({ param }) => {
  /* Saving courses information sent from backend. */
  const [courseInfo, setCourseInfo] = useState([]);

  const getAllCourses = async () => {
    try {
      const data = await getCourseById(param.programId);
      if (data.success) {
        setCourseInfo(data.result);
      }
    } catch (error) {
      toast.error("Sorry. Information about this Course is not available.");
    }
  };

  /* Call API to get all courses. */
  useEffect(() => {
    getAllCourses();
  }, []);

  const [show, doShow] = useState({ itemOne: false });
  const picRef = useRef(null);

  /* Animating image based on scroll position */
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
    <Fragment>
      <ToastContainer />

      <div class="flex h-[40rem] w-auto flex-row justify-center overflow-hidden border-t bg-white">
        <ul class="flex h-full w-1/2  flex-col justify-center pl-10 text-base md:text-lg">
          <li>
            <span class="block text-4xl md:text-[2.75rem]">
              {courseInfo.title}
            </span>
          </li>
          <li>
            <hr class="my-5 w-1/2 border border-slate-400"></hr>
          </li>
          <li>
            <span>Instructor: </span>
            <span class="text-slate-500">
              {/* courseInfo.teacher.fullName */}
            </span>
          </li>
          <li class="mb-3 flex flex-row items-center gap-2">
            <EmailImage />
            <span class="text-sm text-customGreen md:text-base">
              {/* courseInfo.teacher.email */}
            </span>
          </li>
          <li class="mb-3">
            <span>Start date: </span>
            <span class="text-slate-500">
              {dateFormat(courseInfo.startDate, "mm/dd/yyyy")}
            </span>
          </li>
          <li class="mb-3">
            <span>End date: </span>
            <span class="text-slate-500">
              {dateFormat(courseInfo.endDate, "mm/dd/yyyy")}
            </span>
          </li>
          <li class="mb-3">
            <span>Capacity: </span>
            <span class="text-slate-500">{courseInfo.capacity}</span>
          </li>
          <li class="mb-3">
            <span>About course: </span>
            <p class="text-slate-500">{/* courseInfo.lesson.description */}</p>
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
          <CourseImage />
        </div>
      </div>
    </Fragment>
  );
};

export { AboutCourse };
