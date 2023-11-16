import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div className="grid h-screen place-items-center">
      <div>
        <div className="font-bold text-lg">Opps Something Went Wrong!!!</div>
        <div className="text-red-700">
          {" "}
          {err.statusText} : {err.status}
        </div>
        <p className="text-xs">{err.data}</p>
        <button className="mt-3 px-3 border rounded-md bg-green-700 text-white hover:shadow-md hover:bg-green-600 duration-500 hover:ease-out">
          <Link to={"/"}>Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
