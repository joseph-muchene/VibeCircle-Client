import React from "react";
import Navbar from "../core/Navbar";
import Pic from "../soon.jpeg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Account() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const onNavigate = () => {
    return navigate("/settings");
  };

  return (
    <div>
      <Navbar />

      <div className="container shadow-lg md:mx-10 flex justify-center flex-col items-center">
        <div>
          <img
            src={Pic}
            className="w-auto md:w-56 h-40 rounded"
            alt=""
            srcset=""
          />
        </div>

        <p className="my-3">Name: {user?.name}</p>
        <div className="flex flex-row space-x-4 my-4  ">
          <p className="text-center">
            Followers:{" "}
            <span className=" bg-red-400 p-2 rounded-full text-center">
              {user?.followers?.length}
            </span>
          </p>

          <p className="text-center">
            Following:{" "}
            <span className=" bg-green-600 p-2 rounded-full text-center">
              {user?.followings?.length}
            </span>
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={onNavigate}
            className=" my-3 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            update account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
