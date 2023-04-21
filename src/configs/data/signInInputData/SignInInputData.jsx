const SignInInputData = [
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
  {
    frameClass: "mb-12 w-full",
    inputClass:
      "linear-tight focus:shadow-outline w-full appearance-none rounded border border-customGreen py-1 px-1 text-gray-700 focus:outline-none",
    labelClass: "mb-2 text-xs font-bold uppercase tracking-wide text-gray-700",
    children: "Password",
    placeholder: "Password",
    type: "password",
    name: "password",
    register: {
      name: "password",
      schema: {
        required: "This is required.",
        minLength: {
          value: 8,
          message: "Must be 8 characters or more.",
        },
      },
    },
  },
];

export { SignInInputData };
