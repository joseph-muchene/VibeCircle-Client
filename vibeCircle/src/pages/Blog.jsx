import React, { useEffect } from "react";
import Post from "../components/Post";
import Navbar from "../core/Navbar";
import SearchPost from "../components/SearchPost";
function Article() {
  useEffect(() => {}, []);
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mx-3 my-3">
        <SearchPost />
      </div>
      <div className=" mx-10 flex flex-col justify-center items-center space-y-4 md:grid grid-cols-3 ">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Article;
