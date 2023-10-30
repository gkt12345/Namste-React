const ResMenuInfo = ({ menuList }) => {
  const {
    name,
    cuisines,
    areaName,
    sla,
    feeDetails,
    avgRatingString,
    totalRatingsString,
  } = menuList.card.card.info;

  return (
    <div class="flex justify-between border-b-2 border-dashed my-[25px] pb-[25px] sm:mx-[10%] md:mx-[15%] ">
      <div class="">
        <div class="text-2xl font-bold text-gray-700 pb-1">{name}</div>
        <div class="text-xs font-semibold text-gray-600">
          {cuisines.join(", ")}
        </div>
        <div class="text-xs font-semibold text-gray-600">
          {areaName}, {sla.lastMileTravelString}
        </div>
        <div class="text-xs font-semibold text-gray-600 mt-4">
          {feeDetails.message}
        </div>
      </div>
      <div class="p-2 border rounded-lg text-center h-[74px]">
        <div class="border-b font-bold text-green-800 pb-2">
          {avgRatingString}*
        </div>
        <div class="text-xs text-gray-500 font-bold py-1">
          {totalRatingsString}
        </div>
      </div>
    </div>
  );
};

export default ResMenuInfo;

{
  /* <ResMenuList key={item.card.info.id} item={item} /> */
}
