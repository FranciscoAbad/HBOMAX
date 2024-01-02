import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper as SwiperType } from "swiper";
import axios from "axios";
import { Image } from "../../../../utils/GlobalInterfaces";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./FeedHeaderSlider.css";
import { useFetchTitles } from "../../../../hooks/useFetchTitles";

interface FeedHeaderSliderProps {
  fetchUrl: string;
}

export const FeedHeaderSlider: React.FC<FeedHeaderSliderProps> = ({
  fetchUrl,
}) => {
  const { data, isFetchig } = useFetchTitles({ fetchUrl });
  const [isPrevButtonVisible, setIsPrevButtonVisible] = useState(false);
  const [isNextButtonVisible, setIsNextButtonVisible] = useState(true);

  const handleSlideChange = (swiper: SwiperType) => {
    if (swiper.activeIndex === 0) {
      setIsPrevButtonVisible(false);
    } else {
      if (isPrevButtonVisible !== true) {
        setIsPrevButtonVisible(true);
      }
    }
    if (swiper.isEnd) {
      setIsNextButtonVisible(false);
    } else {
      if (isNextButtonVisible !== true) {
        setIsNextButtonVisible(true);
      }
    }
  };

  return (
    <div className="feed-header-slider-container">
      <div className="feed-header-slider-gradient-one"></div>
      <div className="feed-header-slider-gradient-two"></div>
      <div className="feed-header-slider-gradient-three"></div>
      <div className="feed-header-slider-gradient-four"></div>
      <div className="feed-header-slider-gradient-five"></div>
      <Swiper
        className="feed-header-slider"
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: ".feed-title-slide-prev",
          nextEl: ".feed-title-slide-next",
        }}
        pagination={{ clickable: true }}
        speed={900}
        effect="Cube"
        onSlideChange={(swiper: SwiperType) => handleSlideChange(swiper)}
        modules={[Navigation, Pagination]}
      >
        <div className="feed-title-slide-nav-prev">
          <div
            className={`feed-title-slide-prev ${
              isPrevButtonVisible ? "show" : "hide"
            }`}
          >
            <ArrowBackIosNewIcon sx={{ width: 20, height: 20 }} />
          </div>
        </div>
        <SwiperSlide className="feed-header-slide">
          <div className="feed-header-slide-content">
            <img src="https://art-gallery-latam.api.hbo.com/images/GX4h8rwVrhsPCwwEAAAIl/tile?v=77e4dfdb55e586b918b6bf6083f049b1&size=3840x2160&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:hbo&language=en-us" />
            <div className="feed-title-slide-content-controlls">
              <div className="feed-title-slide-content-controlls-button">
                <PlayArrowIcon sx={{ width: 25, height: 25 }} />
              </div>
              <div className="feed-title-slide-content-controlls-button">
                <AddIcon sx={{ width: 25, height: 25 }} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {data.map((item) => (
          <SwiperSlide className="feed-header-slide">
            <div className="feed-header-slide-content">
              <img src={item.banner.imageURL} />
              <div className="feed-title-slide-content-controlls">
                <div className="feed-title-slide-content-controlls-button">
                  <PlayArrowIcon sx={{ width: 25, height: 25 }} />
                </div>
                <div className="feed-title-slide-content-controlls-button">
                  <AddIcon sx={{ width: 25, height: 25 }} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="feed-title-slide-nav-next">
          <div
            className={`feed-title-slide-next ${
              isNextButtonVisible ? "show" : "hide"
            }`}
          >
            <ArrowForwardIosIcon sx={{ width: 20, height: 20 }} />
          </div>
        </div>
      </Swiper>
    </div>
  );
};
