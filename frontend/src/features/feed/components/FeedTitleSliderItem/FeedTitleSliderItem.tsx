import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper as SwiperType } from "swiper";
import "./FeedTitleSliderItem.css";
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

interface FeedTitleSliderItemProps {
  item: TitleDTO;
  banner: boolean;
}

export const FeedTitleSliderItem: React.FC<FeedTitleSliderItemProps> = ({
  item,
  banner,
}) => {
  const navigate = useNavigate();
  return (
    <div
      key={item.titleId}
      onClick={() => {
        navigate(`/title/${item.type}/${item.titleId}`);
      }}
      className="feed-title-slide-content"
    >
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
  );
};
