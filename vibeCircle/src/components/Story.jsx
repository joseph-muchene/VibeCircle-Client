import React from "react";
import Soon from "../pc.jpg";
function Story() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg w-72 ">
      <img src={Soon} className=" w-full  " alt="" srcset="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"> The coldest sunset</div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr mb-2">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
}

export default Story;
