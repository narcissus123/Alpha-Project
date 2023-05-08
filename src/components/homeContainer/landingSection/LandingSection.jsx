import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Link, useNavigate } from "react-router-dom";

import { useFetch } from "../../../hooks/useFetch";
import { getCourses } from "../../../core/services/api/Courses.api";

// This component renders the name of institute and provides a brief description of the institution.
const LandingSection = () => {
  const history = useNavigate();

  /* Call API to get courses.*/
  const { isLoading, data } = useFetch(getCourses);

  const items = data.map((course) => ({
    id: course._id,
    name: course.lesson.lessonName,
    link: `/programs/${course._id}`,
    image: course.lesson.image,
  }));

  // The item selected
  const handleOnSelect = (item) => {
    history(item.link);
  };

  const formatResult = (item) => {
    return (
      <>
        <li class="flex cursor-pointer flex-row items-center gap-3 text-left hover:text-[#747bff]">
          <img src={item.image} class="w-10" />
          <span>Course: {item.name}</span>
        </li>
      </>
    );
  };

  return (
    <div class="h-[43rem] bg-landingIntroImg bg-cover bg-no-repeat opacity-70">
      <div class=" mx-auto mt-40 space-y-16 text-center text-lg text-white">
        <h1 class="text-4xl font-semibold text-customGreen sm:text-5xl lg:text-6xl">
          Alpha Institute
        </h1>
        <div class="mx-14 sm:mx-14 md:px-3 ">
          <p class="mb-5"> With 13 years of experience. </p>
          <p>
            We are proud to serve you with the strongest training staff in
            person and online.
          </p>
        </div>
        <div class="z-30 mx-auto w-72 lg:w-80">
          <ReactSearchAutocomplete
            placeholder="Search course name here"
            items={items}
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </div>
    </div>
  );
};

export { LandingSection };
