import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonListName = [
    "All",
    "JavaScript",
    "ComputerScience",
    "Live",
    "Mixes",
    "News",
    "Mixes",
    "Album",
    "Live",
    "Mixes",
    "News",
    "Mixes",
    "Album",
    "Mixes",
    "News",
    "Mixes",
    "Album",
    "Data",
    "Java",
    "React",
    "Node",
  ];
  return (
    <div className="flex flex-wrap ml-5 mb-4 overflow-hidden h-8">
      {buttonListName.map((btnName) => (
        <Button btnName={btnName} />
      ))}
    </div>
  );
};

export default ButtonList;
