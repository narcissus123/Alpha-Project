function FilterValidComments(comments, param) {
  const verifiedComments = comments.filter(
    (comment) => comment.verified == true && comment.postId == param
  );

  return verifiedComments;
}

function FilterNewsAndPub(data) {
  let news = data.filter((item) => item.category == "news");
  news && (news = news.slice(0, 2));
  let publications = data.filter((item) => item.category == "publications");
  publications && (publications = publications.slice(0, 2));
  return [news, publications];
}

function CourseSearchBasedFilter(allCourses, searchedCourse) {
  let filteredData;
  if (searchedCourse === "") {
    filteredData = allCourses;
  } else {
    filteredData = allCourses.filter((courseItem) =>
      courseItem.title.toLowerCase().includes(searchedCourse.toLowerCase())
    );
  }

  return filteredData;
}

function NewsSearchBasedFilter(allNews, searchedWord) {
  let filteredData;
  if (searchedWord === "") {
    filteredData = allNews;
  } else {
    filteredData = allNews.filter((news) =>
      news.title.toLowerCase().includes(searchedWord.toLowerCase())
    );
  }

  return filteredData;
}

function InstructorSearchBasedFilter(allInstructors, searchedWord) {
  let filteredData;
  if (searchedWord === "") {
    filteredData = allInstructors;
  } else {
    filteredData = allInstructors.filter((instructor) =>
      instructor.fullName.toLowerCase().includes(searchedWord.toLowerCase())
    );
  }

  return filteredData;
}

export {
  FilterValidComments,
  FilterNewsAndPub,
  CourseSearchBasedFilter,
  InstructorSearchBasedFilter,
  NewsSearchBasedFilter,
};
