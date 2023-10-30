import { useEffect, useState } from "react";
import { CDN_URL, RESTURANT_URL } from "../util/utils";
import { useParams } from "react-router-dom";

const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTURANT_URL + resId);
    const json = await data.json();
    // console.log(json);
    setResInfo(json);
  };

  if (resInfo === null) return <h1>Data Not feched yet</h1>;

  const {
    name,
    avgRating,
    locality,
    areaName,
    cuisines,
    constForTwoMessage,
    totalRatingsString,
    cloudinaryImageId,
  } = resInfo?.data?.cards[0]?.card?.card?.info;

  const itemCards =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  return (
    <div className="resInfoContainer">
      <div className="resInfo">
        <div>
          <h1>{name}</h1>
          <p>{cuisines.join(", ")}</p>
          <p>{constForTwoMessage}</p>
          <p>
            {locality}, {areaName}
          </p>
        </div>
        <div className="resRating">
          <div>{avgRating}*</div>
          <p>{totalRatingsString}</p>
        </div>
      </div>

      <div className="resMenuContainer">
        <h1>Resturant Menu</h1>
        {itemCards?.map((item) => {
          return (
            <div key={item?.card?.info?.id} className="resItem">
              <div className="resItem-detail">
                <h3>{item?.card?.info?.name}</h3>
                <p>Rs.{item?.card?.info?.price / 100}</p>
              </div>
              <div className="menuImg">
                <img src={CDN_URL + item?.card?.info?.imageId} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResMenu;
