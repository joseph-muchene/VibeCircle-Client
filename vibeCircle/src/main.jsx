import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Router from "./Router";
import { store } from "./app/store";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
