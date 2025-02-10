import React from "react";

import "../../FeedTitleSliderItem/FeedTitleSliderItem.css";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";
import { firstLettesToUpperCaseAndReplace } from "../../../../title/utils/TitleUtils";
import { Genre } from "../../../../../utils/GlobalInterfaces";

interface GenreSliderItem {
  id: number;
  label: string;
  filter: string;
  imageLink: string;
}
interface FeedGenreItemProps {
  item: GenreSliderItem;
}

export const FeedGenreItem: React.FC<FeedGenreItemProps> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        key={item.id}
        onClick={() => {
          navigate(`/genre/${item.filter}`);
        }}
        className="feed-title-slide-content"
      >
        <img src={item.imageLink ? item.imageLink : ""} />
      </div>
    </div>
  );
};
