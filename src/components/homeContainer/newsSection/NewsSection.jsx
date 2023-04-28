import { Link } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";

import { AlertMessage } from "../../common/messages/alertMessage/AlertMessage";
import { NewsCard } from "./newsCard/NewsCard";
import { Spinner } from "../../common/spinner/Spinner";

import { FilterNewsAndPub } from "../../../core/utils/Filter";
import { getNews } from "../../../core/services/api/News.api";
import { useFetch } from "../../../hooks/useFetch";

// This component renders some of the news and articles in the home page.
const NewsSection = () => {
  /* Switch between news and publications. */
  const [active, setActive] = useState(1);
  const handleToggle = (toggle) => {
    toggle != active && setActive(toggle);
  };

  /* Call API to get all news and articles.*/
  const { isLoading, data } = useFetch(getNews);
  const filteredData = FilterNewsAndPub(data);

  return (
    <Fragment>
      <div class="border-green h-auto overflow-hidden border-t border-customGreen">
        {/* Header */}
        <h3 class="py-4 text-center text-2xl font-semibold text-customGreen">
          News and Articles
        </h3>
        <div>
          {/* News / publications tabs */}
          <ul class="flex flex-row items-center justify-center py-4">
            <li class="border-r-2 border-customGreen  px-12">
              <Link
                class="text-customGreen hover:text-customGreen"
                onClick={() => handleToggle(1)}
              >
                News
              </Link>
            </li>
            <li class="px-12 ">
              <Link
                class="text-customGreen hover:text-customGreen"
                onClick={() => handleToggle(2)}
              >
                Articles
              </Link>
            </li>
          </ul>
          {/* Content */}
          <div class="h-auto bg-customBeige opacity-70">
            {isLoading ? (
              <Spinner Class="h-[43rem] pt-20" />
            ) : (
              <>
                {/* News Category */}
                {active == 1 &&
                  (filteredData[0].length !== 0
                    ? filteredData[0].map((news, index) => (
                        <NewsCard key={index} index={index} data={news} />
                      ))
                    : filteredData[1].length === 0 && (
                        <AlertMessage
                          message="No news available!"
                          Class={"text-gray-800 h-[40rem] w-screen pt-20"}
                        />
                      ))}
                {/* Article category. */}
                {active == 2 &&
                  (filteredData[1].length !== 0
                    ? filteredData[1].map((publication, index) => (
                        <NewsCard
                          key={index}
                          index={index}
                          data={publication}
                        />
                      ))
                    : filteredData[1].length === 0 && (
                        <AlertMessage
                          message="No publications available!"
                          Class={" text-gray-800 h-[40rem] w-screen pt-20"}
                        />
                      ))}
              </>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { NewsSection };
