import React from "react";
import { resCard_IMG_URL } from "../utils/pathOfAll";

const ResCard = (props) => {
  const { name, avgRating, cloudinaryImageId, costForTwo, cuisines, sla } =
    props.resInfo;

  return (
    <div className="h-80 w-[180px] md:w-[300px] mb-2 md:m-5 p-2 border-2 border-white bg-rose-50 rounded-lg cursor-pointer hover:border-2 hover:w-[300px] hover:shadow-lg hover:border-gray-300">
      <div className="h-[65%] overflow-hidden">
        <img
          className="rounded-md h-[100%] w-[100%]"
          alt="resImg"
          src={resCard_IMG_URL + cloudinaryImageId}
        />
      </div>
      <div className="flex justify-between mt-3 h-7 overflow-hidden">
        <div className="text-md font-bold w-[70%] ">{name}</div>
        {avgRating > 4 ? (
          <div className="bg-green-950 text-white rounded-md w-12 text-sm font-bold text-center pt-[2px]">
            {avgRating}*
          </div>
        ) : (
          <div className="bg-red-500 text-white rounded-md w-12 text-sm font-bold text-center pt-[2px]">
            {avgRating}*
          </div>
        )}
      </div>
      <div className="flex justify-between mt-1 h-5 overflow-hidden">
        <div className="w-[72%]">{cuisines.join(", ")}</div>
        <div className="w-[26%] text-xs font-bold pt-1">{costForTwo}</div>
      </div>
      <div className="text-end mt-1">{sla.slaString}</div>
    </div>
  );
};

export default ResCard;
