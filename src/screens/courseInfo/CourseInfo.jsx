import { CourseInfoContainer } from "../../components/courseInfoContainer/CourseInfoContainer";

const CourseInfo = (props) => {
  return (
    <CourseInfoContainer
      programInfo={props.programInfo}
      comments={props.comments}
    />
  );
};

export { CourseInfo };
