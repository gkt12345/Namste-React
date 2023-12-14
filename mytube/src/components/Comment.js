import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex mt-1 p-1 bg-gray-50 hover:bg-slate-200">
      <div className="mr-2">
        <img
          className="w-10 cursor-pointer"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
      <div>
        <div className="text-sm font-bold text-gray-700"> {name} </div>
        <div className="text-sm text-gray-600">{text}</div>
      </div>
    </div>
  );
};

export default Comment;
