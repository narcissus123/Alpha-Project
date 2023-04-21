import dateFormat from "dateformat";

export function sortNews(comment, sorting) {
  return comment.sort((comment) => {
    if (sorting === "News") {
      if (comment.category === "news") {
        return 1;
      } else {
        return -1;
      }
    } else if (sorting === "Article") {
      if (comment.category === "article") {
        return 1;
      } else {
        return -1;
      }
    }
  });
}

export function sortCourses(comment, sorting) {
  return comment.sort((commentA, commentB) => {
    if (sorting === "course name") {
      return commentA.lesson.lessonName.localeCompare(
        commentB.lesson.lessonName
      );
    } else if (sorting === "start date") {
      const date1 = dateFormat(commentA.startDate, "mm/dd/yyyy");
      const [month1, day1, year1] = date1.split("/");

      const date2 = dateFormat(commentB.startDate, "mm/dd/yyyy");
      const [month2, day2, year2] = date2.split("/");

      if (year1 === year2) {
        return month1 > month2 ? 1 : -1;
      } else if (year1 > year2) {
        return 1;
      } else {
        return -1;
      }
    }
  });
}
