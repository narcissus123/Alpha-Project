import React from "react";

export const ImageFrame = ({
  frameClass,
  firstOrbitClass,
  secondOrbitClass,
  thirdOrbitClass,
  image,
  icon,
}) => {
  return (
    <div class={frameClass}>
      <div class={firstOrbitClass}>
        <div class="relative left-1/2 bottom-2 h-3 w-3 rounded-full border bg-yellow-300"></div>
      </div>

      <div class={secondOrbitClass}>
        <div class="relative left-1/2 top-[98%] h-3 w-3 rounded-full border bg-yellow-300"></div>
      </div>

      <div class={thirdOrbitClass}>
        {image ? <img src={image} class="h-full object-cover" /> : icon}
      </div>
    </div>
  );
};
