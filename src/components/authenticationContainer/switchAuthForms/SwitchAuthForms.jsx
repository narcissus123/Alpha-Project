import { Fragment, useState } from "react";

// This component allows the user to switch between sign in and sign up form.
const SwitchAuthForms = ({ handleIsSignedup }) => {
  const [signedup, setSignedup] = useState(true);

  return (
    <Fragment>
      {/* Welcome message section*/}
      <div class="relative mt-3/6 h-1/3 overflow-hidden sm:mt-2/6 sm:h-1/3">
        <div
          class={`absolute w-full ${
            signedup
              ? "right-0 transition-all duration-[2.9s]"
              : "right-[150%] transition-all duration-[2.9s]"
          }`}
        >
          <h3 class="mb-5 text-center text-2xl  font-medium text-white sm:text-3xl sm:font-semibold">
            Hello Friend!
          </h3>
          <p class="hidden text-center text-base font-medium leading-8 text-white sm:block">
            Enter your personal details and start journey with us
          </p>
          <p class="block text-center text-base font-medium leading-8 text-white sm:hidden">
            start your journey with us
          </p>
        </div>
        <div
          class={`absolute w-full ${
            signedup
              ? "left-[150%] transition-all duration-[2.9s]"
              : "left-0 transition-all duration-[2.9s]"
          }`}
        >
          <h3 class="mb-5 text-center text-3xl font-semibold text-white">
            Welcome Back!
          </h3>
          <p class="text-center text-base font-medium leading-8 text-white">
            To keep connect with us please log in with your personal info
          </p>
        </div>
      </div>
      {/* Call to action section*/}
      <div class="group relative m-auto w-4/6 overflow-hidden rounded-full border border-white py-4 text-sm hover:border-customYellow sm:text-base md:w-3/6 md:py-5 lg:w-3/7">
        <button
          class={`apearance-none absolute top-0 h-full w-full border-none py-1 text-center text-white hover:outline-none focus:outline-none group-hover:text-customYellow ${
            signedup
              ? " left-0 transition-all duration-[2s]"
              : "-left-[140%] transition-all duration-[2s]"
          }`}
          type="button"
          onClick={() => {
            setSignedup(!signedup);
            handleIsSignedup(signedup);
          }}
        >
          Sign Up
        </button>
        <button
          class={`apearance-none absolute top-0 h-full w-full border-none py-1 text-center text-white hover:outline-none focus:outline-none group-hover:text-customYellow ${
            signedup
              ? "left-[140%] transition-all duration-[2s]"
              : "left-0 transition-all duration-[2s]"
          }`}
          type="button"
          onClick={() => {
            setSignedup(!signedup);
            handleIsSignedup(signedup);
          }}
        >
          Sign In
        </button>
      </div>
    </Fragment>
  );
};

export { SwitchAuthForms };
