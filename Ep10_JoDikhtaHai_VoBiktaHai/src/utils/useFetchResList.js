import { useEffect, useState } from "react";
import { RES_API_MAIN } from "./pathOfAll";

const useFetchResList = () => {
  const [resData, setResData] = useState([]);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API_MAIN);
    const json = await data.json();
    setResData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return [resData, filterList, setFilterList];
};

export default useFetchResList;
