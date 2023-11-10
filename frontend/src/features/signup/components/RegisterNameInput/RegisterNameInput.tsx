import React, { useState } from "react";
import { ValidatedTextInput } from "../../../../components/ValidateInput/ValidatedTextInput";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/Store";
import { updateRegister } from "../../../../redux/Slices/RegisterSlice";
import { validateName } from "../../../../services/validator";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { error } from "console";
import "./RegisterNameInput.css";

interface RegisterNameInputProps {
  firstName: string;
  lastName: string;
}

export const RegisterNameInput: React.FC<RegisterNameInputProps> = ({
  firstName,
  lastName,
}) => {
  const [firstValid, setFirstValid] = useState<boolean>(true);
  const [lastValid, setLastValid] = useState<boolean>(true);

  const dispatch: AppDispatch = useDispatch();

  const updateName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "firstName") {
      dispatch(updateRegister({ name: e.target.name, value: e.target.value }));

      let valid = validateName(e.target.value);
      setFirstValid(valid);

      dispatch(updateRegister({ name: "firstNameValid", value: valid }));
    }

    if (e.target.name === "lastName") {
      dispatch(updateRegister({ name: e.target.name, value: e.target.value }));

      let valid = validateName(e.target.value);
      setLastValid(valid);

      dispatch(updateRegister({ name: "lastNameValid", value: valid }));
    }
  };

  return (
    <div className="register-name-input">
      <div className="register-name-content">
        <ValidatedTextInput
          valid={firstValid}
          name={"firstName"}
          label={"First Name"}
          changeValue={updateName}
          data={firstName}
          attributes={{ maxLength: 50 }}
        />
        {firstValid ? (
          <></>
        ) : (
          <span className="register-name-error">
            <ErrorOutlineIcon /> What's your name
          </span>
        )}
      </div>
      <div className="register-name-content">
        <ValidatedTextInput
          valid={lastValid}
          name={"lastName"}
          label={"Last Name"}
          changeValue={updateName}
          data={lastName}
          attributes={{ maxLength: 50 }}
        />
        {lastValid ? (
          <></>
        ) : (
          <span className="register-name-error">
            {" "}
            <ErrorOutlineIcon /> What's your name
          </span>
        )}
      </div>
    </div>
  );
};

export const RegisterFullNameInput: React.FC = () => {
  const [fullNameValid, setFullNameValid] = useState<boolean>(true);

  const dispatch: AppDispatch = useDispatch();

  const updateName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateRegister({ name: e.target.name, value: e.target.value }));

    let valid = validateName(e.target.value);
    setFullNameValid(valid);

    dispatch(updateRegister({ name: "firstNameValid", value: valid }));
  };
  return (
    <div className="register-name-input">
      <div className="register-fullname-content">
        <ValidatedTextInput
          valid={fullNameValid}
          name={"fullName"}
          label={"Full Name"}
          changeValue={updateName}
          attributes={{ maxLength: 50 }}
        />
        {fullNameValid ? (
          <></>
        ) : (
          <span className="register-name-error">
            <ErrorOutlineIcon /> What's your name
          </span>
        )}
      </div>
    </div>
  );
};
