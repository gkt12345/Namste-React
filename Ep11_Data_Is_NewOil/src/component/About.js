import React, { useContext } from "react";
import { APP_IMG } from "../utils/pathOfAll";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedUser } = useContext(UserContext);

  return (
    <div className=" h-[500px] flex justify-center mt-[30px]">
      <div className="flex justify-between w-[800px] h-[400px] p-10 text-white bg-gray-500 rounded-lg shadow-lg shadow-gray-500">
        <div>
          <div class=" text-4xl font-bold">About US</div>
          <div>Fastest Delivery In Delhi </div>
          <div>Fastest Delivery In Delhi </div>
          <div>{loggedUser}</div>
        </div>
        <div className="h-[250px] w-[300px] mt-auto shadow-md shadow-orange-100 rounded-xl">
          <img className="rounded-xl" src={APP_IMG} />
        </div>
      </div>
    </div>
  );
};

export default About;
