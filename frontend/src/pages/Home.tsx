import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/Store";
import {
  useLocalStorage,
  useLocalStorageProfile,
} from "../hooks/useLocalStorage";
import { getUserByToken, setToken } from "../redux/Slices/UserSlice";
import { useNavigate } from "react-router-dom";
import { selectProfile } from "../redux/Slices/ProfileSlice";

export const Home: React.FC = () => {
  const state = useSelector((state: RootState) => state.user);
  const stateProfile = useSelector((state: RootState) => state.profile);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [jwt, setJwt, removeJwt] = useLocalStorage("token", "");

  useEffect(() => {
    if (state.token === "") {
      navigate("/");
    } else if (stateProfile.selectedProfile === null) {
      navigate("/profile/select");
    }
  }, [state.token, jwt]);

  return <div className="home"></div>;
};
