import { useState, Fragment, useEffect } from "react";

import { Spinner } from "../spinner/Spinner";

import { LeftArrowImage, RightArrowImage } from "../../../assets/svg/Svg";

// This component renders a carousel.
const Slider = ({ isLoading, numberOfSlides = "5", Class, children }) => {
  const [curr, setCurr] = useState(0);
  const prev = () => setCurr((curr) => (curr <= 0 ? 0 : curr - 1 / 5));
  const next = () => {
    setCurr((curr) => (curr >= 0.8 ? 0 : curr + 1 / 5));
  };
  useEffect(() => {
    const interval_id = setInterval(next, 8000);
    return () => {
      // Stop the interval when the component unmounts.
      // Otherwise it will keep going and you will get an error.
      clearInterval(interval_id);
    };
  }, [next]);

  return (
    <Fragment>
      {/* Slider. */}
      <div class={`group relative h-[47rem] overflow-hidden ${Class}`}>
        {isLoading ? (
          <Spinner Class="h-[43rem] pt-24" />
        ) : (
          // Gallery
          <div
            style={{ transform: `translateX(-${curr * 100}%)` }}
            class={`relative left-0 flex h-screen w-5screen flex-row transition-transform duration-[3s] ease-out`}
          >
            {children}
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

export { Slider };
