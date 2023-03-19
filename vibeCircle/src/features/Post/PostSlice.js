import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PostService from "./PostService";

const initialState = {
  posts: [],
  isSuccess: false,
  loading: false,
  isError: false,
  singlePost: {},
};

export const createPost = createAsyncThunk(
  "/post/create",
  async (payload, thunkAPI) => {
    try {
      return PostService.createPost(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const findAllPosts = createAsyncThunk(
  "/post/find/all",
  async (_, thunkAPI) => {
    try {
      return PostService.getPosts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPostById = createAsyncThunk(
  "/post/find/one",
  async (id, thunkAPI) => {
    try {
      return PostService.getPostById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePost = createAsyncThunk(
  "/post/find/update",
  async (payload, thunkAPI) => {
    try {
      return PostService.updatePost(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "/post/find/delete",
  async (id, thunkAPI) => {
    try {
      return PostService.deletePost(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createComment = createAsyncThunk(
  "/post/create/comment",
  async (payload, thunkAPI) => {
    try {
      return PostService.createComment(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const likePost = createAsyncThunk("/post/like", async (id, thunkAPI) => {
  try {
    return PostService.likePost(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: (state) => ({
      ...state,
    }),
    search: (state, action) => {
  
      state.posts = state.posts.filter(
        (post) => post._id == action.payload._id
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(findAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(findAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isSuccess = true;
        state.loading = false;
        state.isError = false;
      })
      .addCase(findAllPosts.rejected, (state) => {
        state.isError = true;
        state.message = "An error occured while fetching posts";
        state.loading = false;
        state.isSuccess = false;
      })
      .addCase(getPostById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.post = action.payload;
        state.isSuccess = true;
        state.loading = false;
        state.isError = false;
      })
      .addCase(getPostById.rejected, (state) => {
        state.isError = true;
        state.message = "An error occured while fetching post";
        state.loading = false;
        state.isSuccess = false;
      })
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        state.isSuccess = true;
        state.loading = false;
        state.isError = false;
      })
      .addCase(createPost.rejected, (state) => {
        state.isError = true;
        state.message = "An error occured while creating post";
        state.loading = false;
        state.isSuccess = false;
      })
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
        state.isSuccess = true;
        state.loading = false;
        state.isError = false;
      })
      .addCase(deletePost.rejected, (state) => {
        state.isError = true;
        state.message = "An error occured while deleting post";
        state.loading = false;
        state.isSuccess = false;
      })
      .addCase(updatePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const payload = action.payload;
        state.posts = state.posts.map((post) =>
          post.id == action.payload ? { ...post, payload } : post
        );
        state.isSuccess = true;
        state.loading = false;
        state.isError = false;
      })
      .addCase(updatePost.rejected, (state) => {
        state.isError = true;
        state.message = "An error occured while updating post";
        state.loading = false;
        state.isSuccess = false;
      })
      .addCase(likePost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.singlePost = action.payload.result[0];
        state.isError = false;
        state.posts = state.posts.map((post) =>
          post._id === action.payload.postId
            ? {
                ...post,
                likes: action.payload.result.find(
                  (post) => post._id === action.payload.postId
                ).likes,
              }
            : post
        );
      })
      .addCase(likePost.rejected, (state) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = "liking post was denied";
        state.loading = false;
      })
      .addCase(createComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.loading = false;
        state.posts = state.posts.map((post) =>
          post._id === action.payload._id
            ? {
                ...post,
                comments: action.payload.comments,
              }
            : post
        );
        state.message = "comment was created";
      })
      .addCase(createComment.rejected, (state) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = "commenting post was denied";
        state.loading = false;
      });
  },
});

export const { reset, search } = postSlice.actions;

export default postSlice.reducer;
