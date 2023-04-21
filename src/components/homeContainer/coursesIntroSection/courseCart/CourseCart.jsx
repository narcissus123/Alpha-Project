import { Link } from "react-router-dom";
import { Fragment } from "react";

// This component renders related informations about each course item in the form of earth.
const CourseCart = ({ program }) => {
  return (
    <Fragment>
      {/* First half of earth surface */}
      <div class="shadow-3xl absolute left-1/7 top-1/5 h-[25rem] w-[25rem] animate-rotateEarth2 rounded-full bg-earth sm:left-1/5 md:left-2/7 lg:left-1/3">
        <div class="flex h-full flex-col items-center justify-center text-lg font-bold text-customGreen2">
          <h1 class="mb-4 text-4xl font-bold">{program.title}</h1>

          <span> {program.teacher.fullName} </span>

          <span>{`capacity: ${program.capacity}`}</span>

          <span class=""> {`cost: ${program.cost}`}</span>

          <br class="border"></br>

          <Link
            class="z-50 cursor-pointer rounded-full border border-transparent bg-customGreen2 bg-opacity-60 py-3 px-3 text-sm font-semibold text-white hover:text-white"
            to={`/programs/${program._id}`}
          >
            Go to Course
          </Link>
        </div>
      </div>

      {/* Second half of earth surface */}
      <div class="shadow-3xl absolute left-1/7 top-1/5 mx-auto h-[25rem] w-[25rem] animate-rotateEarth1 rounded-full bg-earth sm:left-1/5 md:left-2/7 lg:left-1/3"></div>
    </Fragment>
  );
};

export { CourseCart };
