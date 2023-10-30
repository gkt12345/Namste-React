import React from "react";
import { APP_IMG } from "../utils/pathOfAll";

const About = () => {
  return (
    <div className=" h-[500px] flex justify-center mt-[30px]">
      <div className="w-[800px] h-[400px] p-10 text-white bg-gray-500 rounded-lg shadow-lg shadow-violet-800">
        <div class=" text-4xl font-bold">About US</div>
        <div>Fastest Delivery In Delhi </div>
        <div>Fastest Delivery In Delhi </div>
        <div>Fastest Delivery In Delhi </div>
        <div className="h-[250px] w-[300px]  border fixed bottom-[110px] right-[5%] md:right-[25%] shadow-md shadow-violet-800">
          <img src={APP_IMG} />
        </div>
      </div>
    </div>
  );
};

export default About;
