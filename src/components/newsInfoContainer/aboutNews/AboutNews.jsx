import { Fragment, useState, useEffect, useLayoutEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";

import { getNewsById } from "../../../core/services/api/News.api";

import { NewsImage } from "./newsImage/NewsImage";

// This component renders the information about the target news.
const AboutNews = ({ param }) => {
  /* Saving news information sent from backend. */
  const [newsInfo, setNewsInfo] = useState([]);

  const getNews = async () => {
    try {
      const data = await getNewsById(param.newsId);
      if (data.success) {
        setNewsInfo(data.result);
      }
    } catch (error) {
      toast.error("Sorry. Information about this news is not available.");
    }
  };

  /* Call API to get all news.*/
  useEffect(() => {
    getNews();
  }, []);

  /* Animating image based on scroll position */
  const [show, doShow] = useState({ itemOne: false });
  const picRef = useRef(null);

  useLayoutEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;
    //added to reduce redundancy
    const divPos = topPos(picRef.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (divPos < scrollPos) {
        doShow((state) => ({ ...state, itemOne: true }));
      } else if (divPos > scrollPos) {
        doShow((state) => ({ ...state, itemOne: false }));
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Fragment>
      <ToastContainer />

      <div class="flex h-auto w-screen flex-row justify-center overflow-hidden border-t bg-white py-12">
        <ul class="flex h-full w-1/2  flex-col justify-center pl-10 text-base md:text-lg">
          <li>
            <span class="block text-4xl md:text-[2.75rem]">
              {newsInfo.title}
            </span>
          </li>
          <li>
            <hr class="my-5 w-1/2 border border-slate-400"></hr>
          </li>
          <li>
            <span>Category: </span>
            <span class="text-slate-500">{newsInfo.category}</span>
          </li>
          <li class="mb-3">
            <span>News: </span>
            <p class="h-[32rem] overflow-y-auto text-slate-500  ">
              {newsInfo.text}
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
          <NewsImage />
        </div>
      </div>
    </Fragment>
  );
};

export { AboutNews };
