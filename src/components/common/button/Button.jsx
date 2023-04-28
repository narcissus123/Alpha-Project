import React from "react";
import { ButtonSpinner } from "../spinner/Spinner";

export const Button = ({ type, text, Class, isLoading, disabled }) => {
  return (
    <button type={type} class={Class} disabled={disabled}>
      <div class="flex flex-row items-center justify-center text-center">
        <span class="">{text}</span>
        {isLoading ? <ButtonSpinner Class="pl-3 hover:text-white" /> : null}
      </div>
    </button>
  );
};
