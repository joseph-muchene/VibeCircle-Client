import React, { useEffect } from "react";
import "./Article.css";
import Navbar from "../core/Navbar";

import { useDispatch, useSelector } from "react-redux";
import { getarticlesById } from "../features/Articles/ArticleSlice";
import { useParams } from "react-router-dom";

function Article() {
  const { id } = useParams();

  const { article } = useSelector((state) => state.article);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getarticlesById(id));
  }, [id]);

  return (
    <>
      <Navbar />

      <div className="article">
        <div
          className="text-gray-700 text-base"
          dangerouslySetInnerHTML={{
            __html: article?.content,
          }}
        />
      </div>
    </>
  );
}

export default Article;
