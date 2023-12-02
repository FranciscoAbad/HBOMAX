import React from "react";

import Hbomax from "../../../../assets/hbomax-med.svg";
import "./ProfileHeader.css";

export const ProfileHeader: React.FC = () => {
  return (
    <div className="profile-header">
      <div className="profile-header-container">
        <div className="profile-header-logo">
          <img src={Hbomax} alt="" />
        </div>
      </div>
    </div>
  );
};
