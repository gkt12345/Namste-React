import { useDispatch } from "react-redux";
import { resCard_IMG_URL } from "../utils/pathOfAll";
import { addItem } from "../store/cartSlice";

const ResMenuList = ({ item }) => {
  const { name, price, defaultPrice, description, imageId } = item?.card?.info;
  const dispatch = useDispatch();
  const handleClick = (item) => {
    // dispatch an action
    dispatch(addItem(item));
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
        <button
          className="w-[80%] absolute bottom-[-9px] ml-3 border bg-green-50 text-green-600 font-medium rounded-md h-8 text-sm hover:shadow-lg"
          onClick={() => handleClick(item)}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default ResMenuList;
