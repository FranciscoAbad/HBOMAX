import React from "react";

import "../../FeedTitleSliderItem/FeedTitleSliderItem.css";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";
import { firstLettesToUpperCaseAndReplace } from "../../../../title/utils/TitleUtils";
import { Genre } from "../../../../../utils/GlobalInterfaces";

interface FeedGenreItemProps {
  item: Genre;
}

export const FeedGenreItem: React.FC<FeedGenreItemProps> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        key={item.genreId}
        onClick={() => {
          navigate(`/genre/${item.genre}`);
        }}
        className="feed-title-slide-content"
      >
        <img src={item.genrePicture ? item.genrePicture.imageURL : ""} />
      </div>
    </div>
  );
};
