import { useState, useEffect } from "react";
import { RES_INFO_URL } from "./pathOfAll";

const useFetchResMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuList, setMenuList] = useState([]);
  const [filterMenuList, setFilterMenuList] = useState([]);
  useEffect(() => {
    fetchResMenu();
  }, []);
  const fetchResMenu = async () => {
    const data = await fetch(RES_INFO_URL + resId);
    const json = await data.json();
    // setResInfo(json);
    setMenuList(json?.data);
    // setFilterMenuList(
    //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card.itemCards
    // );
  };
  return menuList;
};

export default useFetchResMenu;

// json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
// ?.card.itemCards
