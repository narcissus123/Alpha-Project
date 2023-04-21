const truncate = (input, count) => {
  if (input.length > count && input != null && input.length != undefined) {
    input = input.substring(0, count - 1) + " ...";
  }

  return input;
};

export { truncate };
