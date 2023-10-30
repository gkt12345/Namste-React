import React, { Component } from "react";
import UserContext from "../utils/UserContext";

class Contact extends Component {
  render() {
    return (
      <div className="text-center font-bold text-xl">
        <div>Contact Us PAge</div>
        <div className="text-green-800">
          loggedUser :
          <UserContext.Consumer>
            {(data) => <span>{data.loggedUser}</span>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default Contact;
