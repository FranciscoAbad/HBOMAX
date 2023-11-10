import React, { useState } from "react";

import "./SignFooter.css";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const SignFooter: React.FC = () => {
  const [dropDown, setDrowDown] = useState<boolean>(false);

  const toggleDropDown = () => {
    setDrowDown(!dropDown);
  };
  return (
    <div className="sign-footer-container">
      <div className="sign-footer-list">
        <button className="sign-footer-list-item-button">
          Política de Privacidad
        </button>
        <button className="sign-footer-list-item-button">
          Términos de uso
        </button>
        <button className="sign-footer-list-item-button">Información</button>
        <button
          onClick={toggleDropDown}
          className="sign-footer-list-item-toggle"
        >
          <LanguageIcon sx={{ height: 12 }} />
          Español (Latinoamericano)
          {dropDown ? (
            <KeyboardArrowDownIcon sx={{ width: 22 }} />
          ) : (
            <KeyboardArrowUpIcon sx={{ width: 22 }} />
          )}
        </button>
        {dropDown ? (
          <div className="sign-footer-list-item-dropmenu">
            <button className="sign-footer-list-item-dropmenu-button">
              English (US)
            </button>
            <button className="sign-footer-list-item-dropmenu-button">
              Español (Latinoamericano)
            </button>
            <button className="sign-footer-list-item-dropmenu-button">
              Português (Brasil)
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
