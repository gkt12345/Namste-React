import { useDispatch } from "react-redux";
import { resCard_IMG_URL } from "../utils/pathOfAll";
import { addItem } from "../store/cartSlice";
import { useState } from "react";

const ResMenuList = ({ item }) => {
  const [count, setCount] = useState(0);

  const { name, price, defaultPrice, description, imageId } = item?.card?.info;
  const dispatch = useDispatch();
  const handleClick = (item) => {
    // dispatch an action
    dispatch(addItem(item));
    setCount(count + 1);
  };
  return (
    <div className="flex justify-between border-b my-[20px] pb-[20px]">
      <div className="w-[70%] whitespace-nowrap md:whitespace-normal overflow-hidden">
        <div className="font-medium ">{name}</div>
        <div className="text-sm text-gray-700 ">
          Rs.{(price ? price / 100 : defaultPrice / 100).toFixed()}
        </div>
        <div className="text-xs text-gray-500 mt-2">{description}</div>
      </div>
      <div className="relative">
        <img
          class="w-[125px] border h-[100px] rounded-md shadow-md cursor-pointer"
          src={resCard_IMG_URL + imageId}
        />
        {count < 1 ? (
          <button
            className="w-[80%] absolute bottom-[-9px] ml-3 border bg-green-50 text-green-600 font-medium rounded-md h-8 text-sm hover:shadow-lg"
            onClick={() => handleClick(item)}
          >
            ADD
          </button>
        ) : (
          <button
            className="w-[80%] absolute bottom-[-9px] ml-3 border bg-green-50 text-green-600 font-medium rounded-md h-8 text-sm hover:shadow-lg"
            onClick={() => handleClick(item)}
          >
            <span className="font-medium">-</span>
            <span className=" mx-6 font-medium">{count}</span>
            <span className="font-medium">+</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ResMenuList;
