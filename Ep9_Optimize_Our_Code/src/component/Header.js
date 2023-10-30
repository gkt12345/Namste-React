import { useState } from "react";
import { LOGO } from "../util/utils";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="headerContainer">
      <img className="logo" src={LOGO} />
      <ul className="nav-items">
        <li>Status:{onlineStatus ? "🟢" : "🔴"}</li>
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
          <Link to={`/grocery`} className="linktag">
            Grocery
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
