import React, { useEffect } from "react";
import Card from "./Card";
import Suggestion from "./Suggestion";
import { useDispatch, useSelector } from "react-redux";
import { findAllPosts } from "../features/Post/PostSlice";

function Cards() {
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAllPosts());
  }, []);
  return (
    <div className="relative">
      <Suggestion />

      <div className="mx-10 flex justify-center flex-col items-center">
        {posts &&
          posts.length > 0 &&
          posts.map((post) => {
            return <Card key={post.id} post={post} />;
          })}
      </div>
    </div>
  );
}

export default Cards;
