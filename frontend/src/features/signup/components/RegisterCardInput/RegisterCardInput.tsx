import React, { useState } from "react";
import { ValidatedTextInput } from "../../../../components/ValidateInput/ValidatedTextInput";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/Store";
import { updateRegister } from "../../../../redux/Slices/RegisterSlice";
import {
  validateCreditCardNumber,
  validateName,
} from "../../../../services/validator";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { error } from "console";
import "./RegisterCardInput.css";

export const RegisterCardInput: React.FC = () => {
  const [cardNumberValid, setCardNumberValid] = useState<boolean>(true);

  const dispatch: AppDispatch = useDispatch();

  const updateCardNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateRegister({ name: e.target.name, value: e.target.value }));

    let valid = validateCreditCardNumber(e.target.value);
    setCardNumberValid(valid);

    dispatch(updateRegister({ name: "cardNumber", value: valid }));
  };
  return (
    <div className="register-card-input">
      <div className="register-card-content">
        <ValidatedTextInput
          valid={cardNumberValid}
          name={"cardNumber"}
          label={"Card Number"}
          changeValue={updateCardNumber}
          attributes={{ maxLength: 50 }}
        />
        {cardNumberValid ? (
          <></>
        ) : (
          <span className="register-card-error">
            <ErrorOutlineIcon /> The Card Number that you've provided is invalid
          </span>
        )}
      </div>
    </div>
  );
};
