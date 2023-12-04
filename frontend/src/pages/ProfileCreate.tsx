import React from "react";
import { ProfileHeader } from "../features/profile/components/ProfileHeader/ProfileHeader";
import { ProfileCreateForm } from "../features/profile/components/ProfileCreateForm/ProfileCreateForm";
import "./ProfileCreate.css";

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
