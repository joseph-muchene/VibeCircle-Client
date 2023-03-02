import React from "react";
import Soon from "../poster.jpg";
function Friend() {
  return (
    <tr className="border-b hover:bg-orange-100 bg-gray-100 cursor-pointer">
      <td className="p-3 px-5">
        <img
          src={Soon}
          alt=""
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        />
      </td>
      <td className="p-3 px-5">hello there</td>
      <td className="p-3 px-5">
        <button className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
          Follow
        </button>
      </td>
    </tr>
  );
}

export default Friend;
