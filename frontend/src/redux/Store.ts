import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import registerReducer from "../redux/Slices/RegisterSlice";
import userReducer from "../redux/Slices/UserSlice";
import profileReducer from "../redux/Slices/ProfileSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  register: registerReducer,
  user: userReducer,
  profile: profileReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["profile", "user"], // Array of reducers to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
