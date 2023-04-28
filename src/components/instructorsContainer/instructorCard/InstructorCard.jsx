import React, { Fragment } from "react";

import { ImageFrame } from "../../common/imageFrame/ImageFrame";

import { UseComponentIntoView } from "../../../hooks/UseComponentIntoView";

import { InstructorImage2 } from "../../../assets/svg/Svg";

// This component renders a card containing information about each instructor.
const InstructorCard = ({ instructor, id }) => {
  /* Animating image based on scroll position */
  const { picRef, show } = UseComponentIntoView();

  return (
    <Fragment>
      {id % 2 !== 0 ? (
        <div key={id} class="h-[19rem] pt-1.5 sm:h-[21rem] md:h-[25rem]">
          <div class="absolute right-0 z-40 h-72 w-72 rounded-full border shadow-customShadow sm:h-80 sm:w-80 md:mr-1/12 md:h-96 md:w-96 lg:mr-1/6">
            <div class="flex h-full w-full flex-col items-center gap-1 overflow-hidden rounded-full border pt-10 text-center text-sm text-slate-200 sm:pt-14 md:pt-20">
              <div class="text-base font-medium">{instructor.fullName}</div>
              <div>{`( ${instructor.role} )`}</div>
              <div class="my-2 whitespace-pre-line rounded-full  text-[13.8px] sm:my-3 md:my-6">
                <h2 class="text-base font-medium">Courses: </h2>
                {instructor.courses.map((instru, index) => (
                  <span key={index} class="pt-2 pr-2">
                    {instru.title},
                  </span>
                ))}
              </div>
              <div>
                <p class="text-base font-medium">Email: </p>
                {instructor.email}
              </div>
            </div>
          </div>
          <div
            class={`absolute right-11/12 mr-10 h-72 w-72 rounded-full border shadow-customShadow sm:h-80 sm:w-80 md:h-96 md:w-96 lg:right-5/7 ${
              show.itemOne
                ? "translate-x-[80%] transform duration-[4s]"
                : "-translate-x-[100%] transform duration-[4s]"
            }`}
            ref={picRef}
          >
            <ImageFrame
              frameClass="h-full w-full rounded-full"
              firstOrbitClass="absolute ml-5 mt-5 h-6/7 w-6/7 rounded-full border sm:ml-6 sm:mt-6 md:ml-7 md:mt-7"
              secondOrbitClass="absolute h-full w-full rounded-full border"
              thirdOrbitClass="absolute ml-9 mt-9 h-3/4 w-3/4 overflow-hidden rounded-full border md:ml-12 md:mt-12"
              icon={
                <InstructorImage2 Class="h-full w-full bg-white pt-3 opacity-80 text-slate-800" />
              }
            />
          </div>
        </div>
      ) : (
        <div
          key={id}
          class="h-[19rem]  bg-slate-200 pt-1.5 opacity-70 shadow-customShadow sm:h-[21rem] md:h-[25rem]"
        >
          <div class="absolute left-0 h-72 w-72 rounded-full border border-slate-600 sm:h-80 sm:w-80 md:ml-1/12 md:h-96 md:w-96 lg:ml-1/6">
            <div class="flex h-full w-full flex-col items-center gap-1 overflow-hidden rounded-full border pt-10  text-center text-sm text-slate-600 sm:pt-14 md:pt-20">
              <div class="text-base font-medium">{instructor.fullName}</div>
              <div>{`( ${instructor.role} )`}</div>
              <div class="my-2 whitespace-pre-line rounded-full  text-[13.8px] sm:my-3 md:my-6">
                <h2 class="text-base font-medium">Courses: </h2>
                {instructor.courses.map((instru, index) => (
                  <span key={index} class="pt-2 pr-2">
                    {instru.title},
                  </span>
                ))}
              </div>
              <div>
                <p class="text-base font-medium">Email: </p>
                {instructor.email}
              </div>
            </div>
          </div>
          <div
            class={`absolute left-2/5 ml-10 h-72 w-72 rounded-full shadow-customShadow sm:left-3/7 sm:h-80 sm:w-80 md:left-4/9 md:h-96 md:w-96 lg:left-4/9 ${
              show.itemOne
                ? "translate-x-[10%] transform duration-[4s]"
                : "translate-x-[200%] transform duration-[4s]"
            }`}
            ref={picRef}
          >
            <ImageFrame
              frameClass="h-full w-full rounded-full"
              firstOrbitClass="absolute ml-5 mt-5 h-6/7 w-6/7 rounded-full border border-slate-600 sm:ml-6 sm:mt-6 md:ml-7 md:mt-7"
              secondOrbitClass="absolute h-full w-full rounded-full border border-slate-600"
              thirdOrbitClass="absolute ml-9 mt-9 h-3/4 w-3/4 overflow-hidden rounded-full border md:ml-12 md:mt-12"
              icon={
                <InstructorImage2 Class="h-full w-full bg-white pt-3 border text-slate-800" />
              }
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export { InstructorCard };
