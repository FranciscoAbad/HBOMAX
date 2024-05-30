import React, { ChangeEvent, ReactEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../AccountDetails/AccountDetails.css";
import EditSVG from "../../../../components/SVGs/EditSVG";
import { AppDispatch, RootState } from "../../../../redux/Store";
import "./AccountEditForm.css";
import { ValidatedTextInput } from "../../../../components/ValidateInput/ValidatedTextInput";
import { validatePassword } from "../../../../services/validator";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "../../../../redux/Slices/RegisterSlice";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
export const AccountEditFormPassword: React.FC = () => {
  const stateUser = useSelector((state: RootState) => state.user);
  const [passwordView, setPasswordView] = useState<boolean>(false);
  const [currentPasswordValid, setCurrentPasswordValid] =
    useState<boolean>(true);
  const [newPasswordValid, setNewPasswordValid] = useState<boolean>(true);
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const navigate = useNavigate();

  const state = useSelector((state: RootState) => state.user);
  const dispatcher: AppDispatch = useDispatch();

  const handleChangeCurrentPassword = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setCurrentPassword(e.target.value);
  };

  const handleChangeNewPassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewPassword(e.target.value);
    setNewPasswordValid(validatePassword(e.target.value));
  };

  const update = () => {
    setCurrentPasswordValid(currentPassword.length > 0);
    setNewPasswordValid(validatePassword(newPassword));
    if (
      state.loggedIn &&
      currentPasswordValid &&
      newPasswordValid &&
      newPassword &&
      currentPassword
    ) {
      console.log("asdfasd");
    }
  };

  const toggleView = () => {
    setPasswordView(!passwordView);
  };

  return (
    <div className="account-details-container">
      <h1>Change Your Password</h1>
      <div className="account-edit-form">
        <div className="account-edit-form-row">
          <ValidatedTextInput
            valid={currentPasswordValid}
            label={"Current Password"}
            name={"password"}
            changeValue={handleChangeCurrentPassword}
            attributes={{
              minLength: 8,
              type: passwordView ? "text" : "password",
            }}
          />
          <div onClick={toggleView} className="register-password-input-icon">
            {passwordView ? (
              <VisibilityOffOutlinedIcon
                sx={{
                  fontSize: "24px",
                }}
              />
            ) : (
              <VisibilityOutlinedIcon
                sx={{
                  fontSize: "24px",
                }}
              />
            )}
          </div>
          {currentPasswordValid ? (
            <></>
          ) : (
            <p className="error">
              <ErrorOutlineIcon /> Tu contraseña debe tener, como mínimo, 6
              caracteres
            </p>
          )}
        </div>
        <div className="account-edit-form-row">
          <ValidatedTextInput
            valid={newPasswordValid}
            label={"New Password"}
            name={"password"}
            changeValue={handleChangeNewPassword}
            attributes={{
              minLength: 8,
              type: passwordView ? "text" : "password",
            }}
          />
          <div onClick={toggleView} className="register-password-input-icon">
            {passwordView ? (
              <VisibilityOffOutlinedIcon
                sx={{
                  fontSize: "24px",
                }}
              />
            ) : (
              <VisibilityOutlinedIcon
                sx={{
                  fontSize: "24px",
                }}
              />
            )}
          </div>
          {newPasswordValid ? (
            <></>
          ) : (
            <p className="error">
              <ErrorOutlineIcon /> Your password should have at least 6
              characters and one number
            </p>
          )}
        </div>
        <div className="account-edit-form-row">
          <div className="account-edit-form-row-button" onClick={update}>
            Save
          </div>
          <div
            className="account-edit-form-row-button"
            onClick={() => {
              navigate("/account");
            }}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};
