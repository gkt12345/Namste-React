import React from "react";
import ReactDOM from "react-dom/client";
// client is for fix warning

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement(
      "h1",
      { className: "nestedChild" },
      "I am First Child "
    ),
    React.createElement(
      "h2",
      { className: "nestedChild" },
      "I am Second Child "
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { className: "nestedChild" }, "I am First Child"),

    React.createElement(
      "h2",
      { className: "nestedChild" },
      "I am Second Child "
    ),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
