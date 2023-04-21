import React from "react";
import image from "../../assets/img/404.png";
const PageNotFound = () => {
  return (
    <div class="relative h-[43rem]">
      <img class="absolute h-[43rem] w-full" src={image} />
      <div class="absolute h-full w-full pt-44 text-center text-2xl font-semibold text-customGreen2">
        Sorry, the page you requested was not found.
      </div>
    </div>
  );
};

export { PageNotFound };
