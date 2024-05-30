import React, { useEffect, useState } from "react";
import "./FeedFilter.css";
import { FeedNav } from "../features/feed/components/FeedNav/FeedNav";
import { FeedHeaderSlider } from "../features/feed/components/FeedHeaderSlider/FeedHeaderSlider";
import { FeedContentFilterNav } from "../features/feed/components/FeedContentFilterNav/FeedContentFilterNav";
import { FeedTitleSlider } from "../features/feed/components/FeedTitleSlider/FeedTitleSlider";
import { filterItsGenre } from "../features/feed/components/FeedContentFilter/utils/determineFetchUrl";
import { FeedTitlesGrid } from "../features/feed/components/FeedGridTitles/FeedTitlesGrid";
import types from "../assets/Json/filters.json";

interface FilterTypes {
  label: string;
}

export const Movies: React.FC = () => {
  const filters: FilterTypes[] = types as FilterTypes[];

  const [filter, setFilter] = useState<string>("featured");
  console.log(filter === "featured");

  useEffect(() => {}, [filter]);
  return (
    <div className="feed-filter">
      <FeedNav title={"Movies"} />
      <FeedHeaderSlider fetchUrl={`title/title/type/movie/trending`} />
      <FeedContentFilterNav changeValue={setFilter} types={types} />
      {filter === "featured" ? (
        <>
          <FeedTitleSlider
            fetchUrl={`title/title/type/movie/trending`}
            title="Trending"
            subTitle=""
            banner={false}
            big={false}
            info={false}
          />
          <FeedTitleSlider
            fetchUrl={`title/title/type/movie/just-added`}
            title="Just added"
            subTitle=""
            banner={true}
            big={true}
            info={false}
          />
          <FeedTitleSlider
            fetchUrl={`title/title/type/movie/just-added`}
            title="Trending"
            subTitle=""
            banner={false}
            big={true}
            info={true}
          />
        </>
      ) : (
        <FeedTitlesGrid
          fetchUrl={
            filterItsGenre(filter)
              ? `title/title/type/movie/genre/${filter}`
              : `title/title/type/movie/${filter}`
          }
          banner={false}
        />
      )}
    </div>
  );
};
