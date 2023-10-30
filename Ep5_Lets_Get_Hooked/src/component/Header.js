import { LOGO } from "../util/utils";

const Header = () => {
  return (
    <div className="headerContainer">
      <img className="logo" src={LOGO} />
      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
