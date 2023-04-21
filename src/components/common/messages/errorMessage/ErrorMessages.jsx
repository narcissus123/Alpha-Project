import { ErrorMessage } from "@hookform/error-message";

// This component renders message for invalid inputs in the forms. 
const ErrorMessages = (props) => {
  return (
    <div class="bg-white rounded-lg mb-2 px-1 text-red-600 text-sm z-100">
      <ErrorMessage name={props.name} errors={props.errors}>
        {({ messages }) => {
          return (
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p key={type}>{message}</p>
            ))
          );
        }}
      </ErrorMessage>
    </div>
  );
};

export { ErrorMessages };
