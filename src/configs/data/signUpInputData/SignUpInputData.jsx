const SignUpInputData = [
  {
    id: 1,
    frameClass: "mb-4 w-full md:w-4/9 lg:w-3/7",
    inputClass:
      "linear-tight focus:shadow-outline w-full appearance-none rounded-lg border border-customGreen py-1 px-1 text-gray-700 focus:outline-none",
    labelClass:
      "mb-2 hidden text-xs font-bold uppercase tracking-wide text-gray-700 md:block",
    children: "Full Name",
    placeholder: "Full Name",
    type: "text",
    name: "fullName",
    register: {
      name: "fullName",
      schema: {
        required: "This is required.",
        minLength: {
          value: 2,
          message: "Must be 2 characters or more.",
        },
        maxLength: {
          value: 30,
          message: "Must be 30 characters or less.",
        },
      },
    },
  },
  {
    id: 2,
    frameClass: "mb-4 w-full md:w-4/9 lg:w-3/7",
    inputClass:
      "linear-tight focus:shadow-outline w-full appearance-none rounded-lg border border-customGreen py-1 px-1 text-gray-700 focus:outline-none",
    labelClass:
      "mb-2 hidden text-xs font-bold uppercase tracking-wide text-gray-700 md:block",
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
    id: 3,
    frameClass: "mb-4 w-full md:w-4/9 lg:w-3/7",
    inputClass:
      "linear-tight focus:shadow-outline w-full appearance-none rounded-lg border border-customGreen py-1 px-1 text-gray-700 focus:outline-none",
    labelClass:
      "mb-2 hidden text-xs font-bold uppercase tracking-wide text-gray-700 md:block",
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
  {
    id: 4,
    frameClass: "mb-4 w-full md:w-4/9 lg:w-3/7",
    inputClass:
      "linear-tight focus:shadow-outline w-full appearance-none rounded-lg border border-customGreen py-1 px-1 text-gray-700 focus:outline-none",
    labelClass:
      "mb-2 hidden text-xs font-bold uppercase tracking-wide text-gray-700 md:block",
    children: "Phone Number",
    placeholder: "Phone Number",
    type: "number",
    name: "phoneNumber",
    register: {
      name: "phoneNumber",
      schema: {
        required: "This is required.",
        minLength: {
          value: 10,
          message: "Must be 10 digits.",
        },
        maxLength: {
          value: 10,
          message: "Must be 10 digits.",
        },
        valueAsNumber: true,
      },
    },
  },
  {
    id: 5,
    frameClass: "mb-4 w-full md:w-4/9 lg:w-3/7",
    inputClass:
      "linear-tight focus:shadow-outline w-full appearance-none rounded-lg border border-customGreen py-1 px-1 text-gray-700 focus:outline-none",
    labelClass:
      "mb-2 hidden text-xs font-bold uppercase tracking-wide text-gray-700 md:block",
    children: "National Id",
    placeholder: "National Id",
    type: "",
    name: "nationalId",
    register: {
      name: "nationalId",
      schema: {
        required: "This is required.",
        maxLength: {
          value: 10,
          message: "Must be 10 digits.",
        },
        minLength: {
          value: 10,
          message: "Must be 10 digits.",
        },
      },
    },
  },
  {
    id: 6,
    frameClass:
      " mb-4 w-full md:w-4/9 lg:w-3/7 text-xs font-bold uppercase tracking-wide text-gray-700",
    labelClass:
      "py-1.5 pl-2 md:pl-0 lg:pl-2 mb-2 flex flex-row items-center justify-start rounded-lg border border-customGreen text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500 ",
    textClass: "mb-2 hidden md:block",
    children: "Birth Date",
    placeholder: "Birth Date",
    type: "",
    name: "birthDate",
    register: {
      name: "birthDate",
      schema: {
        required: true,
      },
    },
  },
];

export { SignUpInputData };
