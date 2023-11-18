import { LOGO } from "../utils/pathOfAll";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState } from "react";
import Login from "./Login";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  // selector- subscibing to the store
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div className="h-24 border-2 bg-gray-50 border-gray-10 mb-4 flex justify-between items-center shadow-md">
      <div>
        <img className="w-28 rounded-lg" alt="logo" src={LOGO} />
      </div>
      <div className="w-4/5  lg:w-3/5 text-md font-bold text-gray-700 cursor-pointer">
        <ul className="flex justify-between line-clamp-1">
          <li>Status: {onlineStatus ? "🟢" : "🔴"} </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>
            <button onClick={() => setIsOpen(true)}>Login</button>
            {isOpen && (
              <Login isOpen={isOpen} onClose={() => setIsOpen(false)} />
            )}
          </li>
          <li>
            <Link to={"/cart"} className="w-14 inline-flex">
              <img
                className="w-8 rounded-sm"
                alt="cartLogo"
                src="https://png.pngtree.com/png-clipart/20190920/original/pngtree-shopping-cart-convenient-icon-png-image_4637407.jpg"
              />
              <span className="text-sm font-medium">{cartItems.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
