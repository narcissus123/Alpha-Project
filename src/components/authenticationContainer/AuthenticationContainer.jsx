import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { SignInForm } from "./signInForm/SignInForm";
import { SignUpForm } from "./signUpForm/SignUpForm";
import { SwitchAuthForms } from "./switchAuthForms/SwitchAuthForms";

// This container includes the sign in form, sign up form and a component to switch between the two forms.
const AuthenticationContainer = () => {
  const [isSignedup, setIsSignedup] = useState();

  const handleIsSignedup = (value) => {
    setIsSignedup(value);
  };

  return (
    <div class="h-[42rem] border">
      <ToastContainer />
      <div class="relative m-auto mt-16 h-3/4 max-w-md overflow-hidden rounded-md border bg-white sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
        {/* Forms section */}
        <div
          class={`absolute h-full w-4/6 overflow-hidden rounded-md  ${
            isSignedup
              ? "left-0 transition-all delay-[1s] duration-[2s]"
              : "left-2/6 transition-all delay-[1s] duration-[2s]"
          }`}
        >
          {/* Sign in from section*/}
          <div
            class={`absolute h-full w-full overflow-hidden ${
              isSignedup
                ? "visible left-0 opacity-100 transition-all delay-[0.7s] duration-[1.9s]"
                : "invisible left-[340%] opacity-0 transition-all delay-[0.7s] duration-[1.9s]"
            }`}
          >
            <SignInForm
              handleMessage={(message, isSuccess) => {
                isSuccess ? toast.success(message) : toast.error(message);
              }}
            />
          </div>
          {/* Sign up from section */}
          <div
            class={`absolute h-full w-full ${
              isSignedup
                ? "invisible right-[340%] opacity-0 transition-all delay-[0.8s] duration-[1.9s]"
                : "opacity-1 visible right-0 transition-all delay-[0.8s] duration-[1.9s]"
            }`}
          >
            <SignUpForm
              handleMessage={(message, isSuccess) => {
                isSuccess ? toast.success(message) : toast.error(message);
              }}
              setIsSignedup={setIsSignedup}
            />
          </div>
        </div>
        {/* handing switch between two sign in and sign up forms*/}
        <div
          class={`200 absolute h-full w-2/6   bg-neutral-300 ${
            isSignedup
              ? "z-3 right-0 transition-all delay-[0.1s] duration-[2.9s]"
              : "z-3 right-4/6 transition-all delay-[0.1s] duration-[2.9s]"
          }`}
        >
          <SwitchAuthForms handleIsSignedup={handleIsSignedup} />
        </div>
      </div>
    </div>
  );
};

export { AuthenticationContainer };
