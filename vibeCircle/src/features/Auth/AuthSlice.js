import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userServiceData from "./AuthService";

const user = JSON.parse(localStorage.getItem("user"));
const AuthState = {
  user: user ? user : null,
  isLoading: false,
  authenticated: false,
  token: "",
  users: [],
  isSuccess: false,
  message: "",
  isError: false,
};

export const SignUpUser = createAsyncThunk(
  "/auth/signUp",
  async (user, thunkAPI) => {
    try {
      return userServiceData.registerUser(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserById = createAsyncThunk(
  "/auth/user/me",
  async (id, thunkAPI) => {
    try {
      return userServiceData.getUserById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const findAllUsers = createAsyncThunk(
  "/auth/users",
  async (_, thunkAPI) => {
    try {
      return userServiceData.findAllUsers();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "/auth/user/update",
  async (data, thunkAPI) => {
    try {
      return userServiceData.updateUser(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const SignInUser = createAsyncThunk(
  "/auth/signIn",
  async (user, thunkAPI) => {
    try {
      return userServiceData.SignInUser(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// create a user slice
export const userSlice = createSlice({
  name: "user",
  initialState: AuthState,
  reducers: {
    reset: (state) => ({
      ...state,
    }),

    onLogout: (state) => {
      state.user = null;
      state.authenticated = false;
      state.message = "user was logged out";
      state.isError = false;
      state.isLoading = false;
      window.localStorage.clear();
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(SignUpUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(SignUpUser.fulfilled, (state) => {
        state.message = "user registered";
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = state.payload;
      })
      .addCase(SignUpUser.rejected, (state) => {
        state.isError = true;
        state.message = "user failed to register";
        () => ({
          ...AuthState,
        });
      })
      .addCase(SignInUser.pending, (state) => {
        state.isLoading = true;
        state.user = null;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(SignInUser.fulfilled, (state, action) => {
        state.message = "login successful";
        state.isLoading = false;
        state.token = action.payload.token;
        window.localStorage.setItem(
          "token",
          JSON.stringify(action.payload.token)
        );
        state.isError = false;
        state.authenticated = true;
        state.isSuccess = true;

        state.user = action.payload;
      })
      .addCase(SignInUser.rejected, (state) => {
        state.isError = true;
        state.message = "user failed to login";
        () => ({
          ...AuthState,
        });
      })
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        if (action.payload === undefined) {
          return { ...state };
        }
        state.user = action.payload;
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        state.message = "";
        state.authenticated = true;
      })
      .addCase(getUserById.rejected, (state) => {
        state.message = "An error has occured, try sign in again";
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.message = "Account updated";
        state.authenticated = true;
      })
      .addCase(updateUser.rejected, (state) => {
        state.message = "An error has occured, try updating again";
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(findAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(findAllUsers.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isError = false;
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(findAllUsers.rejected, (state) => {
        state.isSuccess = false;
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset, onLogout } = userSlice.actions;

export default userSlice.reducer;
