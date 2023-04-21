import { CourseContainer } from "../../components/programContainer/CourseContainer";

const Courses = (props) => {
  return (
    <div class="h-auto ">
      <CourseContainer programInfo={props.programInfo} />
    </div>
  );
};

export { Courses };
