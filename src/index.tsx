import React from "react";
import ReactDOM from "react-dom/client";
import Todo from "./Todo";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
);
