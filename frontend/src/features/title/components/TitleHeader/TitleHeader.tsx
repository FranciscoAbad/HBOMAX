import React, { useEffect } from "react";
import "./TitleHeader.css";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { removeSlashAndAllToUpperCase } from "../../utils/TitleUtils";
import { TitleRater } from "../TitleRater/TitleRater";

interface TitleHeaderImageProps {
  imageId: number;
  title: string;
  episode: number;
  season: number;
  episodeName: string;
  overview: string;
  imagePath: string;
  namePath: string;
  runtime: number;
  quality: string;
  rating: string;
  releaseDate: string;
  type: string;
  votes: number;
  popularity: number;
}

export const TitleHeader: React.FC<TitleHeaderImageProps> = ({
  imageId,
  title,
  episode,
  season,
  episodeName,
  overview,
  imagePath,
  namePath,
  runtime,
  quality,
  rating,
  releaseDate,
  type,
  votes,
  popularity,
}) => {
  useEffect(() => {
    console.log(runtime);
  }, []);
  return (
    <div className="title-header-container">
      <div className="title-header-background">
        <div className="title-header-background-image-hide">
          <img className="title-header-background-image" src={imagePath}></img>
        </div>
        <div className="title-header-backgroud-gradient-one"></div>
        <div className="title-header-backgroud-gradient-two"></div>
        <div className="title-header-backgroud-gradient-three"></div>
        <div className="title-header-backgroud-gradient-four"></div>
        <div className="title-header-backgroud-gradient-five"></div>
      </div>

      <div className="title-header-content">
        <div className="title-header-content-container">
          {type !== "episode" ? (
            <img src={namePath} className="title-header-content-image" />
          ) : (
            <>
              <h3 className="title-header-content-title">
                {removeSlashAndAllToUpperCase(title)}
              </h3>
              <h2 className="title-header-content-episode">
                S{season} E{episode}:{" "}
                {removeSlashAndAllToUpperCase(episodeName)}
              </h2>
            </>
          )}
          <h4 className="title-header-content-info">
            <span>{runtime} MIN</span>
            <span>{rating}</span>
            <span> {quality}</span>
          </h4>
          <div className="title-header-content-controlls">
            <div className="title-header-content-controlls-play">
              <PlayArrowIcon sx={{ width: 30, height: 30 }} />
            </div>
            <div className="title-header-content-controlls-add">
              <AddIcon sx={{ width: 30, height: 30 }} />
            </div>
            <TitleRater
              titleId={imageId}
              titlePopularity={popularity}
              titleVotes={votes}
            />
          </div>
          <div className="title-header-content-overview">{overview}</div>
        </div>
      </div>
    </div>
  );
};
