import React, { useEffect, useState } from "react";
import "./FeedFilter.css";
import { FeedNav } from "../features/feed/components/FeedNav/FeedNav";
import { FeedHeaderSlider } from "../features/feed/components/FeedHeaderSlider/FeedHeaderSlider";
import { FeedContentFilterNav } from "../features/feed/components/FeedContentFilterNav/FeedContentFilterNav";
import { FeedTitleSlider } from "../features/feed/components/FeedTitleSlider/FeedTitleSlider";
import { filterItsGenre } from "../features/feed/components/FeedContentFilter/utils/determineFetchUrl";
import { FeedTitlesGrid } from "../features/feed/components/FeedGridTitles/FeedTitlesGrid";
import types from "../assets/Json/filters.json";
import { FeedTitleHero } from "../features/feed/components/FeedTitleHero/FeedTitleHero";
import { FeedGenreSlider } from "../features/feed/components/FeedGenreSlider/components/FeedGenreSlider";
import { FeedFooter } from "../features/feed/components/FeedFooter/FeedFooter";

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
      <FeedTitleSlider
        fetchUrl={`title/title/type/movie/trending`}
        title="Trending"
        subTitle=""
        banner={false}
        big={false}
        info={false}
      />
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
            fetchUrl={`title/all/genre/action`}
            title="Adrenaline Unleashed"
            subTitle="High-octane action, non-stop thrills"
            banner={false}
            big={false}
            info={false}
          />
          <FeedTitleSlider
            fetchUrl={`title/all/genre/horror`}
            title="Terrifying Tales Await"
            subTitle="Dive into a chilling collection of horror"
            banner={false}
            big={false}
            info={false}
          />
          <FeedTitleHero fetchUrl={`title/all/genre/drama`} />
          <FeedTitleSlider
            fetchUrl={`title/all/genre/drama`}
            title="Powerful Stories, Deep Emotions"
            subTitle="Experience the intensity of drama unfold"
            banner={false}
            big={true}
            info={false}
          />
          <FeedGenreSlider />
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
      <FeedFooter />
    </div>
  );
};
