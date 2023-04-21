//import from node modules
//put space in between
//import our custom components
//import {functions}
//import css modules
//import image

import { Fragment, useEffect } from "react";

import { Auth } from "./auth/Auth";
import { UnAuth } from "./unAuth/UnAuth";
import { ScrollToTop } from "../core/utils/scrollToTop/ScrollToTop";

import { useAuth } from "../context/AuthContext";

const App = () => {
  const auth = useAuth();

  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);

  return (
    <Fragment>
      <ScrollToTop />
      {auth.isUser ? <Auth /> : <UnAuth />}
    </Fragment>
  );
};

export { App };
