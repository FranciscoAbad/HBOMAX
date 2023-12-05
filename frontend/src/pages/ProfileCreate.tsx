import React from "react";
import { ProfileHeader } from "../features/profile/components/ProfileHeader/ProfileHeader";
import { ProfileCreateForm } from "../features/profile/components/ProfileCreateForm/ProfileCreateForm";
import "./ProfileCreate.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/Store";

interface ProfileCreateProps {
  edit: boolean;
}

export const ProfileCreate: React.FC<ProfileCreateProps> = ({ edit }) => {
  const state = useSelector((state: RootState) => state);
  const navigate = useNavigate();
  if (state.user.token === "") {
    navigate("/");
  }
  return (
    <div className="profile-create">
      <ProfileHeader />
      <ProfileCreateForm edit={edit} />
    </div>
  );
};
