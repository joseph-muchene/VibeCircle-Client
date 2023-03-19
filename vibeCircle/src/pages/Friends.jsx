import React, { useEffect } from "react";
import Friend from "../components/Friend";
import Navbar from "../core/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { findAllUsers } from "../features/Auth/AuthSlice";

function Friends({ hideNav }) {
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAllUsers());
  }, []);
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
              {users.map((user) => {
                return <Friend user={user} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Friends;
