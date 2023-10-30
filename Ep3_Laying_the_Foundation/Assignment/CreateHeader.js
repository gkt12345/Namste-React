// Create header Component from scratch using functional component with JSX.
/* 
    # Add a Logo Left
    # Add a search bar in middle
    # Add user icon on right
    # Add CSS to make it look nice
*/

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <a href="#default" className="logo">
      🚀
    </a>
    <input className="search"></input>
    <a className="userIcon">😎</a>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
