import { ArrowRightAltOutlined } from "@mui/icons-material";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./LandingReleases.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper as SwiperType } from "swiper";
import PrevSVG from "../../../../components/SVGs/PrevSVG";
import NextSVG from "../../../../components/SVGs/NextSVG";

export const LandingReleases: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const swiperRef = useRef<SwiperType>();
  const handleSlideChange = (swiper: SwiperType) => {
    // Swiper passes the instance as an argument
    const currentIndex = swiper.activeIndex + 1;
    setCurrentIndex(currentIndex);
  };
  const handlePrevSlide = (e: React.MouseEvent<HTMLDivElement>) => {
    const newSlideIndex = currentIndex - 1;
    if (newSlideIndex >= 1) {
      setCurrentIndex(newSlideIndex);
      swiperRef.current?.slidePrev(); // Use the swiper instance to navigate to the previous slide
    }
  };
  const handleNextSlide = (e: React.MouseEvent<HTMLDivElement>) => {
    const newSlideIndex = currentIndex + 1;
    if (newSlideIndex <= 5) {
      setCurrentIndex(newSlideIndex);
      swiperRef.current?.slideNext();
    }
  };
  return (
    <div className="landing-releases-container">
      <h2 className="landing-releases-title">
        Estrenos que se convertirán en nuevos favoritos.
      </h2>

      <div className="landing-releases-swiper-container">
        <div>
          <Swiper
            onSwiper={(swiper: SwiperType) => {
              swiperRef.current = swiper;
            }}
            className="landing-releases-swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={(swiper: SwiperType) => handleSlideChange(swiper)}
          >
            <SwiperSlide>
              <div className="landing-releases-flex-band">
                <div className="landing-releases-flex-band-card">
                  <div className="landing-releases-flex-band-card-details">
                    <h3 className="landing-releases-flex-band-card-details-title">
                      Doom Patrol T4
                    </h3>
                    <div className="landing-releases-flex-band-card-details-body">
                      <p className="landing-releases-flex-band-card-details-body-text">
                        En el comienzo de esta temporada el equipo viaja
                        inesperadamente al futuro y encuentra una sorpresa
                        desagradable
                      </p>
                      <div className="landing-releases-flex-band-card-details-body-cast">
                        <div className="landing-releases-flex-band-card-details-body-cast-member">
                          <img
                            src="https://hbomax-images.warnermediacdn.com/2023-09/Cliff.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
                            alt=""
                          />
                          <p>BRENDAN FRASER</p>
                          <p className="bold">ES CLIFF STEELE</p>
                        </div>
                        <div className="landing-releases-flex-band-card-details-body-cast-member">
                          <img
                            src="https://hbomax-images.warnermediacdn.com/2023-09/Cliff.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
                            alt=""
                          />
                          <p>BRENDAN FRASER</p>
                          <p className="bold">ES CLIFF STEELE</p>
                        </div>
                        <div className="landing-releases-flex-band-card-details-body-cast-member">
                          <img
                            src="https://hbomax-images.warnermediacdn.com/2023-09/Cliff.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
                            alt=""
                          />
                          <p>BRENDAN FRASER</p>
                          <p className="bold">ES CLIFF STEELE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="landing-releases-flex-band-card"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="landing-releases-flex-band">
                <div className="landing-releases-flex-band-card">
                  <div className="landing-releases-flex-band-card-details">
                    <h3 className="landing-releases-flex-band-card-details-title">
                      Doom Patrol T4
                    </h3>
                    <div className="landing-releases-flex-band-card-details-body">
                      <p className="landing-releases-flex-band-card-details-body-text">
                        En el comienzo de esta temporada el equipo viaja
                        inesperadamente al futuro y encuentra una sorpresa
                        desagradable
                      </p>
                      <div className="landing-releases-flex-band-card-details-body-cast">
                        <div className="landing-releases-flex-band-card-details-body-cast-member">
                          <img
                            src="https://hbomax-images.warnermediacdn.com/2023-09/Cliff.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
                            alt=""
                          />
                          <p>BRENDAN FRASER</p>
                          <p className="bold">ES CLIFF STEELE</p>
                        </div>
                        <div className="landing-releases-flex-band-card-details-body-cast-member">
                          <img
                            src="https://hbomax-images.warnermediacdn.com/2023-09/Cliff.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
                            alt=""
                          />
                          <p>BRENDAN FRASER</p>
                          <p className="bold">ES CLIFF STEELE</p>
                        </div>
                        <div className="landing-releases-flex-band-card-details-body-cast-member">
                          <img
                            src="https://hbomax-images.warnermediacdn.com/2023-09/Cliff.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
                            alt=""
                          />
                          <p>BRENDAN FRASER</p>
                          <p className="bold">ES CLIFF STEELE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="landing-releases-flex-band-card"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="landing-releases-flex-band">
                <div className="landing-releases-flex-band-card">
                  <div className="landing-releases-flex-band-card-details">
                    <h3 className="landing-releases-flex-band-card-details-title">
                      Doom Patrol T4
                    </h3>
                    <div className="landing-releases-flex-band-card-details-body">
                      <p className="landing-releases-flex-band-card-details-body-text">
                        En el comienzo de esta temporada el equipo viaja
                        inesperadamente al futuro y encuentra una sorpresa
                        desagradable
                      </p>
                      <div className="landing-releases-flex-band-card-details-body-cast">
                        <div className="landing-releases-flex-band-card-details-body-cast-member">
                          <img
                            src="https://hbomax-images.warnermediacdn.com/2023-09/Cliff.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
                            alt=""
                          />
                          <p>BRENDAN FRASER</p>
                          <p className="bold">ES CLIFF STEELE</p>
                        </div>
                        <div className="landing-releases-flex-band-card-details-body-cast-member">
                          <img
                            src="https://hbomax-images.warnermediacdn.com/2023-09/Cliff.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
                            alt=""
                          />
                          <p>BRENDAN FRASER</p>
                          <p className="bold">ES CLIFF STEELE</p>
                        </div>
                        <div className="landing-releases-flex-band-card-details-body-cast-member">
                          <img
                            src="https://hbomax-images.warnermediacdn.com/2023-09/Cliff.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
                            alt=""
                          />
                          <p>BRENDAN FRASER</p>
                          <p className="bold">ES CLIFF STEELE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="landing-releases-flex-band-card"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="landing-releases-flex-band">
                <div className="landing-releases-flex-band-card">
                  <div className="landing-releases-flex-band-card-details">
                    <h3 className="landing-releases-flex-band-card-details-title">
                      Doom Patrol T4
                    </h3>
                    <div className="landing-releases-flex-band-card-details-body">
                      <p className="landing-releases-flex-band-card-details-body-text">
                        En el comienzo de esta temporada el equipo viaja
                        inesperadamente al futuro y encuentra una sorpresa
                        desagradable
                      </p>
                      <div className="landing-releases-flex-band-card-details-body-cast">
                        <div className="landing-releases-flex-band-card-details-body-cast-member">
                          <img
                            src="https://hbomax-images.warnermediacdn.com/2023-09/Cliff.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
                            alt=""
                          />
                          <p>BRENDAN FRASER</p>
                          <p className="bold">ES CLIFF STEELE</p>
                        </div>
                        <div className="landing-releases-flex-band-card-details-body-cast-member">
                          <img
                            src="https://hbomax-images.warnermediacdn.com/2023-09/Cliff.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
                            alt=""
                          />
                          <p>BRENDAN FRASER</p>
                          <p className="bold">ES CLIFF STEELE</p>
                        </div>
                        <div className="landing-releases-flex-band-card-details-body-cast-member">
                          <img
                            src="https://hbomax-images.warnermediacdn.com/2023-09/Cliff.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
                            alt=""
                          />
                          <p>BRENDAN FRASER</p>
                          <p className="bold">ES CLIFF STEELE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="landing-releases-flex-band-card"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="landing-releases-flex-band">
                <div className="landing-releases-flex-band-card">
                  <div className="landing-releases-flex-band-card-details">
                    <h3 className="landing-releases-flex-band-card-details-title">
                      Doom Patrol T4
                    </h3>
                    <div className="landing-releases-flex-band-card-details-body">
                      <p className="landing-releases-flex-band-card-details-body-text">
                        En el comienzo de esta temporada el equipo viaja
                        inesperadamente al futuro y encuentra una sorpresa
                        desagradable
                      </p>
                      <div className="landing-releases-flex-band-card-details-body-cast">
                        <div className="landing-releases-flex-band-card-details-body-cast-member">
                          <img
                            src="https://hbomax-images.warnermediacdn.com/2023-09/Cliff.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
                            alt=""
                          />
                          <p>BRENDAN FRASER</p>
                          <p className="bold">ES CLIFF STEELE</p>
                        </div>
                        <div className="landing-releases-flex-band-card-details-body-cast-member">
                          <img
                            src="https://hbomax-images.warnermediacdn.com/2023-09/Cliff.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
                            alt=""
                          />
                          <p>BRENDAN FRASER</p>
                          <p className="bold">ES CLIFF STEELE</p>
                        </div>
                        <div className="landing-releases-flex-band-card-details-body-cast-member">
                          <img
                            src="https://hbomax-images.warnermediacdn.com/2023-09/Cliff.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
                            alt=""
                          />
                          <p>BRENDAN FRASER</p>
                          <p className="bold">ES CLIFF STEELE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="landing-releases-flex-band-card"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="landing-releases-fade-background">
        <div className="landing-releases-controls-container">
          <div className="landing-releases-controls">
            <div className="landing-releases-slider-controls">
              <div
                className={
                  currentIndex === 1
                    ? "landing-releases-slider-controls-prev"
                    : "landing-releases-slider-controls-prev active"
                }
                onClick={handlePrevSlide}
              >
                <PrevSVG height={14} width={20} />
              </div>
              <div className="landing-releases-slider-controls-pagination">
                <span className="landing-release-slider-controls-pagination-current">
                  {currentIndex}
                </span>
                <span className="landing-release-slider-controls-pagination-divider">
                  /
                </span>
                <span className="landing-release-slider-controls-pagination-total">
                  5
                </span>
              </div>
              <div
                className={
                  currentIndex === 5
                    ? "landing-releases-slider-controls-next"
                    : "landing-releases-slider-controls-next active"
                }
                onClick={handleNextSlide}
              >
                <NextSVG height={14} width={20} />
              </div>
              <div className="swipper-pagination"></div>
            </div>
          </div>

          <div className="landing-releases-controls-button-container">
            <div className="landing-releases-controls-button">
              SUSCRIBETE AHORA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
