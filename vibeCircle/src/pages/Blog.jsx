import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import Navbar from "../core/Navbar";
import SearchPost from "../components/SearchPost";
import { findAllarticles } from "../features/Articles/ArticleSlice";
import { useDispatch, useSelector } from "react-redux";
import Articles from "../components/Articles";

function Article() {
  const { articles, totalPages } = useSelector((state) => state.article);
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllarticles(page));
  }, [page]);

  function loadMore() {
    if (page === totalPages - 1) {
      return setPage(0);
    }
    setPage(page + 1);
  }

  useEffect(() => {
    function handleScroll() {
      const distance =
        document.documentElement.offsetHeight -
        (window.innerHeight + window.pageYOffset);

      if (distance < 100) {
        return loadMore();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [articles]);
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mx-3 my-3">
        <SearchPost />
      </div>
      <div className="mx-10 ">
        <div className="flex justify-center flex-col items-center">
          <Articles articles={articles} />
        </div>
      </div>
    </div>
  );
}

export default Article;
