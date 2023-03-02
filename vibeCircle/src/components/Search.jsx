import React from "react";

function Search() {
  return (
    <div>
      <form className="flex items-center ">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="asolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Friends"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2 5"
          />
        </div>
        <button
          type="submit"
          className="p-2 5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-800"
        >
          <span className="src-only">Search</span>
        </button>
      </form>
    </div>
  );
}

export default Search;
