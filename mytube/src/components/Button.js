import React from "react";

const Button = ({ btnName }) => {
  return (
    <div className="mr-2">
      <button className=" bg-slate-100 rounded-lg px-3 py-1 mb-2 text-sm font-medium hover:bg-slate-200 focus:bg-black focus:text-white">
        {btnName}
      </button>
    </div>
  );
};

export default Button;
