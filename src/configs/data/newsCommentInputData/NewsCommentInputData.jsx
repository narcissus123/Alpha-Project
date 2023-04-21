const SignInInputData = [
  {
    frameClass:
      "mb-4 max-w-lg rounded-lg rounded-t-lg border border-gray-200 bg-white py-2 px-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl ",
    inputClass:
      "mb-2 w-1/3 rounded-lg border border-gray-200 py-1.5 px-2 text-gray-900 focus:outline-none focus:ring-0",
    textAreaClass:
      "-mb-2 w-full border-0 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0",
    textAreaId: "comment",
    textAreaRows: "6",
    textAreaPlaceholder: "Write a comment...",
    inputPlaceholder: "Username",
    usernameRegister: {
      name: "userName",
      schema: {
        required: "This is required.",
      },
    },
    commentRegister: {
      name: "comment",
      schema: {
        required: "This is required.",
        max: {
          value: 200,
          message: "Comment cannot be more than 200 words long.",
        },
      },
    },
  },
  {
    frameClass: "mb-4 w-full",
    inputClass:
      "linear-tight focus:shadow-outline w-full appearance-none rounded border border-customGreen py-1 px-1 text-gray-700 focus:outline-none",
    labelClass: "mb-2 text-xs font-bold uppercase tracking-wide text-gray-700",
    children: "Email",
    placeholder: "Email",
    type: "email",
    name: "email",
    register: {
      name: "email",
      schema: {
        required: "This is required.",
      },
    },
  },
];

export { SignInInputData };
