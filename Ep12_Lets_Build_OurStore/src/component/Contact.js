import React, { Component } from "react";
import UserContext from "../utils/UserContext";

class Contact extends Component {
  render() {
    return (
      <div className="text-center font-bold text-xl">
        <h1>Contact Us Page</h1>
        <div className="text-green-800">
          loggedUser :
          <UserContext.Consumer>
            {(data) => <span>{data.loggedUser}</span>}
          </UserContext.Consumer>
        </div>
        <input
          type="text"
          placeholder="name"
          className="border px-3 py-1 mr-2 rounded-lg "
        ></input>
        <button className="my-4 border px-4 py-1 bg-slate-200 rounded-lg cursor-pointer">
          Submit
        </button>
      </div>
    );
  }
}

export default Contact;
