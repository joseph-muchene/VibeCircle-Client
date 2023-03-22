import React, { useState } from "react";
import Navbar from "./core/Navbar";
import Cards from "./components/Cards";
import { useDispatch } from "react-redux";
import { createPost } from "./features/Post/PostSlice";
function App() {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const onSubmit = (e) => {
    try {
      e.preventDefault();

      dispatch(createPost({ desc: content }));
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return (
    <div className="relative">
      <Navbar />

      {/* <Swipe /> */}

      <div className="">
        <form
          className="flex flex-col space-y-2 items-center my-5 gap-2"
          onSubmit={onSubmit}
        >
          <input type="file" />
          <textarea
            name="content"
            id="content"
            cols="20"
            placeholder="start a post"
            onChange={(e) => setContent(e.target.value)}
            rows="3"
            className="border bottom-2 border-gray-700  p-1"
          ></textarea>
          <div className="flex justify-center my-4">
            <button
              type="submit"
              className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              create post
            </button>
          </div>
        </form>
      </div>
      <Cards />
    </div>
  );
}

export default App;
