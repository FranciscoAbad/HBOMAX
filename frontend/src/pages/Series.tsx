import React, { useState } from "react";
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

interface FilterTypes {
  label: string;
}

export const Series: React.FC = () => {
  const filters: FilterTypes[] = types as FilterTypes[];

  const [filter, setFilter] = useState<string>("featured");
  return (
    <div className="feed-filter">
      <FeedNav title={"Series"} />
      <FeedHeaderSlider fetchUrl={`title/title/type/tv-show/trending`} />
      <FeedContentFilterNav changeValue={setFilter} types={types} />
      {filter === "featured" ? (
        <>
          <FeedTitleSlider
            fetchUrl={`title/title/type/tv-show/trending`}
            title="Trending"
            subTitle=""
            banner={false}
            big={false}
            info={false}
          />
          <FeedTitleSlider
            fetchUrl={`title/title/type/tv-show/genre/drama`}
            title="Compelling Tales, Deep Emotions"
            subTitle="Powerful stories that keep you hooked"
            banner={false}
            big={false}
            info={false}
          />
          <FeedTitleSlider
            fetchUrl={`title/title/type/tv-show/genre/animation`}
            title="Worlds of Imagination"
            subTitle="Dive into captivating animated adventures"
            banner={false}
            big={false}
            info={false}
          />
          <FeedTitleSlider
            fetchUrl={`title/title/type/tv-show/genre/crime`}
            title="Crimes, Clues, and Conspiracies"
            subTitle="Gripping crime shows that keep you guessing"
            banner={false}
            big={true}
            info={false}
          />
          <FeedTitleHero fetchUrl={`title/all/genre/drama`} />

          <FeedTitleSlider
            fetchUrl={`title/title/type/tv-show/genre/action`}
            title="Unstoppable Adventures"
            subTitle="Explosive action and thrilling stories await"
            banner={false}
            big={false}
            info={false}
          />
          <FeedGenreSlider />
        </>
      ) : (
        <FeedTitlesGrid
          fetchUrl={
            filterItsGenre(filter)
              ? `title/title/type/tv-show/genre/${filter}`
              : `title/title/type/tv-show/${filter}`
          }
          banner={false}
        />
      )}
    </div>
  );
};
