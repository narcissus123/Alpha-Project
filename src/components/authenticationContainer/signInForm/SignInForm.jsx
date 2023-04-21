import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Input } from "../../common/inputs/profileInput/ProfileInput";

import { SignInStudent } from "../../../core/services/api/Student-authentication.api";
import { getItem } from "../../../core/services/storage/Storage";
import { useAuth } from "../../../context/AuthContext";

import { SignInInputData } from "../../../configs/data/signInInputData/SignInInputData";

// This component renders the form for the user to sign in.
const SignInForm = () => {
  const history = useNavigate();
  const auth = useAuth();

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
      const response = await SignInStudent(data);
      if (response.success) {
        toast.success("You are successfully signed in!");
        auth.login(Boolean(getItem("user")) === true);
        history("/home");
      } else {
        toast.error("Something went wrong! Please try again.");
      }
    } catch (error) {
      toast.error(error);
    }
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

        <div class="m-auto mt-2 w-2/4 sm:w-2/6 md:w-3/7 lg:w-1/3">
          <button
            class="apearance-none w-full rounded-full border-2 border-customYellow py-1 px-2 text-center text-base text-customYellow hover:border-customYellow hover:bg-customYellow hover:text-white hover:outline-none focus:outline-none"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export { SignInForm };
