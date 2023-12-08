import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between px-4 py-2 mb-2">
      <div className="flex mt-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-5 cursor-pointer mt-1"
          alt="sidebarLog"
          src="https://icons.veryicon.com/png/o/miscellaneous/we/sidebar-2.png"
        />
        <img
          className="h-7 ml-3 cursor-pointer"
          alt="appLogo"
          // src="https://cdn.pixabay.com/photo/2020/11/01/03/15/youtube-5702774_1280.png"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="w-[50%] flex h-9">
        <input
          type="text"
          className="w-[80%] py-1 px-5 border rounded-l-full outline-none font-md text-gray-500"
        />
        <button className="py-1 px-5 border rounded-r-full bg-gray-50">
          <img
            className="h-6"
            alt="searchIcon"
            src="https://img.freepik.com/premium-vector/search-icon-magnifying-glass-symbol-outline-icon_543062-139.jpg"
          />
        </button>
      </div>
      <div className="flex justify-between mt-1">
        <img
          className="h-6"
          alt="bellIcon"
          src="https://cdn-icons-png.flaticon.com/512/5035/5035563.png"
        />
        <img
          className="h-6 ml-4 cursor-pointer"
          alt="userIcon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
