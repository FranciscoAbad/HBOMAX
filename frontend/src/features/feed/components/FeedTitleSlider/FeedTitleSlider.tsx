import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper as SwiperType } from "swiper";
import "./FeedTitleSlider.css";
import axios from "axios";
import { Image, TitleDTO } from "../../../../utils/GlobalInterfaces";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import exp from "constants";
import { determineBreakPoints } from "../../utils/DetermineBreakPoints";
import { useNavigate } from "react-router-dom";
import { useFetchTitles } from "../../../../hooks/useFetchTitles";
import { FeedTitleSliderItem } from "../FeedTitleSliderItem/FeedTitleSliderItem";
import { FeedTitleSideContent } from "../FeedTitleSideContent/FeedTitleSideContent";

interface SliderTitleSide {
  title: string;
  subTitle: string;
  buttonLabel: string;
}

interface FeedTitleSliderProps {
  fetchUrl: string;
  title: string;
  subTitle: string;
  banner: boolean;
  big: boolean;
  backgroundFade?: string;
  sideSlide?: SliderTitleSide;
}

export const FeedTitleSlider: React.FC<FeedTitleSliderProps> = ({
  fetchUrl,
  title,
  subTitle,
  banner,
  backgroundFade,
  sideSlide,
  big,
}) => {
  const { data, isFetchig } = useFetchTitles({ fetchUrl });
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
    <div className="feed-title-slider-container">
      {backgroundFade ? (
        <div className="feed-title-slider-gradient"></div>
      ) : (
        <></>
      )}
      <div className="feed-title-slider-header">
        <h2 className="feed-title-slider-title">{title}</h2>
        {subTitle !== "" ? (
          <h4 className="feed-title-slider-subtitle">{subTitle}</h4>
        ) : (
          <></>
        )}
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
        breakpoints={determineBreakPoints(
          big,
          banner,
          sideSlide ? true : false
        )}
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
        {sideSlide ? (
          <>
            <SwiperSlide className="feed-title-slide">
              <FeedTitleSideContent sideSlide={sideSlide} />
            </SwiperSlide>
            <SwiperSlide className="feed-title-slide"></SwiperSlide>
          </>
        ) : (
          <></>
        )}

        {data.map((item) => (
          <SwiperSlide>
            <FeedTitleSliderItem banner={banner} item={item} />
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
