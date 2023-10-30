import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(" Child constructor");
  }

  // mounting face Api calls
  async componentDidMount() {
    console.log(" Child componentDidMount");
    const data = await fetch(" https://api.github.com/users/gkt12345");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });

    //
    this.timer = setInterval(() => {
      console.log("setInterval");
    }, 2000);
  }

  // updating
  componentDidUpdate() {
    console.log("componentdidUpdata");
  }

  // Unmounting or clearing things
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount called");
  }

  render() {
    const { name, location } = this.state.userInfo;
    console.log(" Child Render");
    return (
      <div className="use-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact trivedig319@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
