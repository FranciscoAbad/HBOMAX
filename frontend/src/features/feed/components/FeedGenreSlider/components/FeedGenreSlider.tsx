import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper as SwiperType } from "swiper";
import "../../FeedTitleSlider/FeedTitleSlider.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { determineBreakPoints } from "../../../utils/DetermineBreakPoints";
import { useNavigate } from "react-router-dom";
import { FeedGenreItem } from "./FeedGenreItem";
import { useFetchGenres } from "../../../../../hooks/useFetchGenres";

interface SliderTitleSide {
  title: string;
  subTitle: string;
  buttonLabel: string;
  imageUrl?: string;
}

export const FeedGenreSlider: React.FC = () => {
  const [isPrevButtonVisible, setIsPrevButtonVisible] = useState(false);
  const [isNextButtonVisible, setIsNextButtonVisible] = useState(true);
  let { data, isFetchig } = useFetchGenres();
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
    <div className="feed-title-slider-container">
      <div className="feed-title-slider-header">
        <h2 className="feed-title-slider-title">Browse by Genre</h2>
      </div>
      <Swiper
        className="feed-title-slider"
        spaceBetween={0}
        slidesPerView={6.2}
        slidesPerGroup={6}
        navigation={{
          prevEl: ".feed-title-slide-prev",
          nextEl: ".feed-title-slide-next",
        }}
        speed={900}
        effect="Cube"
        onSlideChange={(swiper: SwiperType) => handleSlideChange(swiper)}
        modules={[Navigation]}
        breakpoints={determineBreakPoints(false, false, false)}
        onResize={(swiper: SwiperType) => handleSlideChange(swiper)}
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
          <SwiperSlide key={item.genreId}>
            <FeedGenreItem item={item} />
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
