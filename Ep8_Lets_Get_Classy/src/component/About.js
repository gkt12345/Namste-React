import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent componentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>This is About Class Component</h1>
        <h2>✨✨✨✨</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;

/* 
React Life Cycle With more than 1 Child component:-
  - Parent Cunstructor
  - Parent Render
      - First Child Cunstructor
      - First Child Render
      - Second Child Cunstructor
      - Second Child Render
      (Now DOM updated)
   - First Child componentDidMount 
   - First Child componentDidMount    
  -  Parent componentDidMount   
*/
