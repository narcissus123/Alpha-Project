import React from "react";

// This component renders the name of institute and provides a brief description of the institution.
const LandingSection = () => {
  return (
    <div class="h-[43rem] overflow-hidden bg-landingIntroImg bg-cover bg-no-repeat opacity-70">
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
      </div>
    </div>
  );
};

export { LandingSection };
