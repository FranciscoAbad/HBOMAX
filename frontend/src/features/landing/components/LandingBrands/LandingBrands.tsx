import React, { useState } from "react";

import "../../../../assets/global.css";
import "./LandingBrands.css";
import cardsData from "../../../../data/LandingBrandsContent.json";
export const LandingBrands: React.FC = () => {
  const [showContent, setShowContent] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const allFalse: boolean = showContent.every((value) => value === false);

  const toggleContent = (index: number) => {
    const updatedShowContent = [false, false, false, false, false];
    updatedShowContent[index] = !showContent[index];
    setShowContent(updatedShowContent);
  };
  return (
    <div className="landing-brands">
      <div className="landing-brands-container container">
        <div className="landing-brands-header">
          <h2 className="landing-brands-header-title">
            Muchos universos por descubrir
          </h2>
        </div>
        <div className="landing-brands-content">
          <div className="landing-brands-content-row">
            {cardsData.map((card, index) => (
              <div
                key={card.id}
                onClick={() => toggleContent(index)}
                className="landing-brands-content-row-card"
              >
                <div
                  className={`landing-brands-content-row-card-imgbox ${
                    allFalse ? "" : showContent[index] ? "active" : "disabled"
                  }`}
                >
                  <img
                    className="landing-brands-content-row-card-imgbox-default"
                    src={card.header.default}
                    alt=""
                  />
                  <img
                    className="landing-brands-content-row-card-imgbox-hover"
                    src={card.header.hover}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
          {cardsData.map((data, index) => (
            <div
              key={data.id}
              className={`landing-brands-content-displayed ${
                showContent[index] ? "slide-in" : "slide-out"
              }`}
            >
              <div className="landing-brands-content-displayed-head">
                <h3 className="landing-brands-content-displayed-head-title">
                  {data.header.title}
                </h3>
              </div>
              <div className="landing-brands-content-displayed-grid">
                {data.content.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="landing-brands-content-displayed-grid-item"
                  >
                    <img src={image} alt="" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="landing-brands-footer">
          <div className="landing-brands-footer-button">SUSCRIBETE AHORA</div>
        </div>
      </div>
    </div>
  );
};
