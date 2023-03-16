import React, { useEffect, useState } from "react";
import { findAllPosts, reset, search } from "../features/Post/PostSlice";
import { useDispatch, useSelector } from "react-redux";
function Search() {
  const { posts } = useSelector((state) => state.post);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].desc.includes(searchValue)) {
        dispatch(search(posts[i]));
      }
    }

    if (searchValue < 1) {
      dispatch(findAllPosts());
    }
  }, [searchValue, reset]);
  return (
    <div>
      <div className="flex items-center ">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="asolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>

          <input
            type="text"
            name="searchValue"
            id=""
            onChange={(e) => setSearchValue(e.target.value)}
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
      </div>
    </div>
  );
}

export default Search;
