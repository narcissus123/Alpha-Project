import { Fragment } from "react";

import { AboutNews } from "./aboutNews/AboutNews";
import { NewsForm } from "./newsForm/NewsForm";
import { NewsComments } from "./courseComments/NewsComments";

import { useParams } from "react-router-dom";

// This component renders different sections of target news page. It includes information about the news, a form to submit comment
// about the news and a section to see others comments about the news.

const NewsInfoContainer = () => {
  const param = useParams();

  return (
    <Fragment>
      <AboutNews param={param} />
      <NewsForm param={param} />
      <NewsComments param={param} />
    </Fragment>
  );
};

export { NewsInfoContainer };
