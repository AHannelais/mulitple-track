import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reducers from "./reducers";
import "@fortawesome/fontawesome-free/css/all.css";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
