import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// React.createElement("TagName",{Attributes},Children/Content)
// const Image = React.createElement("img", {
//   src: "https://codehubnexus.com/assets/logov2.png",
//   alt: "Placeholder Image",
// });

// const Element = React.createElement("div", { className: "container" }, [
//   React.createElement("p", {}, "Paragph"),
//   React.createElement("h1", {}, "Heading 1"),
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
