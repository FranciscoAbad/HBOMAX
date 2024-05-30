import React from "react";

import "./LandingBanner.css";
import Hbomax from "../../../../assets/hbomax-med.svg";
import { useFetchFullTitle } from "../../../../hooks/useFetchFullTitle";

export const LandingBanner: React.FC = () => {
  return (
    <div className="landing-banner-container">
      <div className="landing-banner-grid">
        <div className="landing-banner-grid-item">
          <div className="landing-banner-grid-item-img-container"></div>
          <img src={Hbomax} alt="" className="landing-banner-grid-item-img" />
        </div>
        <div className="landing-banner-grid-item">
          <h2 className="landing-banner-grid-item-title">
            No importa qué te guste, en HBO Max <br />
            tienes todo y más.
          </h2>
        </div>
        <div className="landing-banner-grid-item">
          <h3 className="landing-banner-grid-item-price">$699,00/mes</h3>
        </div>
        <div className="landing-banner-grid-item">
          <div className="landing-banner-grid-item-button">
            SUSCRÍBETE AHORA
          </div>
        </div>
        <div className="landing-banner-grid-item-second">
          <img
            src="https://hbomax-images.warnermediacdn.com/2023-10/spa.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=846"
            alt=""
            className="landing-banner-grid-item-second-image"
          />
          <h3 className="landing-banner-grid-item-second-text">
            DISPONIBLE AHORA
          </h3>
        </div>
        <></>
        <></>
        <></>
      </div>
    </div>
  );
};
