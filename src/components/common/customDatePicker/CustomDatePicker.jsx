import { parseISO } from "date-fns/fp";
import { useController } from "react-hook-form";
import DatePicker from "react-datepicker";

import { CalendarIcon } from "../../../assets/svg/Svg";

// This component renders date picker in the forms (edit form and sign up form. )
const CustomDatePicker = ({
  control,
  name,
  rules,
  frameClass,
  children,
  labelClass,
  defaultValue,
  placeholderText,
  textClass,
  index,
}) => {
  const {
    field,
    formState: { isSubmitSuccessful },
  } = useController({
    name,
    control,
    rules,
    defaultValue:
      typeof defaultValue === "string" ? parseISO(defaultValue) : defaultValue,
  });

  return (
    <div class={frameClass} key={index}>
      <span class={textClass}>{children}</span>
      <div class={labelClass}>
        <CalendarIcon />
        <DatePicker
          placeholderText={placeholderText}
          onChange={(date) => {
            field.onChange(date);
          }}
          selected={field.value}
        />
      </div>
    </div>
  );
};

export { CustomDatePicker };
