import React from "react";

import "./FeedTitleSliderItem.css";
import { TitleDTO } from "../../../../utils/GlobalInterfaces";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";
import {
  firstLettesToUpperCaseAndReplace,
  getYear,
} from "../../../title/utils/TitleUtils";

interface FeedTitleSliderItemProps {
  item: TitleDTO;
  banner: boolean;
  info: boolean;
}

export const FeedTitleSliderItem: React.FC<FeedTitleSliderItemProps> = ({
  item,
  banner,
  info,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        key={item.titleId}
        onClick={() => {
          navigate(`/title/${item.type}/${item.titleId}`);
        }}
        className="feed-title-slide-content"
      >
        <img
          src={banner ? item.banner.imageURL : item.poster.imageURL}
          loading="lazy"
        />
        <div className="feed-title-slide-content-controlls">
          <div className="feed-title-slide-content-controlls-button">
            <PlayArrowIcon sx={{ width: 25, height: 25 }} />
          </div>
          <div className="feed-title-slide-content-controlls-button">
            <AddIcon sx={{ width: 25, height: 25 }} />
          </div>
        </div>
      </div>
      {info ? (
        <div className="feed-title-slide-info">
          <p className="feed-title-slide-info-name">
            {firstLettesToUpperCaseAndReplace(item.title)}
          </p>
          <p className="feed-title-slide-info-rate">
            <span>{item.rating}</span> <span>{getYear(item.releaseDate)}</span>
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
