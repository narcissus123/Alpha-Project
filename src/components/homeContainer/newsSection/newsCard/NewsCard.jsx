import { Link } from "react-router-dom";

import { ImageFrame } from "../../../common/imageFrame/ImageFrame";

import { truncate } from "../../../../core/utils/Truncate";
import { UseComponentIntoView } from "../../../../hooks/UseComponentIntoView";

// This component renders each individual news / article in a card.
const NewsCard = ({ data, index }) => {
  /* Animating image based on scroll position */
  const { picRef, show } = UseComponentIntoView();

  return (
    /* news / publication information and image */
    <div class="relative h-[19rem] pt-1.5 sm:h-[21rem] md:h-[25rem]">
      {/* news / publication information. Based on the index, the style of even and odd elements is different.  */}

      <div
        class={`absolute h-72 w-72 rounded-full sm:h-80 sm:w-80 md:h-96 md:w-96 ${
          index % 2 == 0
            ? "left-0 md:left-1/12 lg:left-2/12"
            : "right-0 md:right-1/12 lg:right-2/12"
        } `}
      >
        <div class="flex h-full w-full flex-col items-center gap-10 overflow-hidden rounded-full bg-white pt-10 text-base text-slate-600 shadow-customShadow sm:pt-14 md:pt-20">
          {/* Animating news / publication title  based on their index and windows scroll position.*/}

          <h2
            class={`relative border-b px-14 text-lg ${
              show.itemOne &&
              index % 2 == 0 &&
              "right-32 animate-moveForwardRight"
            } ${
              show.itemOne &&
              index % 2 != 0 &&
              "left-32 animate-moveForwardLeft"
            }`}
          >
            {data.title}
          </h2>

          <p class="whitespace-pre-line rounded-full px-2 text-center text-[13.8px]">
            {truncate(data.text, 200)}
            <Link
              class="cursor-pointer text-customGreen hover:text-customGreen"
              to={`/news/${data._id}`}
            >
              read more
            </Link>
          </p>
        </div>
      </div>

      {/* news / publication image */}
      {index % 2 == 0 ? (
        <div
          class={`absolute right-4/7 h-72 w-72 rounded-full bg-white shadow-customShadow sm:h-80 sm:w-80 md:h-96 md:w-96 ${
            show.itemOne
              ? "translate-x-[100%] transform duration-[4s]"
              : "translate-x-[30%] transform duration-[4s]"
          }`}
          ref={picRef}
        >
          <ImageFrame
            frameClass="h-full w-full rounded-full border"
            firstOrbitClass="absolute ml-6 mt-6 h-10/12 w-10/12 rounded-full border md:ml-8 md:mt-8"
            secondOrbitClass="absolute ml-3 mt-3 h-11/12 w-11/12 rounded-full border md:ml-4 md:mt-4"
            thirdOrbitClass="absolute ml-9 mt-9 h-3/4 w-3/4 overflow-hidden rounded-full border bg-newsImg bg-cover bg-no-repeat md:ml-12 md:mt-12"
            image={data.image}
          />
        </div>
      ) : (
        <div
          class={`absolute left-1/4 h-72 w-72 rounded-full bg-white shadow-customShadow sm:h-80 sm:w-80 md:h-96 md:w-96 ${
            show.itemOne
              ? "translate-x-[30%] transform duration-[4s]"
              : "translate-x-[100%] transform duration-[4s]"
          }`}
          ref={picRef}
        >
          <ImageFrame
            frameClass="h-full w-full rounded-full border"
            firstOrbitClass="absolute ml-6 mt-6 h-10/12 w-10/12 rounded-full border md:ml-8 md:mt-8"
            secondOrbitClass="absolute ml-3 mt-3 h-11/12 w-11/12 rounded-full border md:ml-4 md:mt-4"
            thirdOrbitClass="absolute ml-9 mt-9 h-3/4 w-3/4 overflow-hidden rounded-full border bg-newsImg bg-cover bg-no-repeat md:ml-12 md:mt-12"
            image={data.image}
          />
        </div>
      )}
    </div>
  );
};

export { NewsCard };
