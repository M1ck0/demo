import { Routes, Route } from "react-router-dom";

import routes from "shell/routes";

import WithAuth from "common/hoc/with-auth";

const Layout = ({ children }) => {
  return (
    <WithAuth>
      <div className="layout">
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
                exact
              />
            );
          })}
        </Routes>
      </div>
    </WithAuth>
  );
};

export default Layout;
