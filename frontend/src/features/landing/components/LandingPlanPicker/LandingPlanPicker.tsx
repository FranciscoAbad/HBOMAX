import React from "react";
import "./LandingPlanPicker.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/Store";
import { updateRegister } from "../../../../redux/Slices/RegisterSlice";

export const LandingPlanPicker: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="landing-planpicker">
      <div className="landing-planpicker-container">
        <h1 className="landing-planpicker-title">Elige tu plan Estándar</h1>
        <div className="landing-planpicker-details">
          <p className="landing-planpicker-details-title">
            ¿QUÉ ESTA INCLUIDO?
          </p>
          <div className="landing-planpicker-details-group">
            <p className="landing-planpicker-details-group-text">
              <div className="landing-planpicker-details-group-point"></div>
              Disfruta en todas tus pantallas.
            </p>
            <p className="landing-planpicker-details-group-text">
              <div className="landing-planpicker-details-group-point"></div>
              Chromecast y Airplay disponibles.
            </p>
            <p className="landing-planpicker-details-group-text">
              <div className="landing-planpicker-details-group-point"></div>
              Ve en 3 dispositivos a la vez.
            </p>
            <p className="landing-planpicker-details-group-text">
              <div className="landing-planpicker-details-group-point"></div>
              Contenido en alta definición y 4K.
            </p>
            <p className="landing-planpicker-details-group-text">
              <div className="landing-planpicker-details-group-point"></div>
              Descarga y disfruta donde sea.
            </p>
            <p className="landing-planpicker-details-group-text">
              <div className="landing-planpicker-details-group-point"></div>
              Hasta 5 perfiles para toda la familia.
            </p>
          </div>
        </div>
        <div className="landing-planpicker-options">
          <div className="landing-planpicker-option">
            <h3 className="landing-planpicker-option-time">3 meses</h3>
            <div className="landing-planpicker-option-price-container">
              <h3 className="landing-planpicker-option-price">$ 1.899,00</h3>
              <p className="landing-planpicker-option-text">
                Igual a $ 630,00 al mes
              </p>
            </div>
            <button
              onClick={() => {
                dispatch(
                  updateRegister({
                    name: "plan",
                    value: {
                      type: "basic",
                      price: 630,
                      duration: 1,
                      screens: 2,
                    },
                  })
                );
              }}
              className="landing-planpicker-option-button"
            >
              ELIGE ESTE PLAN
            </button>
          </div>
          <div className="landing-planpicker-option default-plan">
            <h3 className="landing-planpicker-option-time">12 meses</h3>
            <div className="landing-planpicker-option-price-container">
              <h3 className="landing-planpicker-option-price">$ 5.999,00</h3>
              <p className="landing-planpicker-option-text">
                Igual a $ 630,00 al mes
              </p>
            </div>
            <button
              onClick={() => {
                dispatch(
                  updateRegister({
                    name: "plan",
                    value: {
                      type: "medium",
                      price: 1899,
                      duration: 3,
                      screens: 4,
                    },
                  })
                );
              }}
              className="landing-planpicker-option-button"
            >
              ELIGE ESTE PLAN
            </button>
          </div>
          <div className="landing-planpicker-option">
            <h3 className="landing-planpicker-option-time">1 meses</h3>
            <div className="landing-planpicker-option-price-container">
              <h3 className="landing-planpicker-option-price">$ 699,00</h3>
              <p className="landing-planpicker-option-text">
                Igual a $ 630,00 al mes
              </p>
            </div>
            <button
              onClick={() => {
                dispatch(
                  updateRegister({
                    name: "plan",
                    value: {
                      type: "premium",
                      price: 5999,
                      duration: 12,
                      screens: 4,
                    },
                  })
                );
              }}
              className="landing-planpicker-option-button"
            >
              ELIGE ESTE PLAN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
