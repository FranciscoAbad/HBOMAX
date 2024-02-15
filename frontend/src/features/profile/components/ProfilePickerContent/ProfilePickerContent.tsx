import React, { useEffect, useState } from "react";
import "./ProfilePickerContent.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/Store";
import { Profile } from "../../../../utils/GlobalInterfaces";
import {
  selectProfile,
  selectProfileEdit,
  setEditProfile,
} from "../../../../redux/Slices/ProfileSlice";
import { useNavigate } from "react-router-dom";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import { LoadingPage } from "../../../../components/LoadingPage/LoadingPage";

export const ProfilePickerContent: React.FC = () => {
  const state = useSelector((state: RootState) => state.profile);
  const [edit, setEdit] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(selectProfile(null));
    dispatch(
      selectProfileEdit({ profileId: -1, name: "", profilePicture: null })
    );
  }, []);

  const handleProfileSelection = (selectedProfile: Profile) => {
    if (edit) {
      dispatch(selectProfileEdit(selectedProfile));
      navigate("/profile/editor/edit");
    } else {
      dispatch(selectProfile(selectedProfile));
      navigate("/home");
    }
  };

  const handleAddProfile = () => {
    navigate("/profile/editor/create");
  };

  const setEditState = () => {
    setEdit(!edit);
  };

  return (
    <div className="profile-picker-content-container">
      <h1 className="profile-picker-title">
        {edit ? "Manage profiles" : "Who is Watching?"}
      </h1>
      <div className="profile-picker-profiles">
        {state.profiles.map((item) => (
          <ProfileCard
            edit={edit}
            item={item}
            handleProfileSelection={handleProfileSelection}
          />
        ))}
      </div>
      <div className="profiles-picker-nav">
        <div
          className="profiles-picker-nav-group"
          style={{ visibility: edit ? "hidden" : "visible" }}
        >
          <div
            onClick={handleAddProfile}
            className="profiles-picker-nav-group-button"
          >
            <span>Add adult</span>
          </div>
          <div className="profiles-picker-nav-group-button">
            <span>Add kid</span>
          </div>
        </div>
        <div className="profiles-picker-nav-single">
          <div
            onClick={setEditState}
            className="profiles-picker-nav-single-button"
          >
            <span> {edit ? "Done" : "Manage Profiles"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
