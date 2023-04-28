import { useState } from "react";

import { DownArrow, UpArrowImage } from "../../../assets/svg/Svg";

// This component renders sort dropdown.
const Sort = ({ setSortPathName, category, sortPlaceHolder }) => {
  const [show, setShow] = useState(false);

  return (
    <div class="text-grey-500 relative text-gray-600">
      <div class="height-auto flex flex-wrap items-center rounded-md border bg-white">
        <span class="py-1 px-3">{sortPlaceHolder}</span>
        {!show ? (
          <DownArrow
            Class="h-full cursor-pointer rounded-r-md hover:bg-slate-200"
            setShow={setShow}
          />
        ) : (
          <UpArrowImage
            Class="h-full cursor-pointer rounded-r-md hover:bg-slate-200"
            setShow={setShow}
          />
        )}
      </div>
      {show && (
        <ul class=" height-auto shadow-xl absolute top-10 left-0 z-50 w-full list-none overflow-hidden rounded-lg border bg-white p-0 shadow-slate-700">
          {category.map((item, index) => (
            <li
              key={index}
              class="cursor-pointer border-b py-1 px-3 hover:bg-slate-100"
              onClick={() => setSortPathName(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Sort };
