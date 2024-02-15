import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper as SwiperType } from "swiper";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./FeedHeaderSlider.css";
import { useFetchTitles } from "../../../../hooks/useFetchTitles";
import { FeedHeaderSliderItem } from "../FeedHeaderSliderItem/FeedHeaderSliderItem";

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

        {data.map((item) => (
          <SwiperSlide className="feed-header-slide">
            <FeedHeaderSliderItem item={item} />
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
