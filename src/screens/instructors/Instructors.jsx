import React from "react";

import { InstructorsContainer } from "../../components/instructorsContainer/InstructorsContainer";

const Instructors = (props) => {
  return <InstructorsContainer teachersInfo={props.teachersInfo} />;
};

export { Instructors };
