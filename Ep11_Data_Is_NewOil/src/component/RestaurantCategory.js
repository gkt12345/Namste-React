import ResMenuList from "./ResMenuList";

const RestaurantCategory = ({ category, showItem, onSetIndex }) => {
  const handleClick = () => {
    onSetIndex();
  };
  return (
    <div class="border-b-[15px] border-gray-200 my-[20px] sm:mx-[10%] md:mx-[15%] ">
      <div
        class="flex justify-between pb-5 cursor-pointer"
        onClick={handleClick}
      >
        <div class="font-bold text-lg text-gray-600 ">
          {category.card.card.title} ({category?.card?.card?.itemCards.length})
        </div>
        <div class="">🔽</div>
      </div>
      {showItem &&
        category?.card?.card?.itemCards.map((item) => (
          <ResMenuList key={item.card.info.id} item={item} />
        ))}
    </div>
  );
};

export default RestaurantCategory;
