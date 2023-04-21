import { AuthenticationContainer } from "../../components/authenticationContainer/AuthenticationContainer";

const Authentication = (props) => {
  return <AuthenticationContainer registrationInfo={props.registrationInfo} />;
};

export { Authentication };
