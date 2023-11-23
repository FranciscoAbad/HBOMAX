import React, { useEffect } from "react";
import { SignNav } from "../features/signup/components/SignNav/SignNav";
import { RegisterStepCounter } from "../features/signup/components/RegisterStepCounter/RegisterStepCounter";
import { determineModalContent } from "../features/signup/utils/RegisterModalUtils";

import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/Store";
import "./SignUp.css";
import { SignFooter } from "../features/signup/components/SignFooter/SignFooter";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EditSVG from "../components/SVGs/EditSVG";
import { decrementStep } from "../redux/Slices/RegisterSlice";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const SignUp: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: RootState) => state.register);

  const [jwt, setJwt, removeJwt] = useLocalStorage("token", "");
  const navigate = useNavigate();

  useEffect(() => {
    if (jwt !== "") navigate("/home");
  }, []);

  return (
    <div className="sign-up">
      <SignNav />
      <div className="sign-up-content-container">
        {state.step !== 1 && state.plan != null ? (
          <div className="sign-up-plan-selected">
            <div className="sign-up-plan-selected-left">
              <p className="sign-up-plan-selected-left-type">Standard</p>
            </div>
            <div className="sign-up-plan-selected-right">
              <p className="sign-up-plan-selected-right-price">
                $ {state.plan.price},00/{state.plan.duration} mths
              </p>
              <button
                onClick={() => {
                  dispatch(decrementStep());
                }}
                className="sign-up-plan-selected-right-button"
              >
                <EditSVG height={20} width={20} />
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
        <RegisterStepCounter step={state.step} changeStep={() => {}} />
        <div className="sing-up-content">
          {determineModalContent(state.step)}
        </div>
      </div>
      <SignFooter />
    </div>
  );
};
