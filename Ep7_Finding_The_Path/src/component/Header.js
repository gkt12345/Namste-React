import { useState } from "react";
import { LOGO } from "../util/utils";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  return (
    <div className="headerContainer">
      <img className="logo" src={LOGO} />
      <ul className="nav-items">
        <li>
          <Link to={`/`} className="linktag">
            Home
          </Link>
        </li>
        <li>
          <Link to={`/about`} className="linktag">
            About Us
          </Link>
        </li>
        <li>
          <Link to={`/contact`} className="linktag">
            Contact Us
          </Link>
        </li>
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
