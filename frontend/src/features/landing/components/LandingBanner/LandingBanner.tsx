import React from "react";

import "./LandingBanner.css";
import Hbomax from "../../../../assets/hbomax-med.svg";
import { useFetchFullTitle } from "../../../../hooks/useFetchFullTitle";
import { useNavigate } from "react-router-dom";

export const LandingBanner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-banner-container">
      <div className="landing-banner-grid">
        <div className="landing-banner-grid-item">
          <div className="landing-banner-grid-item-img-container"></div>
          <img src={Hbomax} alt="" className="landing-banner-grid-item-img" />
        </div>
        <div className="landing-banner-grid-item">
          <h2 className="landing-banner-grid-item-title">
            No matter what you like, on HBO Max <br /> you have everything and
            more.
          </h2>
        </div>
        <div className="landing-banner-grid-item">
          <h3 className="landing-banner-grid-item-price">$699,00/mes</h3>
        </div>
        <div className="landing-banner-grid-item">
          <div
            className="landing-banner-grid-item-button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            SUBSCRIBE NOW
          </div>
        </div>
        <div className="landing-banner-grid-item-second">
          <img
            src="https://hbomax-images.warnermediacdn.com/2023-10/spa.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=846"
            alt=""
            className="landing-banner-grid-item-second-image"
          />
          <h3 className="landing-banner-grid-item-second-text">
            AVAILABLE NOW
          </h3>
        </div>
        <></>
        <></>
        <></>
      </div>
    </div>
  );
};
