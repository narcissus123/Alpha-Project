import { RingLoader } from "react-spinners";

// This component displays spinner untill the server responses to application request.
const Spinner = ({ Class }) => {
  return (
    <div class={`h-[43rem] ${Class}`}>
      <RingLoader
        color="#cca349"
        cssOverride={{
          display: "block",
          margin: "150px auto",
          borderColor: "red",
        }}
        size={150}
        speedMultiplier={2}
      />
    </div>
  );
};

export { Spinner };
