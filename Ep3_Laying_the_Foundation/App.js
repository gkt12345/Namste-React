import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS) - Parcel - Babel
// JSX => Babel transpiled it to React.createElement => ReactElement => JS Object => htmlElement(render)

// react Element
const Heading = (
  <h1 className="head" tabIndex="5">
    Namste React using JSX 🚀
  </h1>
);

// react functional component: A function return JSX code
const HeadingComponent = () => (
  <div className="head">
    {Heading}
    <h1 className="heading">Namste React functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
