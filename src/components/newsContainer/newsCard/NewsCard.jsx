import { Link } from "react-router-dom";

import { ImageFrame } from "../../common/imageFrame/ImageFrame";

import { truncate } from "../../../core/utils/Truncate";

import { LinkImage } from "../../../assets/svg/Svg";

const NewsCard = ({ news }) => {
  return (
    <div class="h-[32rem] w-full">
      {/* News / publication image */}
      <ImageFrame
        frameClass="relative top-1/6 mx-auto h-36 w-36 sm:h-40 sm:w-40 md:h-44 md:w-44"
        firstOrbitClass="absolute ml-3 mt-3 h-6/7 w-6/7 rounded-full border border-blue-600 md:ml-3.5 md:mt-3.5"
        secondOrbitClass="absolute h-full w-full rounded-full border border-blue-500"
        thirdOrbitClass="absolute ml-5 mt-5 h-9/12 w-9/12 overflow-hidden rounded-full bg-newsImg bg-cover bg-no-repeat md:ml-6 md:mt-6"
        image={news.image}
      />

      {/* News / publication information */}
      <div class="mx-auto h-4/6 w-64 overflow-hidden rounded-2xl bg-white text-black sm:w-72 lg:w-80">
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
