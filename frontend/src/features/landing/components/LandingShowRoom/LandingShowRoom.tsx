import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./LandingShowRoom.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper as SwiperType } from "swiper";
import PrevSVG from "../../../../components/SVGs/PrevSVG";
import NextSVG from "../../../../components/SVGs/NextSVG";

export const LandingShowRoom: React.FC = () => {
  return (
    <div className="landing-show-room">
      <div className="landing-show-room-container">
        <div className="landing-show-room-header">
          <h1 className="landing-show-room-header-title">
            Episodios gratis, sin necesidad de suscripción
          </h1>
        </div>
        <div className="landing-show-room-content">
          <div className="landing-show-room-content-swiper-container">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              pagination
              navigation
              spaceBetween={0}
              slidesPerView={1}
            >
              <SwiperSlide>
                <div className="landing-show-room-swiper-card">
                  <div className="landing-show-room-swiper-card-content">
                    <h3>30 MONEDAS</h3>
                    <p>VER GRATIS</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="landing-show-room-swiper-card">
                  <div className="landing-show-room-swiper-card-content">
                    <h3>30 MONEDAS</h3>
                    <p>VER GRATIS</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="landing-show-room-swiper-card">
                  <div className="landing-show-room-swiper-card-content">
                    <h3>30 MONEDAS</h3>
                    <p>VER GRATIS</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="landing-show-room-swiper-card">
                  <div className="landing-show-room-swiper-card-content">
                    <h3>30 MONEDAS</h3>
                    <p>VER GRATIS</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="landing-show-room-swiper-card">
                  <div className="landing-show-room-swiper-card-content">
                    <h3>30 MONEDAS</h3>
                    <p>VER GRATIS</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="landing-show-room-swiper-card">
                  <div className="landing-show-room-swiper-card-content">
                    <h3>30 MONEDAS</h3>
                    <p>VER GRATIS</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
