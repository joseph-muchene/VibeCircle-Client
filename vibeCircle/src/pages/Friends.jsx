import React from "react";
import Friend from "../components/Friend";
import Navbar from "../core/Navbar";

function Friends({ hideNav }) {
  return (
    <>
      {!hideNav && <Navbar />}

      <div className="text-gray-900 flex flex-col justify-center items-center md:mx-10">
        <div className="p-4 flex">
          <h1 className=" text-xl md:text-3xl">Find Friends</h1>
        </div>
        <div className="px-3 py-4 flex-justify-center">
          <table className=" text-md bg-white shadow-md rounded mb-4">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Avatar</th>
                <th className="text-left p-3 px-5">Name</th>
                <th className="text-left p-3 px-5">Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <Friend />
              <Friend />
              <Friend />
              <Friend />
              <Friend />
              <Friend />
              <Friend />
              <Friend />
              <Friend />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Friends;
