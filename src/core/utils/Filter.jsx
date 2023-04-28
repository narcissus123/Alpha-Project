function FilterValidComments(comments, param) {
  const verifiedComments = comments.filter(
    (comment) => comment.verified == true && comment.postId == param
  );

  return verifiedComments;
}

function FilterNewsAndPub(data) {
  let news = data.filter((item) => item.category == "news");
  news && (news = news.slice(0, 2));
  let publications = data.filter((item) => item.category == "article");
  publications && (publications = publications.slice(0, 2));
  return [news, publications];
}

function filter(allData, searchedWord, callBackFunc) {
  let filteredData;
  if (searchedWord === "") {
    filteredData = allData;
  } else {
    filteredData = allData.filter((item) => callBackFunc(item, searchedWord));
  }

  return filteredData;
}

function NewsSearchBasedFilter(item, searchedWord) {
  return item.title.toLowerCase().includes(searchedWord.toLowerCase());
}

function CourseSearchBasedFilter(item, searchedCourse) {
  return item.title.toLowerCase().includes(searchedCourse.toLowerCase());
}

function InstructorSearchBasedFilter(item, searchedWord) {
  return item.fullName.toLowerCase().includes(searchedWord.toLowerCase());
}

export {
  FilterValidComments,
  FilterNewsAndPub,
  CourseSearchBasedFilter,
  InstructorSearchBasedFilter,
  NewsSearchBasedFilter,
  filter,
};
