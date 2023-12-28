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

interface Title {
  id: number;
}

export const Title: React.FC = () => {
  const { id, type } = useParams<{ id: string; type: string }>();
  const [title, setTitle] = useState<FullTitle>();
  const [cast, setCast] = useState<Cast[]>([]);

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const response = await axios.get<FullTitle>(
          `http://localhost:8080/title/id/${id}`
        );

        setTitle(response.data);

        const { title, seasonNr, episodeNr } = response.data;

        const castResponse = await axios.get<Cast[]>(
          `http://localhost:8080/cast/get/all/${title}/${seasonNr}/${episodeNr}`
        );

        setCast(castResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTitle();
  }, [id]);

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
          runtime={title.runtime}
          quality={title.quality}
          rating={title.rating}
          releaseDate={title.releaseDate}
          type={type ? type : ""}
        />
      ) : (
        <></>
      )}
      {type === "tv-show" && title && <TitleEpisodes title={title.title} />}

      {type !== "episode" && (
        <FeedTitleSlider
          fetchUrl=""
          subTitle=""
          title="More like this"
          banner={false}
          big={false}
        />
      )}

      {type !== "tv-show" && title && (
        <TitlePersons rating={title.rating} cast={cast} />
      )}
      <FeedFooter />
    </div>
  );
};
