const editPanelInputData = [
  {
    frameClass: "mb-6 w-1/2 pr-5",
    inputClass:
      "mt-3 block w-full rounded-lg border border-gray-300 bg-white p-2.5 pl-4 text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500",
    labelClass:
      "mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700",
    children: "Full Name",
    placeholder: "fullName",
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
    frameClass: "mb-6 w-1/2 pr-5",
    inputClass:
      "mt-3 block w-full rounded-lg border border-gray-300 bg-white p-2.5 pl-4 text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500",
    labelClass:
      "mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700",
    children: "Email",
    placeholder: "email",
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
    frameClass: "mb-6 w-1/2 pr-5",
    inputClass:
      "mt-3 block w-full rounded-lg border border-gray-300 bg-white p-2.5 pl-4 text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500",
    labelClass:
      "mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700",
    children: "Password",
    placeholder: "password",
    type: "",
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
    frameClass: "mb-6 w-1/2 pr-5",
    inputClass:
      "mt-3 block w-full rounded-lg border border-gray-300 bg-white p-2.5 pl-4 text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500",
    labelClass:
      "mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700",
    children: "Phone Number",
    placeholder: "phoneNumber",
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
        valueAsNumber: true,
      },
    },
  },
  {
    frameClass: "mb-6 w-1/2 pr-5",
    inputClass:
      "mt-3 block w-full rounded-lg border border-gray-300 bg-white p-2.5 pl-4 text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500",
    labelClass:
      "mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700",
    children: "National Id",
    placeholder: "nationalId",
    type: "",
    name: "nationalId",
    register: {
      name: "nationalId",
      schema: {
        required: "This is required.",
      },
    },
  },
  {
    frameClass: "w-1/2 pr-5 text-xs font-bold  md:w-3/6 lg:mr-32 lg:w-1/3",
    labelClass:
      "mt-3 flex max-w-sm items-center justify-start rounded-lg border border-gray-300 p-2.5 pl-2 text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:pl-4",
    textClass: "",
    children: "Birth Date",
    placeholder: "birthDate",
    type: "",
    name: "birth",
    register: {
      name: "birthDate",
      schema: {
        required: true,
      },
    },
  },
];

export { editPanelInputData };
