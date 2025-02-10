import React, { useEffect } from "react";
import "./FeedTitleHero.css";
import { TitleDTO } from "../../../../utils/GlobalInterfaces";
import { useFetchTitles } from "../../../../hooks/useFetchTitles";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {
  getYear,
  replacePipesWithSpaces,
} from "../../../title/utils/TitleUtils";
interface FeedTitleHeroProps {
  fetchUrl: string;
}

export const FeedTitleHero: React.FC<FeedTitleHeroProps> = ({ fetchUrl }) => {
  const { data, isFetchig } = useFetchTitles({ fetchUrl });

  useEffect(() => {}, []);

  return (
    <div className="feed-title-hero-container">
      <div className="feed-title-hero-background">
        <div className="feed-title-hero-background-image-hide">
          <img
            className="feed-title-hero-background-image"
            src={data[0]?.banner.imageURL}
          ></img>
        </div>
      </div>
      <div className="feed-title-hero">
        <div className="feed-title-hero-content">
          <div className="feed-title-hero-content-image">
            <img src={data[0]?.name.imageURL} alt="" />
          </div>
          <p className="feed-title-hero-content-details">
            <span>{data[0]?.rating}</span>
            <span>{data[0] && getYear(data[0]?.releaseDate)}</span>
          </p>
          <p className="feed-title-hero-content-overview">
            {data[0] && replacePipesWithSpaces(data[0]?.overview)}
          </p>
          <div className="feed-title-hero-content-buttons">
            <button className="feed-title-hero-content-buttons-watch">
              Watch now
            </button>
            <button className="feed-title-hero-content-buttons-info">
              <HelpOutlineIcon sx={{ width: 20, height: 20 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
