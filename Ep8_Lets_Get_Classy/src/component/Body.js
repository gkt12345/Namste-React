import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";

const Body = () => {
  const [list, setlist] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setlist(
      // optional chaning
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Conditional Rendering
  if (list?.length === 0) {
    const n = 15;
    return (
      <div className="Res-container">
        {[...Array(n)].map((e, i) => (
          <Shimer key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="BodyContainer">
      <div className="search">
        <div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar"
            type="text"
            placeholder="Search..."
          />
          <button
            onClick={() => {
              const searchData = list?.filter((e) =>
                e?.info?.name?.toLowerCase()?.includes(search?.toLowerCase())
              );
              setFilteredList(searchData);
              setSearch("");
            }}
            className="search-btn"
          >
            Submit
          </button>
        </div>
        <div className="rating-btn">
          <button
            onClick={() => {
              const flist = list?.filter((el) => el?.info?.avgRating > 4);
              setFilteredList(flist);
            }}
          >
            Top Rating Button
          </button>
        </div>
      </div>

      <div className="Res-container">
        {filteredList?.map((resturant) => (
          <Link
            className="Res-container-link"
            to={"/resturant/" + resturant?.info?.id}
            key={resturant?.info?.id}
          >
            <ResturantCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
