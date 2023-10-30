import ResCard from "./ResCard";
import Shimer from "./Shimer";
import Search from "./Search";
import useFetchResList from "../utils/useFetchResList";
import { Link } from "react-router-dom";

const Body = () => {
  const [resData, filterList, setFilterList] = useFetchResList();

  const n = 15;

  return (
    <div>
      <Search
        onFilterChange={(newList) => setFilterList(newList)}
        list={resData}
      />
      <div className="flex flex-wrap justify-center">
        {filterList.length
          ? filterList?.map((res) => (
              <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
                {" "}
                <ResCard resInfo={res.info} />
              </Link>
            ))
          : [...Array(n)].map((e, i) => <Shimer key={i} />)}
      </div>
    </div>
  );
};

export default Body;
