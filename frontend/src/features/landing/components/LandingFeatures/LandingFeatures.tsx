import React from "react";

import "./LandingFeatures.css";
import "../../../../assets/global.css";

export const LandingFeatures: React.FC = () => {
  return (
    <div className="landing-features">
      <div className="landing-features-container container">
        <div className="landing-features-header">
          <h1 className="landing-features-header-title">
            Una experiencia sencilla y completa
          </h1>
          <p className="landing-features-header-text">
            Disponibilidad varía de acuerdo al plan.
          </p>
        </div>
        <div className="landing-features-banner">
          <img
            src="https://hbomax-images.warnermediacdn.com/2021-07/device_car_eng.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&amp"
            alt=""
          />
        </div>
        <div className="landing-features-band">
          <div className="landing-features-band-flex">
            <div className="landing-features-band-flex-item">
              <div className="landing-features-band-flex-item-line"></div>
              <p className="landing-features-band-flex-item-text">
                Personaliza tu experiencia creando hasta 5 perfiles distintos
              </p>
            </div>
            <div className="landing-features-band-flex-item">
              <div className="landing-features-band-flex-item-line"></div>
              <p className="landing-features-band-flex-item-text">
                Descarga tus historias preferidas para disfrutar offline donde
                quieras
              </p>
            </div>
            <div className="landing-features-band-flex-item">
              <div className="landing-features-band-flex-item-line"></div>
              <p className="landing-features-band-flex-item-text">
                Crea perfiles para los pequeños con contenido de acuerdo a su
                edad
              </p>
            </div>
            <div className="landing-features-band-flex-item">
              <div className="landing-features-band-flex-item-line"></div>
              <p className="landing-features-band-flex-item-text">
                Agrega tus títulos favoritos para verlos cuando quieras
              </p>
            </div>
          </div>
        </div>
        <div className="landing-features-footer">
          <div className="landing-features-footer-item">
            <img
              src="https://hbomax-images.warnermediacdn.com/2021-05/ben10.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=486"
              alt=""
            />
          </div>
          <div className="landing-features-footer-item">
            <h2 className="landing-features-footer-text">
              Grandes opciones de entretenimiento para toda la familia
            </h2>
          </div>
          <div className="landing-features-footer-item">
            <img
              src="https://hbomax-images.warnermediacdn.com/2021-05/fam_and_kids-looney_toons-img.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=480 480w, https://hbomax-images.warnermediacdn.com/2021-05/fam_and_kids-looney_toons-img.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=556"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
