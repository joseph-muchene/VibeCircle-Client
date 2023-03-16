import React, { useEffect } from "react";
import Soon from "../soon.jpeg";
import Pc from "../pc.jpg";
import Comments from "./Comments";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { findAllPosts, likePost } from "../features/Post/PostSlice";
function Card({ post }) {
  const { user } = useSelector((state) => state.user);
  const { posts, singlePost } = useSelector((state) => state.post);
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const [userPost, setUserPost] = useState(
    posts.find((p) => p._id === post._id)
  );

  // get user name
  const getUserName = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/user/find/${`6412a3bb115b5d41966b171c`}`
      );

      setName(res.data.name);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserName();
  }, [userPost?.userId]);
  const [like, setLike] = useState(1);

  const dispatch = useDispatch();
  const incrementLike = ({ _id }) => {
    const payload = {
      userId: _id,
      postId: userPost._id,
    };
    dispatch(likePost(payload));
   
    

    setLike(like + 1);
  };

  const decrementLike = () => {
    if (like === 1) return;
    setLike(like - 1);
  };

  return (
    <div className=" w-60 md:w-96 ">
      <div>
        <div className="border shadow-md flex justify-center flex-col items-center space-y-2">
          <h1>{name}</h1>
          <p>{userPost.desc}</p>
        </div>
        <div className="">
          <img src={Soon} className=" w-full" alt="" srcset="" />
        </div>

        <div>
          <h1 className="flex justify-center mt-3">
            <p className="text-center w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500">
              {userPost.likes?.length}
            </p>
          </h1>
          <div className="flex space-x-4 justify-center my-3">
            {userPost.likes?.length > 0 ? (
              <button
                onClick={() => incrementLike(user)}
                className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                unLike
              </button>
            ) : (
              <button
                onClick={() => incrementLike(user)}
                className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                Like
              </button>
            )}
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
