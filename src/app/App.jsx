import { Fragment, useEffect } from "react";

import { Auth } from "./auth/Auth";
import { UnAuth } from "./unAuth/UnAuth";
import { ScrollToTop } from "../core/utils/scrollToTop/ScrollToTop";

import { useAuth } from "../context/AuthContext";

const App = () => {
  const user = useAuth();

  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);

  return (
    <Fragment>
      <ScrollToTop />
      {user.isStudent || user.isAdmin ? <Auth /> : <UnAuth />}
    </Fragment>
  );
};

export { App };
