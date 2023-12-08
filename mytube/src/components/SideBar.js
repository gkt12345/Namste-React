import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early Return
  if (!isMenuOpen) return null;
  return (
    <div className="text-sm">
      <div className="flex mb-1 bg-slate-50 h-8 w-[130px] px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-300">
        <img
          className="h-5"
          alt="homeIcon"
          src="https://icons.veryicon.com/png/o/miscellaneous/advanceico/home-275.png"
        />
        <span className="ml-5 mr-6 font-medium text-gray-600">Home</span>
      </div>
      <div className="flex mb-1 bg-slate-50 h-8 px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-300">
        <img
          className="h-5"
          alt="shortsIcon"
          src="https://freelogopng.com/images/all_img/1685029929youtube-shorts-logo-black.png"
        />
        <span className="ml-6 mr-6 font-medium text-gray-600">Shorts</span>
      </div>
      <div className="flex mb-1 bg-slate-50 h-8 px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-300">
        <img
          className="h-5"
          alt="liveIcon"
          src="https://static.thenounproject.com/png/4845966-200.png"
        />
        <span className="ml-5 mr-6 font-medium text-gray-600">Live</span>
      </div>
      <div className="flex mb-1 bg-slate-50 h-8 px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-300">
        <img
          className="h-5 mr-5"
          alt="Icon"
          src="https://freepngimg.com/download/video_icon/30060-5-video-icon-free-download.png"
        />
        <span className="font-medium text-gray-600">Videos</span>
      </div>

      <h1 className="font-bold">Subsciption</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
