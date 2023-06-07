import { Fragment } from "react";
import { useParams } from "react-router-dom";

import { AboutCourse } from "./aboutCourse/AboutCourse";
import { CommentForm } from "./commentForm/CommentForm";
import { CourseComments } from "./courseComments/CourseComments";

// This component renders different sections of target course page. It includes information about the course, a form to submit comment
// about the course and a section to see others comments about the course.

const CourseInfoContainer = () => {
  const param = useParams();

  return (
    <Fragment>
      <AboutCourse param={param} />
      <CommentForm param={param} />
      <CourseComments param={param} />
    </Fragment>
  );
};

export { CourseInfoContainer };
