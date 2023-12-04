import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProfileCreate } from "../../../../pages/ProfileCreate";

export const ProfileEditor: React.FC = () => {
  return (
    <Routes>
      <Route path="create" element={<ProfileCreate edit={false} />} />
      <Route path="edit" element={<ProfileCreate edit={true} />} />
    </Routes>
  );
};
