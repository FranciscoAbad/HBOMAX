import React, { useEffect } from "react";
import { SignNav } from "../features/signup/components/SignNav/SignNav";
import { RegisterStepCounter } from "../features/signup/components/RegisterStepCounter/RegisterStepCounter";
import { determineModalContent } from "../features/signup/utils/RegisterModalUtils";

import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/Store";
import "./SignIn.css";
import { SignFooter } from "../features/signup/components/SignFooter/SignFooter";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EditSVG from "../components/SVGs/EditSVG";
import { decrementStep } from "../redux/Slices/RegisterSlice";
import { LoginForm } from "../features/signin/components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const SignIn: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  const [jwt, setJwt, removeJwt] = useLocalStorage("token", "");
  const navigate = useNavigate();

  if (state.user.token) {
    navigate("/home");
  }
  return (
    <div className="sign-in">
      <SignNav />
      <div className="sign-in-content-container">
        <LoginForm />
      </div>
      <SignFooter />
    </div>
  );
};
