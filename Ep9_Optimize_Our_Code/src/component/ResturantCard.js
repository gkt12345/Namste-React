import { CDN_URL } from "../util/utils";

const ResturantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="text-card-container">
        <div className="text-card">
          <div className="res-name">{name}</div>
          <div className="star">{avgRating}*</div>
        </div>
        <div className="cuisines">{cuisines.join(", ")}</div>
        <div className="text-card">
          <div>{sla.deliveryTime} min</div>
          <div className="amnout">{costForTwo}</div>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
