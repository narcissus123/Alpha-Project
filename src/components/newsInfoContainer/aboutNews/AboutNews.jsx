import { Fragment } from "react";
import { ToastContainer } from "react-toastify";

import { ImageFrame } from "../../common/imageFrame/ImageFrame";

import { getNewsById } from "../../../core/services/api/News.api";
import { useFetch } from "../../../hooks/useFetch";
import { UseComponentIntoView } from "../../../hooks/UseComponentIntoView";

// This component renders the information about the target news.
const AboutNews = ({ param }) => {
  /* Call API to get related news.*/
  const { isLoading, data } = useFetch(getNewsById, param.newsId);

  /* Animating image based on scroll position */
  const { picRef, show } = UseComponentIntoView(isLoading);

  return (
    <Fragment>
      <ToastContainer />
      {isLoading ? (
        <p class="h-[40rem] bg-white pt-48 text-center text-3xl font-semibold transition-all duration-700">
          Loading...
        </p>
      ) : (
        <div class="flex h-auto w-screen flex-row justify-center overflow-hidden border-t bg-white py-12">
          <ul class="flex h-full w-1/2  flex-col justify-center pl-10 text-base md:text-lg">
            <li>
              <span class="block text-4xl md:text-[2.75rem]">{data.title}</span>
            </li>
            <li>
              <hr class="my-5 w-1/2 border border-slate-400"></hr>
            </li>
            <li>
              <span>Category: </span>
              <span class="text-slate-500">{data.category}</span>
            </li>
            <li class="mb-3">
              <span>News: </span>
              <p class="h-[32rem] overflow-y-auto text-slate-500  ">
                {data.text}
              </p>
            </li>
          </ul>

          {/* Image section */}
          <div
            class={`mx-auto h-auto w-1/2 opacity-100 ${
              show.itemOne
                ? "translate-x-16 transform duration-[4s]"
                : "translate-x-[100%] transform duration-[4s]"
            }`}
            ref={picRef}
          >
            <ImageFrame
              frameClass="relative right-0 top-28 h-[30rem] w-[30rem] rounded-full border lg:top-20 lg:h-[35rem] lg:w-[35rem]"
              firstOrbitClass="absolute ml-8 mt-8 h-6/7 w-6/7 rounded-full border border-slate-400 lg:ml-10 lg:mt-10 "
              secondOrbitClass="absolute h-full w-full rounded-full border border-slate-400"
              thirdOrbitClass="absolute ml-16 mt-16 h-5/7 w-5/7 overflow-hidden rounded-full border bg-enrollImg bg-cover bg-no-repeat lg:ml-20 lg:mt-20 lg:border-slate-400"
              image={data.image}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export { AboutNews };
