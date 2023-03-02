import React from "react";
import Soon from "../poster.jpg";
function Sugg() {
  return (
    <>
      <div className=" p-4 hidden md:block md:w-72 cursor-pointer">
        <div>
          <div className="border shadow-md flex justify-center flex-col items-center space-y-2">
            <h1>Joseph Muchene</h1>
            <p>Feeling good today</p>
          </div>
          <div className="">
            <img src={Soon} className=" w-full" alt="" srcset="" />
          </div>

          <div className="flex space-x-4 justify-center my-3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#000] hover:text-white">
              follow
            </button>
            <button className="bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-red-700 hover:text-white">
              unfollow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sugg;
