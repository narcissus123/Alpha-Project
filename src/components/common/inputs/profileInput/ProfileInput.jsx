import React from "react";

import { ErrorMessages } from "../../messages/errorMessage/ErrorMessages";

// This component renders the label and input tags in forms.
const Input = React.forwardRef(
  (
    {
      frameClass,
      inputClass,
      labelClass,
      children,
      type,
      placeholder,
      errors,
      onChange,
      onBlur,
      name,
      index,
    },
    ref
  ) => {
    return (
      <div class={frameClass} key={index}>
        <label>
          <span class={labelClass}>{children}</span>
          <input
            class={`bg-white ${inputClass}`}
            type={type}
            placeholder={placeholder}
            ref={ref}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
          />
        </label>
        <ErrorMessages name={name} errors={errors} />
      </div>
    );
  }
);

export { Input };
