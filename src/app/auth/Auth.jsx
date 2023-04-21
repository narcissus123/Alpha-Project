import { Routes, Route } from "react-router-dom";

import { Layout } from "../../components/layout/Layout";

import { privateRoutes } from "../../configs/Routes";

// This component renders all the routes for the user who is authenticated.
const Auth = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Layout header={true} footer={true} />}>
        {privateRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
            exact
          ></Route>
        ))}
      </Route>
    </Routes>
  );
};

export { Auth };
