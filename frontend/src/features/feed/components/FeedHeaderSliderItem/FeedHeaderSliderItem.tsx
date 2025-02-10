import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { TitleDTO } from "../../../../utils/GlobalInterfaces";
import "./FeedHeaderSliderItem.css";

interface FeedHeaderSliderItemProps {
  item: TitleDTO;
}
export const FeedHeaderSliderItem: React.FC<FeedHeaderSliderItemProps> = ({
  item,
}) => {
  return (
    <>
      <div className="feed-header-slider-content-card">
        <img
          className="feed-header-slider-content-card-image"
          src={item.name.imageURL}
          alt=""
        />
        <h4 className="feed-header-slider-content-card-info">NEW RELEASE</h4>
        <p className="feed-header-slider-content-card-overview">
          {item.overview}
        </p>
        <div className="feed-header-slider-content-card-buttons">
          <div className="feed-header-slider-content-card-buttons-play">
            <PlayArrowIcon sx={{ width: 30, height: 30 }} />
          </div>
          <div className="feed-header-slider-content-card-buttons-more">
            MORE INFO
          </div>
        </div>
      </div>
      <div className="feed-header-slide-content">
        <div className="feed-header-slide-content-image-hide">
          <img src={item.banner.imageURL} />
        </div>

        <div className="feed-header-slider-gradient-one"></div>
        <div className="feed-header-slider-gradient-two"></div>
        <div className="feed-header-slider-gradient-three"></div>
        <div className="feed-header-slider-gradient-four"></div>
        <div className="feed-header-slider-gradient-five"></div>
      </div>
    </>
  );
};
