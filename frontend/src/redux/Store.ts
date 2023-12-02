import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../redux/Slices/RegisterSlice";
import userReducer from "../redux/Slices/UserSlice";
import profileReducer from "../redux/Slices/ProfileSlice";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    user: userReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
