import React from "react";
import ReactDOM from "react-dom";

import "common/styles/normalize.css";
import "./index.css";

import App from "./shell/app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
