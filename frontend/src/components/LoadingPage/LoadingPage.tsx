import React from "react";
import "./LoadingPage.css";

export const LoadingPage: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
    </div>
  );
};
