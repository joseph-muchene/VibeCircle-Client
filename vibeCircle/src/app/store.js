import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Auth/AuthSlice";
import postReducer from "../features/Post/PostSlice";
import articleReducer from "../features/Articles/ArticleSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    article: articleReducer,
  },
});
