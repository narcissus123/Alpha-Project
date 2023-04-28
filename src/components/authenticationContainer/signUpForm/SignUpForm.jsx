import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";

import { SignUpStudent } from "../../../core/services/api/Student-authentication.api";
import { CustomDatePicker } from "../../common/customDatePicker/CustomDatePicker";
import { Input } from "../../common/inputs/profileInput/ProfileInput";
import { Button } from "../../common/button/Button";

import { SignUpInputData } from "../../../configs/data/signUpInputData/SignUpInputData";

// This component renders the form for the user to sign up. It is the default form in the login page.
const SignUpForm = ({ handleMessage, setIsSignedup }) => {
  /* Rendering spinner while we are waiting for backend response. */
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      data["phoneNumber"] = JSON.stringify(data.phoneNumber);
      setIsLoading(true);
      const response = await SignUpStudent(data);

      if (response.success) {
        handleMessage(
          "You are successfully signed up! Please sign in into your acount.",
          true
        );
        setIsSignedup(true);
      } else {
        if (response.message[0].eventId === 401) {
          handleMessage("National id or email exists in our system.", false);
        } else {
          handleMessage("Something went wrong! Please try again.", false);
        }
      }
    } catch (error) {
      handleMessage(error, false);
    }
    setIsLoading(false);
  };

  return (
    <Fragment>
      <ToastContainer />
      {/* Title */}
      <h3 class="my-8  text-center text-2xl font-semibold text-customGreen md:my-12 md:text-3xl">
        Create Acount
      </h3>
      {/* Form */}
      <form
        class="m-auto flex w-9/12 flex-wrap md:mt-12 md:w-11/12 md:justify-between lg:justify-around"
        onSubmit={handleSubmit(onSubmit)}
      >
        {SignUpInputData.map((data, index) => {
          return (
            <Fragment>
              {data.name === "birthDate" ? (
                <CustomDatePicker
                  key={index}
                  name={data.name}
                  control={control}
                  rules={data.register.schema}
                  frameClass={data.frameClass}
                  labelClass={data.labelClass}
                  textClass={data.textClass}
                  children={data.children}
                  defaultValue={new Date()}
                  placeholderText="  mm / dd / yyyy"
                />
              ) : (
                <Input
                  frameClass={data.frameClass}
                  inputClass={data.inputClass}
                  labelClass={data.labelClass}
                  index={index}
                  children={data.children}
                  placeholder={data.placeholder}
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
        {/* Call to action. */}
        <div class="m-auto mt-1 w-3/6 sm:w-2/6 md:mt-2 md:w-3/12 lg:w-1/5 ">
          <Button
            type="submit"
            isLoading={isLoading}
            text="Sign up"
            Class="apearance-none w-full rounded-full border-2 border-customYellow py-1 px-2 text-center text-base text-customYellow hover:border-customYellow hover:bg-customYellow hover:text-white hover:outline-none focus:outline-none disabled:cursor-default disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-slate-200"
          />
        </div>
      </form>
    </Fragment>
  );
};

export { SignUpForm };
