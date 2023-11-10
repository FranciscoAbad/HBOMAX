import React from "react";

import Hbomax from "../../../../assets/hbomax-med.svg";
import "./SignNav.css";
export const SignNav: React.FC = () => {
  return (
    <div className="sign-nav-container">
      <div className="sign-nav-logo">
        <img src={Hbomax} alt="" className="sign-nav-logo-svg" />
      </div>
      <div className="sing-nav-right">
        <button className="sign-nav-right-button">INICIAR SESIÓN</button>
      </div>
    </div>
  );
};
