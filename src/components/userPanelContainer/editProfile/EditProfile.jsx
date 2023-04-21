import { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

import { parseISO } from "date-fns/fp";

import dateFormat from "dateformat";
import { useNavigate } from "react-router-dom";
import { editPanelInputData } from "../../../configs/data/editPanelInputData/EditPanelInputData";
import { Input } from "../../common/inputs/profileInput/ProfileInput";
import { CustomDatePicker } from "../../common/customDatePicker/CustomDatePicker";
import { getItem, setItem } from "../../../core/services/storage/Storage";

import { updateStudentInfo } from "../../../core/services/api/ManageStudent.api";
import { useAuth } from "../../../context/AuthContext";

const EditProfile = () => {
  const history = useNavigate();
  let info = JSON.parse(getItem("user"));
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState,
    formState: { errors, dirtyFields, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      fullName: info.fullName,
      email: info.email,
      password: "123456789",
      birthDate: info.birthDate,
      phoneNumber: parseInt(info.phoneNumber),
      nationalId: info.nationalId,
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      isSubmitSuccessful
        ? toast.success("Form is submitted successfully.")
        : "";
      reset(info);
      reset({ birth: parseISO(info.birthDate) });
    }
  }, [formState, reset, isSubmitSuccessful]);

  const onSubmit = async (data) => {
    try {
      console.log("getItem(user)._id: ", getItem("user"));
      const birthDate = data.birth;
      const { birth, password, ...formatedData } = {
        ...data,
        birthDate,
        profile: "",
      };
      console.log("formatedData: ", formatedData);
      console.log("getItem(token): ", getItem("token"));
      //  setItem("user", JSON.stringify({ ...info, ...formatedData }));
      //  console.log(info._id);
      /* const newObj = { ...getItem, ...formatedData };
      console.log(newObj); */
      /* console.log(
        "JSON.stringify({ ...getItem, ...formatedData }): ",
        JSON.stringify()
      ); */

      console.log("getItem(user)._id: ", getItem("user"));
      const response = await updateStudentInfo(
        info._id,
        JSON.stringify({ ...getItem, ...formatedData })
      );
      console.log("response edit: ", response);
      if (response.success) {
        // setItem({ ...info, ...formatedData  }); //should I get from the backend or is it okay to change the setItem like this?
        console.log("response edit: ", response);
        toast.success("Your information has been updated successfully!");
        // auth.login(Boolean(getItem("user")) === true);
        // console.log("isUser edit: ", auth.isUser);
        // console.log("getItem edit: ", getItem("user"));

        //history("/logout");
      }
    } catch (error) {
      toast.error(error);
      toast.error("Sorry. Something went wrong. Please try again.");
    }
  };

  return (
    <Fragment>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        class=" mx-auto mt-1/7 flex max-w-md flex-wrap justify-between md:max-w-lg lg:max-w-3xl"
      >
        {editPanelInputData.map((data, index) => {
          return (
            <Fragment>
              {data.name === "birth" ? (
                <CustomDatePicker
                  index={index}
                  name={data.name}
                  control={control}
                  rules={data.register.schema}
                  frameClass={data.frameClass}
                  labelClass={data.labelClass}
                  children={data.children}
                  defaultValue={info[data.placeholder]}
                  placeholderText={dateFormat(
                    info[data.placeholder],
                    "mm/dd/yyyy"
                  )}
                  reset={reset}
                  textClass={data.textClass}
                />
              ) : (
                <Input
                  frameClass={data.frameClass}
                  inputClass={data.inputClass}
                  labelClass={data.labelClass}
                  index={index}
                  children={data.children}
                  placeholder={info[data.placeholder]}
                  type={data.type}
                  errors={errors}
                  name={data.name}
                  {...(register &&
                    register(data.register.name, {
                      ...data.register.schema,
                    }))}
                />
              )}
            </Fragment>
          );
        })}

        <div class="m-auto mt-8 w-1/4 lg:w-1/6">
          <button
            class={`apearance-none w-full cursor-pointer rounded-full border-2 border-customYellow py-1  px-2 text-center text-base text-customYellow hover:border-customYellow 
             hover:bg-customYellow hover:text-white
              hover:outline-none focus:outline-none disabled:cursor-default disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-slate-200 
           `}
            type="submit"
            disabled={Object.keys(dirtyFields).length === 0}
          >
            Edit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export { EditProfile };

// import { Fragment, useEffect } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { toast, ToastContainer } from "react-toastify";
// import DatePicker from "react-datepicker";

// import dateFormat from "dateformat";
// import { parseISO } from "date-fns/fp";
// import "react-datepicker/dist/react-datepicker.css";
// import { CalendarIcon } from "../../../assets/svg/Svg";

// import { editPanelInputData } from "../../../configs/data/editPanelInputData/EditPanelInputData";
// import { Input } from "../../common/inputs/profileInput/ProfileInput";
// import { CustomDatePicker } from "../../common/customDatePicker/CustomDatePicker";
// import { getItem, setItem } from "../../../core/services/storage/Storage";

// import { updateStudentInfo } from "../../../core/services/api/ManageStudent.api";

// const EditProfile = () => {
//   let info = JSON.parse(getItem("user"));

//   const {
//     register,
//     handleSubmit,
//     control,
//     reset,
//     formState,
//     formState: { errors, dirtyFields, isSubmitSuccessful },
//   } = useForm({
//     defaultValues: {
//       fullName: info.fullName,
//       email: info.email,
//       password: "123456789",
//       birthDate: info.birthDate,
//       phoneNumber: parseInt(info.phoneNumber),
//       nationalId: info.nationalId,
//     },
//   });

//   useEffect(() => {
//     if (formState.isSubmitSuccessful) {
//       isSubmitSuccessful
//         ? toast.success("Form is submitted successfully.")
//         : "";
//       reset(JSON.parse(getItem("user")));
//       reset({ birth: parseISO(JSON.parse(getItem("user")).birthDate) });
//     }
//   }, [formState, reset, isSubmitSuccessful]);

//   const onSubmit = async (data) => {
//     try {
//       const birthDate = data.birth;
//       const { birth, ...formatedData } = { ...data, birthDate };

//       setItem("user", JSON.stringify({ ...getItem, ...formatedData }));

//       /*  const response = await updateStudentInfo(
//         getItem("token"),
//         JSON.stringify({ ...getItem, ...formatedData })
//       );
//       if (response.success) {
//         //    setItem({ ...getItem, data }); //should I get from the backend or is it okay to change the setItem like this?
//         toast.success("Your information has been updated successfully!");
//       } */
//     } catch (error) {
//       toast.error("Sorry. Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <Fragment>
//       <ToastContainer />
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         class=" mx-auto mt-1/7 flex max-w-md flex-wrap justify-between md:max-w-lg lg:max-w-3xl"
//       >
//         {editPanelInputData.map((data, index) => {
//           return (
//             <Fragment>
//               {data.name === "birthDate" ? (
//                 <div
//                   key={index}
//                   class=" w-1/2 pr-5 text-xs font-bold  md:w-3/6 lg:mr-32 lg:w-1/3"
//                 >
//                   {data.children}
//                   <div class="mt-3 flex max-w-sm items-center justify-start rounded-lg border border-gray-300 p-2.5 pl-2 text-sm font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:pl-4">
//                     <CalendarIcon />
//                     <Controller
//                       control={control}
//                       name="birth"
//                       defaultValue={parseISO(info[data.placeholder])}
//                       render={({ field }) => (
//                         <DatePicker
//                           placeholderText={dateFormat(
//                             info[data.placeholder],
//                             "mm/dd/yyyy"
//                           )}
//                           onChange={(date) => {
//                             field.onChange(date);
//                           }}
//                           selected={field.value}
//                         />
//                       )}
//                     />
//                   </div>
//                 </div>
//               ) : (
//                 <Input
//                   frameClass={data.frameClass}
//                   inputClass={data.inputClass}
//                   labelClass={data.labelClass}
//                   key={index}
//                   children={data.children}
//                   placeholder={info[data.placeholder]}
//                   type={data.type}
//                   errors={errors}
//                   name={data.name}
//                   {...(register &&
//                     register(data.register.name, {
//                       ...data.register.schema,
//                     }))}
//                 />
//               )}
//             </Fragment>
//           );
//         })}

//         <div class="m-auto mt-8 w-1/4 lg:w-1/6">
//           <button
//             class={`apearance-none w-full cursor-pointer rounded-full border-2 border-customYellow py-1  px-2 text-center text-base text-customYellow hover:border-customYellow
//              hover:bg-customYellow hover:text-white
//               hover:outline-none focus:outline-none disabled:cursor-default disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-slate-200
//            `}
//             type="submit"
//             disabled={Object.keys(dirtyFields).length === 0}
//             onClick={() => {
//               //isSubmitting && toast("Form is submitting.");
//             }}
//           >
//             Edit
//           </button>
//         </div>
//       </form>
//     </Fragment>
//   );
// };

// export { EditProfile };

///////////////////// /////////////////////      ////////////////////latest

//////////////////////////////////////// last version
//console.log("JSON.parse(getItem(user)2: ", JSON.parse(getItem("user")));
//import DatePicker, { registerLocale } from "react-datepicker";
/* import { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

import { editPanelInputData } from "../../../configs/data/editPanelInputData/EditPanelInputData";
import { Input } from "../../common/inputs/profileInput/ProfileInput";
import { getItem } from "../../../core/services/storage/Storage";

const EditProfile = () => {
  let info = JSON.parse(getItem("user"));
  const [userInfo, setUserInfo] = useState(info || {});

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: userInfo.fullName,
      email: userInfo.email,
      password: "123456789",
      birthDate: userInfo.birthDate,
      phoneNumber: userInfo.phoneNumber,
      nationalId: userInfo.nationalId,
    },
  });
  
  console.log("isDirty: ", isDirty);
  const onSubmit = (data) => {
    console.log("hello");
    console.log("data", data);
  };
  let name = "fullName";
  return (
    <Fragment>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        class=" mx-auto mt-1/7 flex max-w-md flex-wrap justify-between md:max-w-lg lg:max-w-3xl"
      >
        {editPanelInputData.map((data, index) => {
          try {
            const register = {
              ...(register &&
                register(data.register.name, {
                  ...data.register.schema,
                })),
            };
          } catch (error) {
            console.log(error);
          }

          return (
            <Input
              key={index}
              htmlFor={data.htmlFor}
              children={data.children}
              id={data.id}
              placeholder={userInfo[data.placeholder]}
              type={data.type}
              errors={errors}
              name={data.name}
              inputOnChange={register.onChange}
              inputRef={register.ref}
              inputOnBlur={register.onBlur}
              inputName={register.name}
            />
          );
        })}

        <div class="m-auto mt-8 w-1/6">
          <button
            class={`apearance-none w-full cursor-pointer rounded-full border-2 border-customYellow py-1  px-2 text-center text-base text-customYellow hover:border-customYellow 
             hover:bg-customYellow hover:text-white
              hover:outline-none focus:outline-none disabled:cursor-default disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-slate-200
           `}
            type="submit"
            onClick={() => {
              isSubmitting && toast("Form is submitting.");
            }}
          >
            Edit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export { EditProfile }; */

//////////////////////////////////////////

/* import { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

import { ErrorMessages } from "../../common/messages/errorMessage/ErrorMessages";

import { Input } from "../../common/inputs/profileInput/ProfileInput";
import { getItem } from "../../../core/services/storage/Storage";

const EditProfile = () => {
  let info = JSON.parse(getItem("user"));
  const [userInfo, setUserInfo] = useState(info || {});

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: userInfo.fullName,
      email: userInfo.email,
      password: userInfo.password,
      birthDate: userInfo.birthDate,
      phoneNumber: userInfo.phoneNumber,
      nationalId: userInfo.nationalId,
    },
  });

  const onSubmit = (data) => {};
  let name = "fullName";
  return (
    <Fragment>
      <ToastContainer />

      <form
        onSubmit={handleSubmit(onSubmit)}
        class=" mx-auto mt-1/7 flex max-w-md flex-wrap justify-between md:max-w-lg lg:max-w-3xl"
      >
        <Input
          htmlFor="fullName"
          children="Full Name"
          inputId="fullName"
          placeholder={userInfo[name]}
          type="text"
          errors={errors}
          name="fullName"
          {...register("fullName", {
            required: "This is required.",
            minLength: { value: 2, message: "Must be 2 characters or more." },
            maxLength: {
              value: 30,
              message: "Must be 30 characters or less.",
            },
          })}
        />
        <Input
          htmlFor="email"
          children="Email"
          inputId="email"
          placeholder={userInfo.email}
          type="email"
          errors={errors}
          name="email"
          {...register("email", { required: "This is required." })}
        />
        <Input
          htmlFor="password"
          children="Password"
          inputId="password"
          placeholder={userInfo.password}
          type="password"
          errors={errors}
          name="password"
          {...register("password", {
            required: "This is required.",
            minLength: { value: 8, message: "Must be 8 characters or more." },
          })}
        />
        <Input
          htmlFor="birthDate"
          children="Birth Date"
          inputId="birthDate"
          placeholder={userInfo.birthDate}
          type="date"
          errors={errors}
          name="birthDate"
          pattern="\d{4}-\d{2}-\d{2}"
          {...register("birthDate", {
            required: "This is required.",
            valueAsDate: "true",
          })}
        />
        <Input
          htmlFor="phone"
          children="Phone Number"
          inputId="phone"
          placeholder={userInfo.phoneNumber}
          type="tel"
          errors={errors}
          name="phoneNumber"
          {...register("phoneNumber", {
            required: "This is required.",
            minLength: { value: 10, message: "Must be 10 digits." },
          })}
        />
        <Input
          htmlFor="nationalId"
          children="National Id"
          inputId="nationalId"
          placeholder={userInfo.nationalId}
          type="number"
          errors={errors}
          name="nationalId"
          {...register("nationalId", { required: "This is required." })}
        />
        <div class="m-auto mt-8 w-1/6">
          <button
            class={`apearance-none w-full cursor-pointer rounded-full border-2 border-customYellow py-1  px-2 text-center text-base text-customYellow hover:border-customYellow 
             hover:bg-customYellow hover:text-white
              hover:outline-none focus:outline-none disabled:cursor-default disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-slate-200
           `}
            type="submit"
            disabled={!isDirty}
            onClick={() => {
              isSubmitting && toast("Form is submitting.");
            }}
          >
            Edit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export { EditProfile };
 */
