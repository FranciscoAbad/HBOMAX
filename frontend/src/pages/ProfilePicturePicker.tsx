import React from "react";
import { ProfilePicturePickerContent } from "../features/profile/components/ProfilePicturePickerContent/ProfilePicturePickerContent";
import { ProfilePicturePickerHeader } from "../features/profile/components/ProfileHeaders/ProfilePicturePickerHeader";
import "./ProfilePicturePicker.css";
export const ProfilePicturePicker: React.FC = () => {
  return (
    <div className="profile-picture-picker">
      <ProfilePicturePickerHeader />
      <ProfilePicturePickerContent />
    </div>
  );
};
