import React from "react";
import { Profile } from "../../../../utils/GlobalInterfaces";
import "./ProfileCard.css";

interface ProfileCardProps {
  edit: boolean;
  item: Profile;
  handleProfileSelection: (item: Profile) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  edit,
  item,
  handleProfileSelection,
}) => {
  return (
    <div
      key={item.profileId}
      className="profile-picker-profiles-card"
      onClick={() => {
        handleProfileSelection(item);
      }}
    >
      <div className="profile-picker-profiles-card-top">
        <div className="profile-picker-profiles-card-top-box"></div>
        {item.profilePicture ? (
          <div className="profile-picker-profiles-card-top-box-hide">
            <img
              className="profile-picker-profiles-card-top-box-img"
              src={item.profilePicture.imageURL}
            />
          </div>
        ) : (
          <div className="profile picker-profiles-card-top-letter">
            {item.name.substring(0, 1).toLocaleUpperCase()}
          </div>
        )}

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
  );
};
