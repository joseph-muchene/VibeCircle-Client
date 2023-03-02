import React from "react";
import Friend from "../components/Post";
import Navbar from "../core/Navbar";
import SearchPost from "../components/SearchPost";
function Friends() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mx-3 my-3">
        <SearchPost />
      </div>
      <div className=" mx-10 flex flex-col justify-center items-center space-y-4 md:grid grid-cols-3 ">
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
    </div>
  );
}

export default Friends;
