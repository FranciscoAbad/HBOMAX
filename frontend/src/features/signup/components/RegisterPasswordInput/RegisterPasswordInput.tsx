import React, { useState } from "react";
import { ValidatedTextInput } from "../../../../components/ValidateInput/ValidatedTextInput";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { updateRegister } from "../../../../redux/Slices/RegisterSlice";
import { AppDispatch } from "../../../../redux/Store";
import { useDispatch } from "react-redux";
import "./RegisterPasswordInput.css";
import { validatePassword } from "../../../../services/validator";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export const RegisterPasswordInput: React.FC = () => {
  const [passwordView, togglePasswordView] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<boolean>(true);
  const dispatch: AppDispatch = useDispatch();

  const toggleView = () => {
    togglePasswordView(!passwordView);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateRegister({ name: "password", value: e.target.value }));
    setPasswordValid(validatePassword(e.target.value));
  };

  return (
    <div className="register-password-input">
      <ValidatedTextInput
        valid={passwordValid}
        label={"Password"}
        name={"password"}
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
      {passwordValid ? (
        <p className="register-password-input-text">
          Tu contraseña debe tener, como mínimo, 8 caracteres, e incluir un
          número o un carácter especial.
        </p>
      ) : (
        <p className="register-password-input-error">
          <ErrorOutlineIcon /> The password you've provided is invalid
        </p>
      )}
    </div>
  );
};
