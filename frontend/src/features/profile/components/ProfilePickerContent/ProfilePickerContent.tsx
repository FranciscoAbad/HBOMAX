import React from "react";
import "./ProfilePickerContent.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/Store";
import { Profile } from "../../../../utils/GlobalInterfaces";
import { selectProfile } from "../../../../redux/Slices/ProfileSlice";
import { useNavigate } from "react-router-dom";

export const ProfilePickerContent: React.FC = () => {
  const state = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProfileSelection = (selectedProfile: Profile) => {
    dispatch(selectProfile(selectedProfile));
    navigate("/home");
  };

  return (
    <div className="profile-picker-content-container">
      <h1 className="profile-picker-title">¿Quién está viendo?</h1>
      <div className="profile-picker-profiles">
        {state.profiles.map((item) => (
          <div
            key={item.profileId}
            className="profile-picker-profiles-card"
            onClick={() => {
              handleProfileSelection(item);
            }}
          >
            <div className="profile-picker-profiles-card-top">
              <div className="profile-picker-profiles-card-top-box"></div>
              <div className="profile picker-profiles-card-top-letter">
                {item.name.substring(0, 1).toLocaleUpperCase()}
              </div>
            </div>
            <p className="profile-picker-profiles-card-bottom">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="profiles-picker-nav">
        <div className="profiles-picker-nav-group">
          <div className="profiles-picker-nav-group-button">
            Agregar perfil adulto
          </div>
          <div className="profiles-picker-nav-group-button">
            Agregar perfil infantil
          </div>
        </div>
        <div className="profiles-picker-nav-single">
          <div className="profiles-picker-nav-single-button">
            Administar perfiles
          </div>
        </div>
      </div>
    </div>
  );
};
