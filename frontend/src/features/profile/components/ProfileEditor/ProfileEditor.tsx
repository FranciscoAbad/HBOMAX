import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ProfileCreate } from "../../../../pages/ProfileCreate";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/Store";

export const ProfileEditor: React.FC = () => {
  return (
    <Routes>
      <Route path="create" element={<ProfileCreate edit={false} />} />
      <Route path="edit" element={<ProfileCreate edit={true} />} />
    </Routes>
  );
};
