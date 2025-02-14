import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper as SwiperType } from "swiper";
import "./FeedCollectionTitleSlider.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { determineBreakPoints } from "../../utils/DetermineBreakPoints";
import { useNavigate } from "react-router-dom";
import { useFetchTitles } from "../../../../hooks/useFetchTitles";
import { FeedTitleSliderItem } from "../FeedTitleSliderItem/FeedTitleSliderItem";
import { FeedTitleSideContent } from "../FeedTitleSideContent/FeedTitleSideContent";
import { useFetchCollection } from "../../../../hooks/useFetchCollection";
import { FeedCollectionSlideInfo } from "./FeedCollectionSlideInfo";

interface SliderTitleSide {
  title: string;
  subTitle: string;
  buttonLabel: string;
  imageUrl?: string;
}

interface FeedTitleSliderProps {
  fetchUrl: string;
  subTitle: string;
  banner: boolean;
  big: boolean;
  info: boolean;
}

export const FeedCollectionTitleSlider: React.FC<FeedTitleSliderProps> = ({
  fetchUrl,
  subTitle,
  banner,
  big,
  info,
}) => {
  const { collection, isFetching } = useFetchCollection(fetchUrl);
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
    <div className="feed-collection-title-slider-container">
      {true ? (
        <div className="feed-title-slider-image">
          <img src={collection?.heroPicture.imageURL} />
        </div>
      ) : (
        <></>
      )}
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
        breakpoints={determineBreakPoints(big, banner, true)}
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
        {true ? (
          <>
            <SwiperSlide className="feed-title-slide">
              <FeedCollectionSlideInfo
                buttonLabel="Browse Collection"
                subTitle={subTitle}
                imageUrl={collection ? collection?.namePicture.imageURL : ""}
              />
            </SwiperSlide>
            <SwiperSlide className="feed-title-slide"></SwiperSlide>
          </>
        ) : (
          <></>
        )}

        {collection?.collectionTitles.map((item) => (
          <SwiperSlide key={item.titleId}>
            <FeedTitleSliderItem banner={banner} item={item} info={info} />
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
