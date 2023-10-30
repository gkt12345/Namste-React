import { useEffect, useState } from "react";
import { RESTURANT_URL } from "./utils";

const useResturantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(RESTURANT_URL + resId);
    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useResturantMenu;
