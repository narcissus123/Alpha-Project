const AlertMessage = ({ message, Class }) => {
  return (
    /* Message to be rendered if no related content found. */
    <div role="alert" class={`text-center text-2xl font-semibold  ${Class}`}>
      {message}
    </div>
  );
};

export { AlertMessage };
