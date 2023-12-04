import React, { useState } from "react";
import "./ProfilePickerContent.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/Store";
import { Profile } from "../../../../utils/GlobalInterfaces";
import {
  selectProfile,
  setEditProfile,
} from "../../../../redux/Slices/ProfileSlice";
import { useNavigate } from "react-router-dom";
import { Visibility } from "@mui/icons-material";

export const ProfilePickerContent: React.FC = () => {
  const state = useSelector((state: RootState) => state.profile);
  const [edit, setEdit] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProfileSelection = (selectedProfile: Profile) => {
    dispatch(selectProfile(selectedProfile));
    navigate("/home");
  };

  const handleEditProfileSelection = (selectedProfile: Profile) => {
    dispatch(selectProfile(selectedProfile));
    navigate("/profile/editor/edit");
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
          <div
            key={item.profileId}
            className="profile-picker-profiles-card"
            onClick={
              edit
                ? () => {
                    handleEditProfileSelection(item);
                  }
                : () => {
                    handleProfileSelection(item);
                  }
            }
          >
            <div className="profile-picker-profiles-card-top">
              <div className="profile-picker-profiles-card-top-box"></div>
              <div className="profile picker-profiles-card-top-letter">
                {item.name.substring(0, 1).toLocaleUpperCase()}
              </div>
              {edit ? (
                <div className="profile-picker-profiles-card-top-edit">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAABpElEQVR42u3Z0VGEMBAG4JRACZRACXTgdQAdnB1IB9KBdoAd0IF0ICXQgb8viuhB2E3+5c4xm6djluObSbIkwbkUKXyBDAXy2+HkGAEA1W1x5CQUGBAeIwohR0r6dYs+BjFHRkJ0KDgSUrSnFXDuf/yqZKAeTUA7CTj1xZVKAmpMZhZQr16tDgOtcxQkLmibIyYxQX7OSkZmCtrnOOccHhY5pSFIyKmWVd6wy0I4GysABojIYYConHgQmRMLonPiQAacGJAJJxxkxAkFmXHCQIacEJApRw8y5mhB5hwdiMHBIybvbk4OonDqvd2cBvSMKbaz0Ph3czrQED92iCBkc+ZT+FBmgso58y58ZjFB81+tdoVwojNB3WfeFFN3mKCvGfYSUwZpIORbebqqzAOdLjd3yFGj1b0keKDvB+cocUa3KJKKdxYP1O+eNYpeoTwQhUMDofBiWvkCww40ocMZ5eqByoGDekKPFnX4hwJmYSx8R+RXAJFOIBMogRIogRIogf4RKOwTp7b1ctDB8YdAw1U8b76V4Eh80LuovTJWnylSpJDHB1VE4F0DdderAAAAAElFTkSuQmCC"
                    alt=""
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
            <p className="profile-picker-profiles-card-bottom">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="profiles-picker-nav">
        <div
          className="profiles-picker-nav-group"
          style={{ visibility: edit ? "hidden" : "visible" }}
        >
          <div className="profiles-picker-nav-group-button">
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
            <span> {edit ? "Manage profiles" : "Done"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
