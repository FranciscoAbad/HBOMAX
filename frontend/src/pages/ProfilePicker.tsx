import React, { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import {
  useLocalStorage,
  useLocalStorageProfile,
} from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { getProfiles } from "../redux/Slices/ProfileSlice";
import "./ProfilePicker.css";
import { ProfilePickerContent } from "../features/profile/components/ProfilePickerContent/ProfilePickerContent";
import { ProfileHeader } from "../features/profile/components/ProfileHeader/ProfileHeader";

export const ProfilePicker: React.FC = () => {
  const state = useSelector((state: RootState) => state.user);
  const stateProfile = useSelector((state: RootState) => state.profile);
  const dispatch: AppDispatch = useDispatch();
  const [jwt, setJwt, removeJwt] = useLocalStorage("token", "");

  const navigate = useNavigate();

  useEffect(() => {
    if (state.token !== "") {
      dispatch(getProfiles(state.token));
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div
      className="profile-picker"
      onClick={() => {
        console.log(stateProfile.profiles);
      }}
    >
      <ProfileHeader />
      <ProfilePickerContent />
    </div>
  );
};
