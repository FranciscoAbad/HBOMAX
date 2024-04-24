import React from "react";
import { useSelector } from "react-redux";
import "../AccountDetails/AccountDetails.css";
import EditSVG from "../../../../components/SVGs/EditSVG";
import { RootState } from "../../../../redux/Store";
import "./AccountEditForm.css";
import { ValidatedTextInput } from "../../../../components/ValidateInput/ValidatedTextInput";
export const AccountEditFormEmail: React.FC = () => {
  const stateUser = useSelector((state: RootState) => state.user);

  return (
    <div className="account-details-container">
      <h1>Change Your Email</h1>
      <div className="account-edit-form">
        <div className="account-edit-form-row">
          <h4 className="account-edit-form-row-title">Email Address</h4>
          <p className="account-edit-form-row-text">
            {stateUser.loggedIn?.email}
          </p>
        </div>
        <div className="account-edit-form-row">
          <ValidatedTextInput
            valid={true}
            name="email"
            label="Email Adress"
            changeValue={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
