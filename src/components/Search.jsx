import React from "react";
import { RxCross1 } from "react-icons/rx";

const Search = ({setSearchTerm, setSearch }) => {
  
  function checkSearch() {
    setSearch(false)
  }
  return (
    <div>
      <div className="search z-[9999] gap-2 flex items-center justify-center absolute top-2 w-full p-2 ">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[500px] h-10 rounded-md p-3 outline-none shadow-sm"
          type="search"
          placeholder="search here"
        />
         <RxCross1 className=" cursor-pointer" onClick={checkSearch} color="white" size={20} />

      </div>
    </div>
  );
};

export default Search;
