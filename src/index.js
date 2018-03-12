import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import App from "./App";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(
  // <HashRouter>
  <Provider store={store}>
    <App />
  </Provider>,
  // </HashRouter>
  document.getElementById("root")
);
registerServiceWorker();
