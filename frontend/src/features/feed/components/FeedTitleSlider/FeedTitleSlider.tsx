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
import { Image } from "../../../../utils/GlobalInterfaces";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import exp from "constants";
import { determineBreakPoints } from "../../utils/DetermineBreakPoints";

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

interface TitleDTO {
  titleId: number;
  title: string;
  brandName: string;
  banner: Image;
  poster: Image;
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
  const [data, setData] = useState<TitleDTO[]>([]);
  const [isPrevButtonVisible, setIsPrevButtonVisible] = useState(false);
  const [isNextButtonVisible, setIsNextButtonVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<TitleDTO[]>(
          "http://localhost:8080/title/all/genre/horror"
        );

        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error("Error--->", error);
      }
    };
    fetchData();
  }, []);

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
              <div className="feed-title-slide-content-side">
                <div className="feed-title-slide-content-side-title">
                  {sideSlide.title}
                </div>
                <div className="feed-title-slide-content-side-subTitle">
                  {sideSlide.subTitle}
                </div>
                <div className="feed-title-slide-content-side-button">
                  {sideSlide.buttonLabel}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="feed-title-slide"></SwiperSlide>
          </>
        ) : (
          <></>
        )}

        {data.map((item) => (
          <SwiperSlide className="feed-title-slide">
            <div className="feed-title-slide-content">
              <img src={banner ? item.banner.imageURL : item.poster.imageURL} />
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
