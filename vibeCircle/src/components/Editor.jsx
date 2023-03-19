import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./CreatePost.css";
import Navbar from "../core/Navbar";

const CreatePost = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(content); // Do something with the post content
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="create-post md:flex justify-center items-center flex-col"
      >
        <h2>Create a New Post</h2>
        <ReactQuill
          value={content}
          onChange={handleContentChange}
          placeholder="Write something amazing..."
        />
        <button type="submit">Create Post</button>
      </form>
    </>
  );
};

export default CreatePost;
