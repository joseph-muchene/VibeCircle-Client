import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createComment } from "../features/Post/PostSlice";
function Comments({ postId, comments }) {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "" || text.length < 3) {
      if (text.length < 3) {
        return alert("comment is too short");
      } else {
        return alert("text cannot be empty");
      }
    }
    const data = {
      postId,
      text,
    };
    try {
      dispatch(createComment(data));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div>
            <h1></h1>
            <p>{comment?.text}</p>
          </div>
        );
      })}

      <div className="p-4">
        <form className="flex flex-col my-8" onSubmit={onSubmit}>
          <textarea
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            cols="20"
            rows="4"
            className="border"
          ></textarea>
          <button type="submit" className="border-black mt-3 ">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Comments;
