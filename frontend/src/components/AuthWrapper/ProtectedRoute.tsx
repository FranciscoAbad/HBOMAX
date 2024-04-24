import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/Store";
import { Navigate, Outlet, Route, useLocation } from "react-router-dom";

import { ProfilePicker } from "../../pages/ProfilePicker";
import { ProfileEditor } from "../../features/profile/components/ProfileEditor/ProfileEditor";
import { ProfilePicturePicker } from "../../pages/ProfilePicturePicker";
import { Account } from "../../pages/Account";
import { Series } from "../../pages/Series";
import { Movies } from "../../pages/Movies";
import { FeedFilter } from "../../pages/FeedFilter";
import { Feed } from "../../pages/Feed";
import { Title } from "../../pages/Title";
import { getUserByToken } from "../../redux/Slices/UserSlice";
import { useCheckToken } from "./checkToken";

export const ProtectedRoute: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user.token);
  const location = useLocation();
  const { tokenValid, isFetching } = useCheckToken();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};
