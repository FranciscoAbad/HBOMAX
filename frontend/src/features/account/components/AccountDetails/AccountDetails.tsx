import React, { useEffect } from "react";
import EditSVG from "../../../../components/SVGs/EditSVG";
import "./AccountDetails.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/Store";
import { useNavigate } from "react-router-dom";
import { LoadingPage } from "../../../../components/LoadingPage/LoadingPage";

export const AccountDetails: React.FC = () => {
  const stateUser = useSelector((state: RootState) => state.user);
  const isLoading = useSelector((state: RootState) => state.register.loading);
  const navigate = useNavigate();
  useEffect(() => {}, [isLoading]);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="account-details-container">
          <h1>Account</h1>
          <div className="account-details">
            <h3 className="account-details-title">Account details</h3>
            <div className="account-details-row">
              <h4 className="account-details-row-title">
                Email Address{" "}
                <EditSVG
                  height={35}
                  width={35}
                  onClick={() => {
                    navigate("/account/edit/email");
                  }}
                />
              </h4>
              <p className="account-details-row-text">
                {stateUser.loggedIn?.email}
              </p>
            </div>
            <div className="account-details-row">
              <h4 className="account-details-row-title">
                Password{" "}
                <EditSVG
                  height={35}
                  width={35}
                  onClick={() => {
                    navigate("/account/edit/password");
                  }}
                />
              </h4>
              <p className="account-details-row-text">*********</p>
            </div>
            <div className="account-details-row">
              <h4 className="account-details-row-title">
                Name{" "}
                <EditSVG
                  height={35}
                  width={35}
                  onClick={() => {
                    navigate("/account/edit/name");
                  }}
                />
              </h4>
              <p className="account-details-row-text">
                {stateUser.loggedIn?.firstName} {stateUser.loggedIn?.lastName}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
