import React from "react";
import Post from "./Post";
function Articles({ articles }) {
  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        {articles.length > 0 &&
          articles.map((article) => <Post article={article} />)}
      </div>
    </div>
  );
}

export default Articles;
