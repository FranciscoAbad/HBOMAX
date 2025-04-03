import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FeedContentFilter } from "../features/feed/components/FeedContentFilter/FeedContentFilter";
import "./FeedFilter.css";
import { FeedNav } from "../features/feed/components/FeedNav/FeedNav";
import { FeedHeaderSlider } from "../features/feed/components/FeedHeaderSlider/FeedHeaderSlider";
import { FeedContentFilterNav } from "../features/feed/components/FeedContentFilterNav/FeedContentFilterNav";
import { FeedTitleSlider } from "../features/feed/components/FeedTitleSlider/FeedTitleSlider";
import { FeedTitlesGrid } from "../features/feed/components/FeedGridTitles/FeedTitlesGrid";
import types from "../assets/Json/genericFilters.json";
import { FeedTitleHero } from "../features/feed/components/FeedTitleHero/FeedTitleHero";
import { firstLetterToUpperCase } from "../features/title/utils/TitleUtils";
import { FeedGenreSlider } from "../features/feed/components/FeedGenreSlider/components/FeedGenreSlider";
import { FeedFooter } from "../features/feed/components/FeedFooter/FeedFooter";

export const FeedFilter: React.FC = () => {
  const { genre } = useParams<{ genre: string }>();
  const [filter, setFilter] = useState<string>("featured");

  useEffect(() => {}, [genre]);
  return (
    <div className="feed-filter">
      <FeedNav title={genre} />
      <FeedHeaderSlider fetchUrl={`title/title/genre/${genre}/trending`} />
      <FeedContentFilterNav changeValue={setFilter} types={types} />
      {filter === "featured" ? (
        <>
          <FeedTitleSlider
            fetchUrl={`title/all/genre/${genre}`}
            title={`${firstLetterToUpperCase(genre ? genre : "")} For You.`}
            subTitle=""
            banner={false}
            big={false}
            info={false}
          />

          <FeedTitleSlider
            fetchUrl={`title/title/type/movie/genre/${genre}`}
            title={`Top ${genre} Movies`}
            subTitle={`From Hollywood hits to indie gems—discover the best ${genre} films.`}
            banner={false}
            big={false}
            info={false}
          />
          <FeedTitleSlider
            fetchUrl={`title/title/type/tv-show/genre/${genre}`}
            title={`Must-Watch ${genre} TV Shows`}
            subTitle={`From gripping dramas to laugh-out-loud comedies—explore top ${genre} series.`}
            banner={false}
            big={false}
            info={false}
          />
          <FeedTitleHero fetchUrl={`title/all/genre/${genre}`} />
          <FeedTitleSlider
            fetchUrl={`title/title/genre/${genre}/trending`}
            title="Trending"
            subTitle=""
            banner={false}
            big={true}
            info={false}
          />
          <FeedGenreSlider />
        </>
      ) : (
        <FeedTitlesGrid
          fetchUrl={`title/title/genre/${genre}/${filter}`}
          banner={false}
        />
      )}
      <FeedFooter />
    </div>
  );
};
