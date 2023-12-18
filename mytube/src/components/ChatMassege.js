import React from "react";

const ChatMassege = ({ name, massege }) => {
  return (
    <div className="flex items-center border-b hover:bg-slate-100 px-2">
      <img
        className="w-7 cursor-pointer"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />

      <div className="text-sm font-medium text-gray-700 mx-2"> {name} </div>
      <div className="text-sm text-gray-600">{massege}</div>
    </div>
  );
};

export default ChatMassege;
