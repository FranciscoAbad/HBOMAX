import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../utils/GlobalInterfaces";
import axios from "axios";

interface UserSliceState {
  loggedIn: User | undefined;
  username: string;
  token: string;
  fromRegister: boolean;
  error: boolean;
}

interface LoginBody {
  username: string;
  password: string;
}

interface VerifyUserBody {
  email: string;
  username: string;
}

export const verifyUsername = createAsyncThunk(
  "user/username",
  async (body: VerifyUserBody, thunkAPI) => {
    try {
      const req = await axios.post("http://localhost:8080/auth/find", body);
      return req.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getUserByToken = createAsyncThunk(
  "user/get",
  async (token: string, thunkAPI) => {
    try {
      const req = await axios.get("http://localhost:8080/user/verify", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return req.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState: UserSliceState = {
  loggedIn: undefined,
  username: "",
  token: "",
  fromRegister: false,
  error: false,
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (body: LoginBody, thunkApi) => {
    try {
      const req = await axios.post("http://localhost:8080/auth/login", body);
      return req.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFromRegister(state, action: PayloadAction<boolean>) {
      state = {
        ...state,
        fromRegister: action.payload,
      };

      return state;
    },
    resetUsername(state) {
      state = {
        ...state,
        username: "",
      };

      return state;
    },
    setToken(state, action: PayloadAction<string>) {
      state = {
        ...state,
        token: action.payload,
      };

      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state = {
        ...state,
        loggedIn: {
          userId: action.payload.user.userId,
          firstName: action.payload.user.firstName,
          lastName: action.payload.user.lastName,
          email: action.payload.user.email,
          username: action.payload.user.username,
          selectedProfile: null,
        },
        token: action.payload.token,
      };
      return state;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state = {
        ...state,
        error: false,
      };
      return state;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state = {
        ...state,
        error: true,
      };
      return state;
    });

    builder.addCase(verifyUsername.fulfilled, (state, action) => {
      state = {
        ...state,
        username: action.payload,
      };

      return state;
    });

    builder.addCase(verifyUsername.pending, (state, action) => {
      state = {
        ...state,
        error: false,
      };
      return state;
    });

    builder.addCase(verifyUsername.rejected, (state, action) => {
      state = {
        ...state,
        error: true,
      };

      return state;
    });

    builder.addCase(getUserByToken.fulfilled, (state, action) => {
      state = {
        ...state,
        loggedIn: action.payload,
        username: action.payload.username,
      };

      return state;
    });

    builder.addCase(getUserByToken.pending, (state, action) => {
      state = {
        ...state,
        error: false,
      };
      return state;
    });

    builder.addCase(getUserByToken.rejected, (state, action) => {
      state = {
        ...state,
        error: true,
      };
      return state;
    });
  },
});

export const { setFromRegister, resetUsername, setToken } = UserSlice.actions;

export default UserSlice.reducer;
