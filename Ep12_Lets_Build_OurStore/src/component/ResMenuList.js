import { resCard_IMG_URL } from "../utils/pathOfAll";

const ResMenuList = ({ item }) => {
  const { name, price, defaultPrice, description, imageId } = item?.card?.info;
  return (
    <div class="flex justify-between border-b my-[20px] pb-[20px]">
      <div className="w-[70%] whitespace-nowrap md:whitespace-normal overflow-hidden">
        <div className="font-medium ">{name}</div>
        <div className="text-sm text-gray-700 ">
          Rs.{(price ? price / 100 : defaultPrice / 100).toFixed()}
        </div>
        <div className="text-xs text-gray-500 mt-2">{description}</div>
      </div>
      <div>
        <img
          class="w-[125px] border h-[100px] rounded-md shadow-md cursor-pointer"
          src={resCard_IMG_URL + imageId}
        />
      </div>
    </div>
  );
};

export default ResMenuList;
