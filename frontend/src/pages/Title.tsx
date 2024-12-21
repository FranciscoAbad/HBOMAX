import React, { useEffect, useState } from "react";
import { FeedNav } from "../features/feed/components/FeedNav/FeedNav";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Cast, FullTitle } from "../utils/GlobalInterfaces";
import { TitleHeader } from "../features/title/components/TitleHeader/TitleHeader";
import "./Title.css";
import { FeedTitleSlider } from "../features/feed/components/FeedTitleSlider/FeedTitleSlider";
import { TitlePersons } from "../features/title/components/TitlePersons/TitlePersons";
import { TitleEpisodes } from "../features/title/components/TitleEpisode/TitleEpisodes";
import { FeedFooter } from "../features/feed/components/FeedFooter/FeedFooter";
import { useFetchFullTitle } from "../hooks/useFetchFullTitle";
import { useMakeView } from "../hooks/useMakeView";
import { TitleSharp } from "@mui/icons-material";

interface Title {
  id: number;
}

export const Title: React.FC = () => {
  const { id, type } = useParams<{ id: string; type: string }>();
  const { title, isFetching } = useFetchFullTitle(id ? id : "");
  useMakeView(id ? id : "");
  const [cast, setCast] = useState<Cast[]>([]);

  useEffect(() => {}, [id]);

  return (
    <div className="title">
      <FeedNav />
      {title ? (
        <TitleHeader
          imageId={title.titleId}
          title={title.title}
          season={title.seasonNr}
          episode={title.episodeNr}
          episodeName={title.episodeName}
          overview={title.overview}
          imagePath={title.bannerPicture.imageURL}
          namePath={title.namePicture ? title.namePicture.imageURL : ""}
          runtime={title.runTime}
          quality={title.quality}
          rating={title.rating}
          votes={title.votes}
          releaseDate={title.releaseDate}
          type={type ? type : ""}
          popularity={title.popularity}
        />
      ) : (
        <></>
      )}
      {type === "tv-show" && title && <TitleEpisodes title={title.title} />}

      {type !== "episode" && !isFetching && (
        <FeedTitleSlider
          fetchUrl={`title/all/genre/${title?.genres[0].genre}`}
          subTitle=""
          title="More like this"
          banner={false}
          big={false}
          info={false}
        />
      )}

      {type !== "tv-show" && title && (
        <TitlePersons rating={title.rating} cast={cast} />
      )}
      <FeedFooter />
    </div>
  );
};
