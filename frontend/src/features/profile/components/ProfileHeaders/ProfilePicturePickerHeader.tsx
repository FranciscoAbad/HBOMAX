import React from "react";
import "./ProfileHeader.css";

export const ProfilePicturePickerHeader: React.FC = () => {
  return (
    <div className="profile-picture-picker-header">
      <div className="profile-picture-picker-row">
        <div className="profile-picture-picker-row-button">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAbUlEQVR42mNgGFDwn/e/FCnKJf9v/t9DmvJNRNsAVr7/vxrxbl9GqvIz/x2Id33P/zP/fYlXXv//zP9I4pUX/z/zP4145WkkKWdg+B9JogaSnUSGp8kIVjIijuSkQUbiIyN5k5GBoFp46V8wAAC1n177tmynbwAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
        <h1 className="profile-picture-picker-row-title">Choose a character</h1>
        <div className="profile-picture-picker-row-right"></div>
      </div>
    </div>
  );
};
