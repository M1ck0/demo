import { Routes, Route } from "react-router-dom";

import Header from "./components/header";

import routes from "shell/routes";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
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
  );
};

export default Layout;
