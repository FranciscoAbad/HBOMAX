import React from "react";
import { ProfileHeader } from "../features/profile/components/ProfileHeaders/ProfileHeader";
import { ProfileCreateForm } from "../features/profile/components/ProfileCreateForm/ProfileCreateForm";
import "./ProfileCreate.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/Store";

interface ProfileCreateProps {
  edit: boolean;
}

export const ProfileCreate: React.FC<ProfileCreateProps> = ({ edit }) => {
  return (
    <div className="profile-create">
      <ProfileHeader />
      <ProfileCreateForm edit={edit} />
    </div>
  );
};
