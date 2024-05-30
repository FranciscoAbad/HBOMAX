import React, { ChangeEvent, ReactEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../AccountDetails/AccountDetails.css";
import EditSVG from "../../../../components/SVGs/EditSVG";
import { AppDispatch, RootState } from "../../../../redux/Store";
import "./AccountEditForm.css";
import { ValidatedTextInput } from "../../../../components/ValidateInput/ValidatedTextInput";
import { validEmail, validateName } from "../../../../services/validator";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";
export const AccountEditFormName: React.FC = () => {
  const stateUser = useSelector((state: RootState) => state.user);

  const [firstValid, setFirstValid] = useState<boolean>(true);
  const [lastValid, setLastValid] = useState<boolean>(true);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const navigate = useNavigate();

  const state = useSelector((state: RootState) => state.user);
  const dispatcher: AppDispatch = useDispatch();

  const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>): void => {
    setFirstName(e.target.value);
    setFirstValid(validateName(e.target.value));
  };

  const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>): void => {
    setLastName(e.target.value);
    setLastValid(validateName(e.target.value));
  };

  const update = () => {
    if (state.loggedIn && firstName && lastName) {
      navigate("/account");
    }
  };

  return (
    <div className="account-details-container">
      <h1>Change Your Name</h1>
      <div className="account-edit-form">
        <div className="account-edit-form-row">
          <h4 className="account-edit-form-row-title">Current Name</h4>
          <p className="account-edit-form-row-text">
            {stateUser.loggedIn?.firstName} {stateUser.loggedIn?.lastName}
          </p>
        </div>
        <div className="account-edit-form-row m-bot">
          <ValidatedTextInput
            valid={firstValid}
            name="firstName"
            label="First Name"
            changeValue={handleChangeFirstName}
          />
          {firstValid ? (
            <></>
          ) : (
            <span className="error">
              <ErrorOutlineIcon /> Please enter a First Name.
            </span>
          )}
        </div>
        <div className="account-edit-form-row">
          <ValidatedTextInput
            valid={lastValid}
            name="lastName"
            label="Last Name"
            changeValue={handleChangeLastName}
          />
          {lastValid ? (
            <></>
          ) : (
            <span className="error">
              <ErrorOutlineIcon /> Please enter a valid Last Name.
            </span>
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
