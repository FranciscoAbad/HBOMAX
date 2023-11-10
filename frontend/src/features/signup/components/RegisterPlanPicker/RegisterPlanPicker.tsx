import React from "react";

import TvIcon from "@mui/icons-material/Tv";
import LaptopIcon from "@mui/icons-material/Laptop";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TabletIcon from "@mui/icons-material/Tablet";

import "./RegisterPlanPicker.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/Store";
import {
  incrementStep,
  updateRegister,
} from "../../../../redux/Slices/RegisterSlice";

export const RegisterPlanPicker: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="register-plan-picker">
      <h1 className="register-plan-picker-title">
        Elige tu experiencia HBO Max
      </h1>
      <p className="register-plan-picker-text">
        Disfruta series y películas de HBO, Warner Bros, Max Originals y más con
        el plan Estándar
      </p>
      <div className="register-plan-picker-plans">
        <div className="register-plan-picker-plans-card">
          <div className="register-plan-picker-plans-card-top">
            <h3 className="register-plan-picker-plans-card-top-title">1 Mes</h3>
            <h4 className="register-plan-picker-plans-card-top-price">
              $ 699,00<span>/m.</span>
            </h4>
            <ul className="register-plan-picker-plans-card-top-info">
              <li className="register-plan-picker-plans-card-top-info-item">
                Todos los dispositivos
              </li>
              <li className="register-plan-picker-plans-card-top-info-item">
                3 Dispositivos a la vez
              </li>
              <li className="register-plan-picker-plans-card-top-info-item">
                Alta definicion y 4K
              </li>
              <li className="register-plan-picker-plans-card-top-info-item">
                Descarga hasta 30 titulos
              </li>
              <li className="register-plan-picker-plans-card-top-info-item">
                5 perfiles
              </li>
            </ul>
          </div>
          <div className="register-plan-picker-plans-card-mid">
            <TvIcon sx={{ height: 15 }} /> <LaptopIcon sx={{ height: 15 }} />
            <PhoneIphoneIcon sx={{ height: 15 }} />
            <TabletIcon sx={{ height: 15 }} /> Todos los dispositivos
          </div>
          <div className="register-plan-picker-plans-card-bot">
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
                dispatch(incrementStep());
              }}
              className="register-plan-picker-plans-card-bot-button"
            >
              ELIGE ESTE PLAN
            </button>
          </div>
        </div>
        <div className="register-plan-picker-plans-card">
          <div className="register-plan-picker-plans-card-top">
            <h3 className="register-plan-picker-plans-card-top-title">3 Mes</h3>
            <h4 className="register-plan-picker-plans-card-top-price">
              $ 1.899,00<span>/3 mm.</span>
            </h4>
            <ul className="register-plan-picker-plans-card-top-info">
              <li className="register-plan-picker-plans-card-top-info-item">
                Todos los dispositivos
              </li>
              <li className="register-plan-picker-plans-card-top-info-item">
                3 Dispositivos a la vez
              </li>
              <li className="register-plan-picker-plans-card-top-info-item">
                Alta definicion y 4K
              </li>
              <li className="register-plan-picker-plans-card-top-info-item">
                Descarga hasta 30 titulos
              </li>
              <li className="register-plan-picker-plans-card-top-info-item">
                5 perfiles
              </li>
            </ul>
          </div>
          <div className="register-plan-picker-plans-card-mid">
            <TvIcon sx={{ height: 15 }} /> <LaptopIcon sx={{ height: 15 }} />
            <PhoneIphoneIcon sx={{ height: 15 }} />
            <TabletIcon sx={{ height: 15 }} /> Todos los dispositivos
          </div>
          <div className="register-plan-picker-plans-card-bot">
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
                dispatch(incrementStep());
              }}
              className="register-plan-picker-plans-card-bot-button"
            >
              ELIGE ESTE PLAN
            </button>
          </div>
        </div>
        <div className="register-plan-picker-plans-card">
          <div className="register-plan-picker-plans-card-top">
            <h3 className="register-plan-picker-plans-card-top-title">
              12 Mes
            </h3>
            <h4 className="register-plan-picker-plans-card-top-price">
              $ 5.999,00<span>/12mm.</span>
            </h4>
            <ul className="register-plan-picker-plans-card-top-info">
              <li className="register-plan-picker-plans-card-top-info-item">
                Todos los dispositivos
              </li>
              <li className="register-plan-picker-plans-card-top-info-item">
                3 Dispositivos a la vez
              </li>
              <li className="register-plan-picker-plans-card-top-info-item">
                Alta definicion y 4K
              </li>
              <li className="register-plan-picker-plans-card-top-info-item">
                Descarga hasta 30 titulos
              </li>
              <li className="register-plan-picker-plans-card-top-info-item">
                5 perfiles
              </li>
            </ul>
          </div>
          <div className="register-plan-picker-plans-card-mid">
            <TvIcon sx={{ height: 15 }} /> <LaptopIcon sx={{ height: 15 }} />
            <PhoneIphoneIcon sx={{ height: 15 }} />
            <TabletIcon sx={{ height: 15 }} /> Todos los dispositivos
          </div>
          <div className="register-plan-picker-plans-card-bot">
            <button
              onClick={() => {
                dispatch(
                  updateRegister({
                    name: "plan",
                    value: {
                      type: "premium",
                      price: 5999,
                      duration: 12,
                      screens: 5,
                    },
                  })
                );
                dispatch(incrementStep());
              }}
              className="register-plan-picker-plans-card-bot-button"
            >
              ELIGE ESTE PLAN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
