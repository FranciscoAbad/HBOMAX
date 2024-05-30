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
            fetchUrl={`title/title/genre/${genre}/trending`}
            title="Trending"
            subTitle=""
            banner={false}
            big={false}
            info={false}
          />
          <FeedTitleSlider
            fetchUrl={`title/titlegenre/${genre}/just-added`}
            title="Just added"
            subTitle=""
            banner={true}
            big={true}
            info={false}
          />
          <FeedTitleSlider
            fetchUrl={`title/title/genre/${genre}/just-added`}
            title="Trending"
            subTitle=""
            banner={false}
            big={true}
            info={true}
          />
        </>
      ) : (
        <FeedTitlesGrid
          fetchUrl={`title/title/genre/${genre}/${filter}`}
          banner={false}
        />
      )}
    </div>
  );
};
