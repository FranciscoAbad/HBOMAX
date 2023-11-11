import React from "react";
import { RegisterNameInput } from "../RegisterNameInput/RegisterNameInput";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/Store";
import "./RegisterForm.css";
import {
  RegisterConfirmEmail,
  RegisterEmailInput,
} from "../RegisterEmailInput/RegisterEmailInput";
import { RegisterPasswordInput } from "../RegisterPasswordInput/RegisterPasswordInput";
import { incrementStep } from "../../../../redux/Slices/RegisterSlice";
export const RegisteForm: React.FC = () => {
  const registerState = useSelector((state: RootState) => state.register);
  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    dispatch(incrementStep());
  };

  return (
    <div className="register-form">
      <h1 className="register-form-title">Crea tu cuenta</h1>
      <p className="register-form-text">
        Accede a una biblioteca de entretenimiento genial, estes donde estés.
      </p>
      <div className="register-form-inputs-wrapper">
        <div className="register-form-inputs-row">
          <RegisterNameInput
            firstName={registerState.firstName}
            lastName={registerState.lastName}
          />
        </div>
        <div className="register-form-inputs-row">
          <RegisterEmailInput email={registerState.email} />
        </div>
        <div className="register-form-inputs-row">
          <RegisterConfirmEmail
            originalEmail={registerState.email}
            confirmEmail={registerState.confirmEmail}
          />
        </div>
        <div className="register-form-inputs-row">
          <RegisterPasswordInput />
        </div>
        <div className="register-form-bottom">
          <div className="register-form-bottom-wrapper">
            <p className="register-form-bottom-wrapper-terms">
              Al hacer clic en Crear cuenta, confirmas que tienes al menos 18
              años, aceptas los Términos de Uso, y reconoces que has leído y
              aceptado nuestra Política de Privacidad. Además, reconoces que te
              enviaremos ofertas de marketing, promociones y otras ofertas de
              HBO Max y sus Afiliadas por e-mail, redes sociales y otros
              canales. Si creas un Perfil Infantil, aceptas el procesamiento de
              la información personal recopilada a través de ese perfil de
              acuerdo a la Política de Privacidad, si dicho consentimiento es
              requerido en el lugar donde vives.
            </p>
            <button
              disabled={
                !registerState.firstNameValid ||
                !registerState.lastNameValid ||
                !registerState.emailValid ||
                registerState.password === "" ||
                registerState.confirmEmail === ""
              }
              onClick={handleClick}
              className="register-form-bottom-wrapper-submit"
            >
              CREAR CUENTA
            </button>
          </div>
          <p className="register-form-bottom-text">
            Para cancelar en cualquier momento o para obtener más información
            sobre tus derechos y cómo ejercerlos, consultas las opciones
            disponibles en la Política de Privacidad.
          </p>
        </div>
      </div>
    </div>
  );
};
