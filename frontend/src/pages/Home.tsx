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
  const [profile, setProfile, removeProfile] = useLocalStorageProfile(
    "profile",
    null
  );

  useEffect(() => {
    console.log("state -->" + state.token);
    if (jwt !== "" && state.token !== "") {
      console.log("there is something");
      console.log(state.token);
      dispatch(getUserByToken(state.token));
      if (stateProfile.selectedProfile === null && profile === null) {
        navigate("/profile/select");
      } else if (profile === null && stateProfile.selectedProfile !== null) {
        setProfile(stateProfile.selectedProfile);
      } else if (profile !== null && stateProfile.selectedProfile === null) {
        dispatch(selectProfile(profile));
      }
    } else if (jwt === "" && state.token !== "") {
      setJwt(state.token);
    } else if (jwt !== "" && state.token === "") {
      dispatch(setToken(jwt));
    } else {
      navigate("/");
    }
  }, [state.token, jwt]);

  return <div className="home"></div>;
};
