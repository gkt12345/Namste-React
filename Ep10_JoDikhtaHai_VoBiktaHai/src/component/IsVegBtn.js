import { useState } from "react";

const IsVegBtn = () => {
  const [isVeg, setIsVeg] = useState(false);

  return (
    <div class="flex justify-between my-[20px] pb-[20px] sm:mx-[10%] md:mx-[15%]">
      <div class="text-xl font-bold text-gray-700 text-center">Menu Card</div>
      <div className="border border-lime-400 h-5 w-10 rounded-sm flex justify-start items-center shadow-sm">
        <button
          class={
            isVeg
              ? "border h-4 w-4 bg-green-700 rounded-md ml-[20px] "
              : "border h-4 w-4 bg-gray-600 rounded-md "
          }
          onClick={() => setIsVeg(!isVeg)}
        ></button>
      </div>
    </div>
  );
};

export default IsVegBtn;

// onClick={() => {
//   if (!isVeg) {
//     const vegList = filterMenuList.filter((item) => item.card.info.itemAttribute.vegClassifier === "VEG")
//     setIsVeg(true);
//     setFilterMenuList(vegList);
//   } else {
//     setFilterMenuList(menuList);
//     setIsVeg(false);
//   }
// }}
