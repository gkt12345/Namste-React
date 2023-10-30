import { useState } from "react";
import { LOGO } from "../util/utils";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  return (
    <div className="headerContainer">
      <img className="logo" src={LOGO} />
      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <li>
          <button
            className="login-btn"
            onClick={() =>
              loginBtn === "Login"
                ? setloginBtn("Logout")
                : setloginBtn("Login")
            }
          >
            {loginBtn}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
