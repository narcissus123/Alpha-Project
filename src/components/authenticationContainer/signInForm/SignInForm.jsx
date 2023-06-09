import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Input } from "../../common/inputs/profileInput/ProfileInput";
import { Button } from "../../common/button/Button";
import { ForgetPasswordModal } from "./forgetPasswordModal/ForgetPasswordModal";

import { SignInStudent } from "../../../core/services/api/Student-authentication.api";
import { getItem } from "../../../core/services/storage/Storage";
import { useAuth } from "../../../context/AuthContext";

import { SignInInputData } from "../../../configs/data/signInInputData/SignInInputData";

// This component renders the form for the user to sign in.
const SignInForm = () => {
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);

  /* Rendering spinner while we are waiting for backend response. */
  const [isLoading, setIsLoading] = useState(false);

  const history = useNavigate();
  const user = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await SignInStudent(data);

      if (response.status === 200) {
        toast.success("You are successfully signed in!");
        user.loginAsStudent(Boolean(getItem("user")) === true);
        history("/home");
      } else {
        if (response.status === 400 || response.status === 403) {
          toast.error("Email or password is wrong.");
        } else {
          toast.error("Something went wrong! Please try again.");
        }
      }
    } catch (error) {
      toast.error(error);
      // Log the error to the error reporting service.
      console.error(error);
    }
    setIsLoading(false);
  };
  return (
    <Fragment>
      <ToastContainer />
      <h3 class="my-16 text-center  text-2xl font-semibold text-customGreen md:my-12 md:text-3xl">
        Sign in to Sepehr
      </h3>
      <form
        class="mx-auto mt-16 w-9/12 md:w-8/12 lg:w-7/12"
        onSubmit={handleSubmit(onSubmit)}
      >
        {SignInInputData.map((data, index) => (
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
        ))}

        <button class="text-sm" onClick={() => setPasswordModalOpen(true)}>
          Forgot your password?{" "}
        </button>
        {passwordModalOpen && (
          <ForgetPasswordModal setPasswordModalOpen={setPasswordModalOpen} />
        )}
        {/* Call to action. */}
        <div class="m-auto mt-8 w-2/4 sm:w-2/6 md:w-3/7 lg:w-1/3">
          <Button
            type="submit"
            isLoading={isLoading}
            text="Sign in"
            Class="apearance-none w-full rounded-full border-2 border-customYellow py-1 px-2 text-center text-base text-customYellow hover:border-customYellow hover:bg-customYellow hover:text-white hover:outline-none focus:outline-none disabled:cursor-default disabled:border-gray-500 disabled:text-gray-500 disabled:hover:bg-slate-200"
          />
        </div>
      </form>
    </Fragment>
  );
};

export { SignInForm };
