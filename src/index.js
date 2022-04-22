import React from "react";
import ReactDOM from "react-dom";

import "common/styles/normalize.css";
import "./index.css";

import App from "./shell/app";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
