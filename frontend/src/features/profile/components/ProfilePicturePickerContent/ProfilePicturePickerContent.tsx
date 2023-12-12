import React, { useEffect, useState } from "react";
import { ProfilePicturePickerHeader } from "../ProfileHeaders/ProfilePicturePickerHeader";
import "./ProfilePicturePickerContent.css";
import axios from "axios";
import { Image } from "../../../../utils/GlobalInterfaces";
import { AppDispatch, RootState } from "../../../../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProfile,
  setEditImage,
} from "../../../../redux/Slices/ProfileSlice";
import { useNavigate } from "react-router-dom";

export const ProfilePicturePickerContent: React.FC = () => {
  const [data, setData] = useState<Image[]>([]);
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const navigate = useNavigate();
  const handleClick = (image: Image) => {
    dispatch(setEditImage(image));
    if (state.profile.editingProfile?.profileId != -1) {
      navigate("/profile/editor/edit");
    } else {
      navigate("/profile/editor/create");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Image[]>(
          "http://localhost:8080/cast/get/images/brand/adult-swim"
        );

        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error("Error--->", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="profile-picture-picker-container">
      <div className="profile-picture-picker-brand">
        <h2 className="profile-picture-picker-brand-title">HBO Originals</h2>
        <div className="profile-picture-picker-brand-grid">
          {data.map((item) => (
            <div
              className="profile-picture-picker-brand-grid-item"
              key={item.imageId}
              onClick={() => {
                handleClick(item);
              }}
            >
              <div className="profile-picture-picker-brand-grid-item-picture">
                <img src={item.imageURL} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
