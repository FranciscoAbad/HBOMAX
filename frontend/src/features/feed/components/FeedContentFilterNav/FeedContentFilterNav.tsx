import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper as SwiperType } from "swiper";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { determineBreakPoints } from "../../utils/DetermineBreakPoints";
import { useNavigate } from "react-router-dom";
import { FeedTitleSliderItem } from "../FeedTitleSliderItem/FeedTitleSliderItem";
import types from "../../../../assets/Json/filters.json";
import "./FeedContentFitlerNav.css";

interface FeedContentFilterNavProps {
  changeValue: (param: string) => void;
}

interface FilterTypes {
  label: string;
  filter: string;
}

export const FeedContentFilterNav: React.FC<FeedContentFilterNavProps> = ({
  changeValue,
}) => {
  const filters: FilterTypes[] = types as FilterTypes[];
  const [isPrevButtonVisible, setIsPrevButtonVisible] = useState(false);
  const [isNextButtonVisible, setIsNextButtonVisible] = useState(true);
  const navigate = useNavigate();

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
    <>
      <div className="feed-title-slider-gradient"></div>
      <div className="feed-content-navigation">
        <Swiper
          className="feed-button-slider"
          spaceBetween={10}
          slidesPerView="auto"
          navigation={{
            prevEl: ".feed-button-slide-prev",
            nextEl: ".feed-button-slide-next",
          }}
          speed={900}
          effect="Cube"
          onSlideChange={(swiper: SwiperType) => handleSlideChange(swiper)}
          modules={[Navigation]}
        >
          <div className="feed-button-slide-nav-prev">
            <div
              className={`feed-button-slide-prev ${
                isPrevButtonVisible ? "show" : "hide"
              }`}
            >
              <ArrowBackIosNewIcon sx={{ width: 20, height: 20 }} />
            </div>
          </div>
          {filters.map((item, index) => (
            <SwiperSlide key={index} className="feed-content-navigation-slide">
              <div
                className="feed-content-navigation-button"
                onClick={() => {
                  changeValue(item.filter);
                }}
              >
                {item.label}
              </div>
            </SwiperSlide>
          ))}
          <div className="feed-button-slide-nav-next">
            <div
              className={`feed-button-slide-next ${
                isNextButtonVisible ? "show" : "hide"
              }`}
            >
              <ArrowForwardIosIcon sx={{ width: 20, height: 20 }} />
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};
