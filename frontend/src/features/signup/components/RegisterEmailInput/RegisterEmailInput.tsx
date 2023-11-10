import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateRegister } from "../../../../redux/Slices/RegisterSlice";
import { AppDispatch } from "../../../../redux/Store";
import { ValidatedTextInput } from "../../../../components/ValidateInput/ValidatedTextInput";
import { validEmail } from "../../../../services/validator";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import "./RegisterEmailInput.css";

interface RegisterEmailInputProps {
  email: string;
}

export const RegisterEmailInput: React.FC<RegisterEmailInputProps> = ({
  email,
}) => {
  const dispatcher: AppDispatch = useDispatch();
  const [emailValid, setEmailValid] = useState(true);

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatcher(updateRegister({ name: e.target.name, value: e.target.value }));

    let valid = validEmail(e.target.value);
    setEmailValid(valid);
    dispatcher(updateRegister({ name: "emailValid", value: valid }));
  };

  return (
    <div className="register-email-input">
      <ValidatedTextInput
        valid={emailValid}
        changeValue={updateEmail}
        name={"email"}
        label={"Email Adress"}
        data={email}
      />
      {emailValid ? (
        <></>
      ) : (
        <span className="register-email-error">
          <ErrorOutlineIcon /> Please enter a valid email.
        </span>
      )}
    </div>
  );
};

interface RegisterConfirmEmailProps {
  confirmEmail: string;
  originalEmail: string;
}

export const RegisterConfirmEmail: React.FC<RegisterConfirmEmailProps> = ({
  confirmEmail,
  originalEmail,
}) => {
  const dispatcher: AppDispatch = useDispatch();

  const [emailValid, setEmailValid] = useState(true);

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatcher(updateRegister({ name: e.target.name, value: e.target.value }));

    let valid = validEmail(e.target.value) && originalEmail === e.target.value;
    setEmailValid(valid);
    dispatcher(updateRegister({ name: "emailValid", value: valid }));
  };
  return (
    <div className="register-email-input">
      <ValidatedTextInput
        valid={emailValid}
        changeValue={updateEmail}
        name={"confirmEmail"}
        label={"Confirm Email Adress"}
        data={confirmEmail}
      />
      {emailValid ? (
        <></>
      ) : (
        <span className="register-email-error">
          <ErrorOutlineIcon /> The emails do not match
        </span>
      )}
    </div>
  );
};
