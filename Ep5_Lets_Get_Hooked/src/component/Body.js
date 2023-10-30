import ResturantCard from "./ResturantCard";
import { mockData } from "../util/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [list, setlist] = useState(mockData);
  const [searchInput, setsearchInput] = useState("");

  return (
    <div className="BodyContainer">
      <div className="search">
        <div>
          <input
            onChange={(el) => {
              setsearchInput(el.target.value);
              // console.log(el.target.value);
            }}
            className="search-bar"
            type="text"
            placeholder="Search..."
          />
          <button
            onClick={() => {
              const filterByCuisines = list.filter((el) => {
                return el.info.name.toLowerCase() == searchInput.toLowerCase();
              });
              setlist(filterByCuisines);
              // console.log(searchInput);
            }}
            className="search-btn"
          >
            Submit
          </button>
        </div>
        <div className="rating-btn">
          <button
            onClick={() => {
              const filteredList = list.filter((el) => el.info.avgRating > 4);
              // console.log(filteredList);
              setlist(filteredList);
            }}
          >
            Top Rating Button
          </button>
        </div>
      </div>

      <div className="Res-container">
        {list.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
