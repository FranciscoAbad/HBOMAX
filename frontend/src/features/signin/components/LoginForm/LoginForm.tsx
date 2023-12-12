import React, { useEffect, useState } from "react";
import { RegisterNameInput } from "../../../signup/components/RegisterNameInput/RegisterNameInput";
import { RegisterEmailInput } from "../../../signup/components/RegisterEmailInput/RegisterEmailInput";
import { RegisterPasswordInput } from "../../../signup/components/RegisterPasswordInput/RegisterPasswordInput";
import "./LoginForm.css";
import { AppDispatch, RootState } from "../../../../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../../redux/Slices/UserSlice";
import { ValidatedTextInput } from "../../../../components/ValidateInput/ValidatedTextInput";
import { useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

export const LoginForm: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordView, togglePasswordView] = useState<boolean>(false);
  const state = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    const loginInfo = {
      username: userName,
      password: password,
    };
    dispatch(loginUser(loginInfo));
  };
  const toggleView = () => {
    togglePasswordView(!passwordView);
  };

  useEffect(() => {
    if (state.loggedIn) {
      navigate("/home");
      return () => {};
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    }

    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
    console.log(password + userName + "asfasf");
  };
  return (
    <div className="login-form">
      <h1 className="login-form-title">Inicia sesión</h1>
      <div className="login-form-inputs-wrapper">
        <div className="login-form-inputs-row">
          <ValidatedTextInput
            valid={true}
            name="userName"
            label="User Name"
            changeValue={handleChange}
          />
        </div>
        <div className="login-form-inputs-row">
          <ValidatedTextInput
            valid={true}
            name="password"
            label="Password"
            changeValue={handleChange}
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
        </div>
        <div className="login-form-bottom">
          <div className="login-form-bottom-wrapper">
            <button
              onClick={handleClick}
              className="login-form-bottom-wrapper-submit"
            >
              INICIAR SESIÓN
            </button>
            <button className="login-form-bottom-wrapper-provider">
              INICIAR SESIÓN CON UN PROVEEDOR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
