// Create Nested Header Element using React.createElement(h1, h2, h3 iside a div with class "title")
/*  
    # Create the same element using JSX
    # Create a functional component of the same with JSX
    # Pass attributes into the tag in JSX
    # Composition of Comonent (add component inside another)
    # {TitleComponent} vs {<TitleCompnent />} vs {<TitleCompnent></TitleCompnent>} in JSX.
*/

import React from "react";
import ReactDOM from "react-dom/client";

// Create Nested Header Element using React.createElement(h1, h2, h3 iside a div with class "title")
const ReactElement = React.createElement("div", { class: "title" }, [
  React.createElement("h1", {}, "I am h1 from React.createElement"),
  React.createElement("h2", {}, "I am h2 from React.createElement"),
  React.createElement("h3", {}, "I am h3 from React.createElement"),
]);

// Create the same element using JSX
const JSXElement = (
  <div className="title">
    <h1>I am h1 from JSX</h1>
    <h2>I am h2 from JSX</h2>
    <h3>I am h2 from JSX</h3>
  </div>
);

// Create a functional component of the same with JSX
const FunctionalComponent = () => (
  <div className="title">
    <h1>I am h1 from FunctionalComponent</h1>
    <h2>I am h2 from FunctionalComponent</h2>
    <h3>I am h2 from FunctionalComponent</h3>
  </div>
);

// Composition of Comonent (add component inside another)
// {TitleComponent} vs {<TitleCompnent />} vs {<TitleCompnent></TitleCompnent>} in JSX.
const CompositionComponent = () => (
  <div>
    <h1>This is Composition Component</h1>
    <FunctionalComponent />
    {JSXElement}
    {ReactElement}
    <FunctionalComponent></FunctionalComponent>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(ReactElement);
// root.render(JSXElement);
// root.render(<FunctionalComponent />);
root.render(<CompositionComponent />);
