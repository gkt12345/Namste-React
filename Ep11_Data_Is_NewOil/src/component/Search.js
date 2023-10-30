import { useState } from "react";

const Search = ({ onFilterChange, list }) => {
  const [input, setInput] = useState("");
  return (
    <div className="flex justify-center mt-5 mb-5 ">
      <input
        className="w-[40%] mt-1 px-3 py-2 h-10 border shadow-sm border-slate-300  focus:outline-none focus:ring-sky-500 rounded-md focus:ring-1"
        type="text"
        placeholder="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          const filterList = list?.filter((e) =>
            e?.info?.name?.toLowerCase()?.includes(input?.toLowerCase())
          );
          onFilterChange(filterList);
          setInput("");
        }}
        className="border inline mt-1 px-3 py-2 h-10 shadow-sm border-slate-300 hover:border-indigo-500 rounded-md hover:shadow-sm ml-3 "
      >
        Search
      </button>
    </div>
  );
};

export default Search;
