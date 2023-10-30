import { useParams } from "react-router-dom";
import useFetchResMenu from "../utils/useFetchResMenu";
import ResMenuInfo from "./ResMenuInfo";
import RestaurantCategory from "./RestaurantCategory";
import Loader from "./Loader";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuList = useFetchResMenu(resId);
  const [showItem, setShowItem] = useState(null);

  if (menuList.length === 0) {
    return <Loader />;
  }
  const category =
    menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div class="mx-10">
      <ResMenuInfo menuList={menuList?.cards[0]} />

      {category?.map((item, index) => (
        <RestaurantCategory
          key={item.card.card.title}
          category={item}
          showItem={index == showItem ? true : false}
          onSetIndex={() => setShowItem(index == showItem ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
