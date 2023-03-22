import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import articleservice from "./ArticleService";

const initialState = {
  articles: [],
  isSuccess: false,
  loading: false,
  isError: false,
  totalPages: 0,
  article: {},
};

export const createarticles = createAsyncThunk(
  "/articles/create",
  async (payload, thunkAPI) => {
    try {
      return articleservice.createArticle(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const findAllarticles = createAsyncThunk(
  "/articles/find/all",
  async (page, thunkAPI) => {
    try {
      return articleservice.getArticles(page);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getarticlesById = createAsyncThunk(
  "/articles/find/one",
  async (id, thunkAPI) => {
    try {
      return articleservice.getArticleById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatearticles = createAsyncThunk(
  "/articles/find/update",
  async (payload, thunkAPI) => {
    try {
      return articleservice.updateArticle(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletearticles = createAsyncThunk(
  "/articles/find/delete",
  async (id, thunkAPI) => {
    try {
      return articleservice.deleteArticle(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createComment = createAsyncThunk(
  "/articles/create/comment",
  async (payload, thunkAPI) => {
    try {
      return articleservice.createComment(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const likearticles = createAsyncThunk(
  "/articles/like",
  async (id, thunkAPI) => {
    try {
      return articleservice.likeArticle(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const articleslice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    reset: (state) => ({
      ...state,
    }),
    search: (state, action) => {
      state.articles = state.articles.filter(
        (articles) => articles._id == action.payload._id
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(findAllarticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(findAllarticles.fulfilled, (state, action) => {
        state.articles = action.payload.articles;
        state.isSuccess = true;
        state.totalPages = action.payload.totalPages;
        state.loading = false;
        state.isError = false;
      })
      .addCase(findAllarticles.rejected, (state) => {
        state.isError = true;
        state.message = "An error occured while fetching articles";
        state.loading = false;
        state.isSuccess = false;
      })
      .addCase(getarticlesById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getarticlesById.fulfilled, (state, action) => {
        state.article = action.payload;
        state.isSuccess = true;
        state.loading = false;
        state.isError = false;
      })
      .addCase(getarticlesById.rejected, (state) => {
        state.isError = true;
        state.message = "An error occured while fetching articles";
        state.loading = false;
        state.isSuccess = false;
      })
      .addCase(createarticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(createarticles.fulfilled, (state, action) => {
        state.articles.push(action.payload);
        state.isSuccess = true;
        state.loading = false;
        state.isError = false;
      })
      .addCase(createarticles.rejected, (state) => {
        state.isError = true;
        state.message = "An error occured while creating articles";
        state.loading = false;
        state.isSuccess = false;
      })
      .addCase(deletearticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletearticles.fulfilled, (state, action) => {
        state.articles = state.articles.filter(
          (articles) => articles.id !== action.payload
        );
        state.isSuccess = true;
        state.loading = false;
        state.isError = false;
      })
      .addCase(deletearticles.rejected, (state) => {
        state.isError = true;
        state.message = "An error occured while deleting articles";
        state.loading = false;
        state.isSuccess = false;
      })
      .addCase(updatearticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatearticles.fulfilled, (state, action) => {
        const payload = action.payload;
        state.articles = state.articles.map((articles) =>
          articles.id == action.payload ? { ...articles, payload } : articles
        );
        state.isSuccess = true;
        state.loading = false;
        state.isError = false;
      })
      .addCase(updatearticles.rejected, (state) => {
        state.isError = true;
        state.message = "An error occured while updating articles";
        state.loading = false;
        state.isSuccess = false;
      })
      .addCase(likearticles.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(likearticles.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.singlearticles = action.payload.result[0];
        state.isError = false;
        state.articles = state.articles.map((articles) =>
          articles._id === action.payload.articlesId
            ? {
                ...articles,
                likes: action.payload.result.find(
                  (articles) => articles._id === action.payload.articlesId
                ).likes,
              }
            : articles
        );
      })
      .addCase(likearticles.rejected, (state) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = "liking articles was denied";
        state.loading = false;
      })
      .addCase(createComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.isError = false;
        state.isSuccess = true;
        state.loading = false;
        state.articles = state.articles.map((articles) =>
          articles._id === action.payload._id
            ? {
                ...articles,
                comments: action.payload.comments,
              }
            : articles
        );
        state.message = "comment was created";
      })
      .addCase(createComment.rejected, (state) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = "commenting articles was denied";
        state.loading = false;
      });
  },
});

export const { reset, search } = articleslice.actions;

export default articleslice.reducer;
