import React from "react";
import Soon from "../soon.jpeg";
import Pc from "../pc.jpg";
import Comments from "./Comments";
import { useState } from "react";
function Card({ width }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" w-60 md:w-96 ">
      <div>
        <div className="border shadow-md flex justify-center flex-col items-center space-y-2">
          <h1>Joseph Muchene</h1>
          <p>Feeling good today</p>
        </div>
        <div className="">
          <img src={Soon} className=" w-full" alt="" srcset="" />
        </div>

        <div>
          <h1 className="flex justify-center mt-3">
            <p className="text-center w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500">
              1
            </p>
          </h1>
          <div className="flex space-x-4 justify-center my-3">
            <button className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
              Like
            </button>
          </div>
        </div>
      </div>

      <p className="my-4 font-semibold" onClick={() => setToggle(!toggle)}>
        Show comments
      </p>
      {toggle && <Comments />}
    </div>
  );
}

export default Card;
