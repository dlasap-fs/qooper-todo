import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/TodoStore";
import { LoadTodosAction } from "./actions/TodoActions";
import { BrowserRouter as Router } from "react-router-dom";

store.dispatch(LoadTodosAction());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
