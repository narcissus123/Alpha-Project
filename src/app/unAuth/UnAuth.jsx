import { Routes, Route } from "react-router-dom";

import { Layout } from "../../components/layout/Layout";

import { publicRoutes } from "../../configs/Routes";

// This component renders all the routes for the user who is not authenticated.
const UnAuth = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Layout header={true} footer={true} />}>
        {publicRoutes.map((route, index) => (
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

export { UnAuth };
