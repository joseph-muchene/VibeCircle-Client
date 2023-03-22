import React from "react";
import { Link } from "react-router-dom";
function Friend({ article }) {
  return (
    <div className="max-w-3xl rounded overflow-hidden shadow-lg ">
      <div className="px-6 py-4">
        <div
          className="text-gray-700 text-base"
          dangerouslySetInnerHTML={{
            __html: article.content.substring(0, 900),
          }}
        />
        <span>....</span>
        <Link to={"/article/" + article._id}>Read more</Link>
      </div>

      {/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr mb-2">
          #winter
        </span>
      </div> */}
    </div>
  );
}

export default Friend;
