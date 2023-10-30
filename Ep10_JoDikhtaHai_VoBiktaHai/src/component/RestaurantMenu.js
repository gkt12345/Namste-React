import { useParams } from "react-router-dom";
import useFetchResMenu from "../utils/useFetchResMenu";
import ResMenuInfo from "./ResMenuInfo";
import RestaurantCategory from "./RestaurantCategory";
import Loader from "./Loader";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuList = useFetchResMenu(resId);

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

      {category?.map((item) => (
        <RestaurantCategory key={item.card.card.title} category={item} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
