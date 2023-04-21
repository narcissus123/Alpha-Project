import { Link } from "react-router-dom";

import { truncate } from "../../../core/utils/Truncate";

import { LinkImage } from "../../../assets/svg/Svg";

const NewsCard = ({ news }) => {
  return (
    <div class="h-[32rem] w-full">
      {/* News / publication image */}
      <div class="relative top-1/6 mx-auto h-36 w-36 sm:h-40 sm:w-40 md:h-44 md:w-44">
        <div class="absolute ml-3 mt-3 h-6/7 w-6/7 rounded-full border border-blue-700 md:ml-3.5 md:mt-3.5">
          <div class="relative left-1/2 bottom-2 h-3 w-3 rounded-full border bg-yellow-300"></div>
        </div>
        <div class="absolute h-full w-full rounded-full border border-blue-800">
          <div class="relative left-1/2 top-[98%] h-3 w-3 rounded-full border bg-yellow-300"></div>
        </div>
        <div class="absolute ml-5 mt-5 h-9/12 w-9/12 rounded-full bg-newsImg bg-cover bg-no-repeat md:ml-6 md:mt-6"></div>
      </div>

      {/* News / publication information */}
      <div class="mx-auto h-4/6 w-64 overflow-hidden rounded-2xl bg-white sm:w-72 lg:w-80">
        <div class="h-1/4 rounded-t-3xl" />

        <div class="group h-3/4 rounded-b-2xl sm:text-base md:text-lg">
          <div class="text-center">
            <span class="text-lg font-bold leading-10">{news.title}</span>
          </div>
          <div class="h-40 py-2 px-3 text-left">
            <p class="whitespace-wrap h-full">{truncate(news.text, 150)}</p>
          </div>
          <div class="flex h-auto flex-wrap items-center justify-between border-t px-4 text-left">
            <span class="text-base font-bold leading-10">Read more</span>
            <Link to={`/news/${news._id}`}>
              <LinkImage />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewsCard };
